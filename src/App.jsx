/*import {Route,  createBrowserRouter,createRoutesFromElements,RouterProvider,} from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const ProductItemlist = lazy(() => import("./pages/ProductItemlist"));
const ProductItem = lazy(() => import("./pages/About"));
const About = lazy(() => import("./pages/About"));

const Favorite = lazy(() => import("./pages/Favorite"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const Layouts = lazy(() => import("./layout/Layouts"));

const Bagstore = lazy(() => import("./pages/Bagstore"));
const Contact = lazy(() => import("./pages/Contact"));

const Login = lazy(() => import("./pages/Login"));

const Signup = lazy(() => import("./pages/Signup"));*/
import Home from "./pages/Home";
import ProductItemlist from "./pages/ProductItemlist";

  import ProductItem from "./pages/ProductItem";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import NotFoundPage from "./pages/NotFoundPage";
import Layouts from "./layout/Layouts";
import Bagstore from "./pages/Bagstore";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/productitemlist" element={<ProductItemlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/bagstore" element={<Bagstore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;

/*import Home from "./pages/Home";
  import ProductItem from "./pages/ProductItem";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import NotFoundPage from "./pages/NotFoundPage";
import Layouts from "./layout/Layouts";
import Bagstore from "./pages/Bagstore";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/productitemlist" element={<ProductItemlist/>} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/products/:id" element={<ProductItem />} />
        <Route path="/bagstore" element={<Bagstore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;*/
