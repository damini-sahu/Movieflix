// // import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Movie } from "./pages/Movie";
// import AppLayout from "./components/layout/AppLayout";
// import "./App.css";
// import { ErrorPage } from "./pages/ErrorPage";
// // import { NotFound } from "./pages/NotFound";

// const App = () => {
// const router = createBrowserRouter([

//   {
// path: "/",
// element: <AppLayout />,
// errorElement: <ErrorPage />,
// children: [
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },  
//   {
//     path: "/movie",
//     element: <Movie />,
//   },  
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   // {
//   //   path: "*",
//   //   element: <NotFound />
//   // }
// ]
//   },
   
// ])

// return <RouterProvider router={router} />;

// }

// export default App;

// /////////////////////////////////////////////////////////////
// import { NavLink, useRouteError } from "react-router-dom"

// export const NotFound = () => {
//     const error = useRouteError();


//     if (error.status === 404) {
//         return (
//             <section className="error-section">
//                 <div id="error-text">
//                     <figure>
//                         <img src="https://cdn.dribble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
//                     </figure>
//                     <div className="text-center">
//                         <p className="p-a"> The page you are looking for could not be found</p>
//                         <p className="p-b">... back to previous page</p>
//                     </div>
//                 </div>
//                 <NavLink to="/" className="btn">
//                     Go back to Home page
//                 </NavLink>
//             </section>
//         )
//     }
//     console.log(error);

//     return <h1>The page you are looking does not exist.</h1>
// }

// //////////////////////////////////////////////////////
// import { NavLink, useRouteError } from "react-router-dom"

// export const ErrorPage = () => {
//     const error = useRouteError();


//     if (error.status === 404) {
//         return (
//             <section className="error-section">
//                 <div id="error-text">
//                     <figure>
//                         <img src="https://cdn.dribble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
//                     </figure>
//                     <div className="text-center">
//                         <p className="p-a"> The page you are looking for could not be found</p>
//                         <p className="p-b">... back to previous page</p>
//                     </div>
//                 </div>
//                 <NavLink to="/" className="btn">
//                     Go back to Home page
//                 </NavLink>
//             </section>
//         )
//     }
//     console.log(error);

//     return <h1>The page you are looking does not exist.</h1>
// }