import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "./Home";
import Categories from "./Categories";
// import Register from "./Register.tsx";
// import Login from "./Login.tsx";
// import Error from "./Error.tsx";

// import Profile from "./Profile.tsx";
// import About from "./About.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/categories", element: <Categories /> },
      // { path: "/register", element: <Register /> },
      // { path: "/login", element: <Login /> },
      // { path: "/cards", element: <Cards /> },
      // { path: "/cards/:id", element: <CardPage /> },
      // { path: "/favorites", element: <Favorites /> },
      // { path: "/mycards", element: <MyCards /> },
      // { path: "/about", element: <About /> },
      // {
      //   path: "/createcard",
      //   element: (
      //     <CreateCard />
      //   ),
      // },
      // {
      //   path: "/profile",
      //   element: (
      //     <Profile />
      //   ),
      // },
    ],
  },
]);
