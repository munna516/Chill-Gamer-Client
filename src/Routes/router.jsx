import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllReview from "../Pages/AllReview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import PrivateRoute from "../Routes/PrivateRoute";
import AddReview from "../Pages/AddReview";
import MyReview from "../Pages/MyReview";
import GameWatchlist from "../Pages/GameWatchlist";
import ReviewDetails from "../Pages/ReviewDetails";
import UpdateReview from "../Pages/UpdateReview";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/reviews",
        element: <AllReview></AllReview>,
        loader: () => fetch(`${import.meta.env.VITE_url}/reviews`),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_url}/reviews`),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateRoute>
            <GameWatchlist></GameWatchlist>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_url}/myWatchlist`),
      },
      {
        path: "/reviews/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/reviews/${params.id}`),
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/reviews/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
