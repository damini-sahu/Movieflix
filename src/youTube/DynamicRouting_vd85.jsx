// // import { useLoaderData, useParams } from "react-router-dom"
// import { useLoaderData } from "react-router-dom"

// export const MovieDetails = () => {
// // const params = useParams();
// // console.log(params);

// const movieData= useLoaderData();
// console.log(movieData)

// const {Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData

//     return (
//     <li className="hero-container hero-movie-container">
//         <div className="main-container">
//             <div className="poster-container">
//                 <img src={Poster} alt={Title} className="poster"/> 
//             </div>
//             <div className="ticket-container">
//                 <div className="ticket__content">
//                     <h4 className="ticket__movie-title">{Title}</h4>
//                     <p>{Plot}</p>
//                     <p className="ticket__current-price">Type: </p>
//                     <p className="ticket__current-price">Type: </p>
//                     <button className="ticket__buy-btn">Watch Now</button>
//                 </div>
//             </div>
//         </div>
//     </li>
//     )
// }

// /////////////////////////////////////////////////////////
// // import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Movie } from "./pages/Movie";
// import AppLayout from "./components/layout/AppLayout";
// import "./App.css";
// import { ErrorPage } from "./pages/ErrorPage";
// import { getMoviesData } from "./api/GetApiData";
// import { MovieDetails } from "./components/UI/MovieDetails";
// import { getMovieDetails } from "./api/GetMOvieDetails";
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
//     loader: getMoviesData,
//   },  
//   {
//     path: "/movie/:movieID",
//     element: <MovieDetails />,
//     loader: getMovieDetails
//   },  
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]
//   },
   
// ])

// return <RouterProvider router={router} />;

// }

// export default App;

// /////////////////////////////////////////////////////////
// import { NavLink } from "react-router-dom"
// import "./Card.css";

// export const Card = ({ curMovie }) => {
//     const { Poster, imdbID } = curMovie

//     return (
//             <li className="hero-container">
//                 <div className="main-container">
//                     <div className="poster-container">
//                         <img src={Poster} alt={imdbID} className="poster" />
//                     </div>
//                     <div>
//                         <div>
//                             <NavLink to={`/movie/${imdbID}`}>
//                             <button className="ticket__buy-btn">Watch now</button>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//     )
// }