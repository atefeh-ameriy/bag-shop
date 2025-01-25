import React, { useState, useContext} from "react";
const AppContext = React.createContext();



const AppProvider = ({ children }) => { 

 const [openNavMobile,setOpenNavMobile] = useState(false)

 const NavMobileClick = () =>{
    setOpenNavMobile(!openNavMobile)
    console.log(setOpenNavMobile)
 }

  return (
    <AppContext.Provider
      value={{
        openNavMobile,
        NavMobileClick
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContextNav = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
