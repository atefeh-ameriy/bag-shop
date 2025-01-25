import React, { useState, useContext, useReducer, useRef, useEffect } from "react";
import { items } from "./components/Data.js";
import "./App.css";
const AppContext = React.createContext();

/*---filterrrrrr part1 making uniqe it--- pay attention for filtering we use original data item and for displing it we use usesate*/
const categoryArray = ["همه", ...new Set(items.map((item) => item.category))];
console.log(categoryArray);

const AppProvider = ({ children }) => { 


//barae function filter button ha bara filter az data asli items use krdim filtershe  va ya haem bood = items barae map krdn button ha az categoryData useState use shod

///ama barae search az data usestae(items) use krdim



  /*nav*/
  
  const [openNavMobile,setOpenNavMobile] = useState(false)

 const NavMobileClick = () =>{
    setOpenNavMobile(!openNavMobile)

 }
 const linksContainerRef = useRef(null)
 const linksRef = useRef(null)

 useEffect(()=>{
  const linksHeight = linksRef.current.getBoundingClientRect().height
  if(openNavMobile){
    linksContainerRef.current.style.height=`${linksHeight}px`
  }else{
    linksContainerRef.current.style.height='0px'
  }
 },[openNavMobile])


 /*end of nav*/








/*filter*/

  const [activeCategory, setActiveCategory] = useState(null);
  
  
   /*---filterrrrrr part usstate for category btn---*/

  const [categoryData, setCategoryData] = useState(categoryArray);
  const [data, setData] = useState(items);
  const [favorites, setFavorites] = useState([]);
  



   /*SEARCH*/

  const [search,setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  const containerRef = useRef(null);

  const filteredData = data.filter((item) =>
    search.toLowerCase() === "" ? true : item.name.toLowerCase().includes(search.toLowerCase())
  ); 
   // Close the product list and clear search term
     const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch("")
      }
      
    };
  
    // Add event listener for clicks outside
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);










  /*add to favorite*/
  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };
  /*------------filterrrrrr part-------------*/

  const Filter = (category) => {
    if (category === "همه") {
      setData(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    
    setData(newItems);
  };

  /*finish filterrrrrr part*/
    /*reducer*/
    const reducerFavorite = (state , action) => {
      switch (action.type) {
        case "ADD":
          const tempstate = state.filter((item) => action.payload.id === item.id);
          if (tempstate.length > 0) {
            return state;
          } else {
            return [...state, action.payload];
          }
  
  
        case "REMOVE":
          const tempstate3 = state.filter(
            (item) => item.id !== action.payload.id
          );
  
          return tempstate3;
  
        default:
          return state;
      }
    };
    const [statefav, dispatchfav] = useReducer(reducerFavorite, []);


  /*reducer*/
  const reducer = (state , action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((item) => action.payload.id === item.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "INCREASE":
        const tempstate1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "REMOVE":
        const tempstate3 = state.filter(
          (item) => item.id !== action.payload.id
        );

        return tempstate3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  /**/

  

  return (
    <AppContext.Provider
      value={{
        categoryData,
        Filter,
        data,
        state,
        dispatch,
        addToFavorites,
        favorites,
        setSearch,
         search,
         filteredData,
        activeCategory, setActiveCategory,statefav,dispatchfav,openNavMobile,NavMobileClick,linksContainerRef,linksRef,isOpen,handleClickOutside,containerRef,setIsOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
