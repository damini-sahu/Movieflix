// import { NavLink } from "react-router-dom";

// export const Header = () => {
// const getNavLinkStyle = ({ isActive }) => {
//         return {
//             color: isActive ? "green" : "black"
//         }
//     }


//     return (
//         <>
//             <header className="section-navbar">
//                 <section className="top_txt">
//                     <div className="head container">
//                         <div className="head_txt">
//                             <p>Get Damini Membership, 30-day return or refund gurantee.</p>
//                         </div>
//                         <div>
//                             <NavLink to="#" >SIGN IN</NavLink>
//                             <NavLink to="#" >SIGN UP</NavLink>
//                         </div>
//                     </div>
//                 </section>

//                 <div className="container">
//                     <div className="navbar-brand">
//                         <NavLink to="index">
//                             <p>DaminiFlix</p>
//                         </NavLink>
//                     </div>

//                     <nav className="navbar">
//                         <ul>
//                             <li className="nav-item">
//                                 {/* <NavLink to="/" className="nav-link">home</NavLink> */}
//                                 <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link " : "nav-link"}>home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 {/* <NavLink to="/about">about</NavLink> */}
//                                 <NavLink to="/about" style={({ isActive }) => {
//                                     return {
//                                         color: isActive ? "blue" : "black"
//                                     }
//                                 }}>about</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>movies</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="/contact" className="nav-link">contact</NavLink>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     )
// }