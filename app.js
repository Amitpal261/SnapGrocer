import React, { Suspense, useEffect, useState } from "react";
import Header from "./Components/Header";
import "./index.css";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import ProductView from "./Components/ProductView";
import Cartwithdifficutly from "./Components/cartwithdifficutly.js";
import UserContext from "./Components/UserContext.js";
import UserInput from "./Components/UserInput.js";
import { Provider, useSelector } from "react-redux";
import appStore from "./Utility/store.js";
import AddToCarts from "./Components/AddToCarts.js";
const GroceryLazy = React.lazy(() => import("./Components/Grocery.js"));

let App = function () {
  const [dark, setDark] = useState(false);
  const [Username, setUsername] = useState("AMIT PAL")
 //console.log(Username);
 //const cartitems = useSelector()
  
  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Provider store={appStore}>
     <UserContext.Provider value={{ name: Username }}>
<div
   
  className="bg-gradient-to-r from-orange-700 via-orange-500 to-pink-200 text-text min-h-screen flex flex-col"
  style={{
    background:"radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.3), transparent), radial-gradient(circle at 80% 80%, rgba(255, 192, 203, 0.3), transparent)",
    // backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
  }}
>      
      {/* Header */}
      <Header />
        
      {/* Toggle Button
      <div className="flex justify-center py-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-lg border border-border bg-card hover:shadow-md transition"
        >
          Toggle Theme
        </button>
      </div>
       */}
        {/* <UserInput Username={Username}  setUsername={setUsername}/>    */}
      
      {/* Page Content */}
      <div className="flex-1 pt-15">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
   </UserContext.Provider>,
   </Provider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        
        element: <Cart/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact name={"NITIN"} add={"Khargpur"} />
      },
      {
        path: "/resturants/:id",
        element: <ProductView />
      },
           {
        path: "/cart",
        element: <AddToCarts />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading Grocery...</div>}>
            <GroceryLazy />
          </Suspense>
        )
      }
    ]
  }
]);

export default App;