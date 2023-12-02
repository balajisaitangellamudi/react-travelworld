import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SearchResults from "../Pages/SearchResults";
import Tours from "../Pages/Tours";
import TourDetails from "../Pages/TourDetails";
import Layout from "../Components/Layout/Layout";
import About from "../Pages/About";
import Thankyou from "../Pages/ThankYou";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/tour", element: <Tours /> },
      { path: "/tours/:id", element: <TourDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/thank-you", element: <Thankyou /> },
      { path: "tour/search", element: <SearchResults /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
