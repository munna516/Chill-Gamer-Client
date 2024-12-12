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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/latestNews.json"),
      },
      {
        path: "/reviews",
        element: <AllReview></AllReview>,
        loader: () =>
          fetch("https://chill-gamer-server-gold.vercel.app/reviews"),
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
        loader: () =>
          fetch("https://chill-gamer-server-gold.vercel.app/reviews"),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateRoute>
            <GameWatchlist></GameWatchlist>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://chill-gamer-server-gold.vercel.app/myWatchlist"),
      },
      {
        path: "/reviews/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-gold.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-gold.vercel.app/reviews/${params.id}`
          ),
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
