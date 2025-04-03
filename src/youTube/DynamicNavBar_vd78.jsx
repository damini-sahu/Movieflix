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

// ///////////////////////////////////////////////////////////////////
// export const Footer = () => {
//     return (
// <footer class="section-footer">
//     <div class="footer-container container">
//       <div class="content_1">
//         <img src="./images/logo.png" alt="logo" />
//         <p>
//           Welcome to Thapa EcomStore, <br />
//           your ultimate destination for
//           <br />
//           cutting-edge gadgets!
//         </p>
//         <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
//       </div>
//       <div class="content_2">
//         <h4>SHOPPING</h4>
//         <a href="#">Computer Store</a>
//         <a href="#">Laptop Store</a>
//         <a href="#">Accessories</a>
//         <a href="#">Sales & Discount</a>
//       </div>
//       <div class="content_3">
//         <h4>Experience</h4>
//         <a href="./contact.html">Contact Us</a>
//         <a href="" target="_blank"> Payment Method </a>
//         <a href="" target="_blank"> Delivery </a>
//         <a href="" target="_blank"> Return and Exchange </a>
//       </div>
//       <div class="content_4">
//         <h4>NEWSLETTER</h4>
//         <p>
//           Be the first to know about new
//           <br />
//           arrivals, sales & promos!
//         </p>
//         <div class="f-mail">
//           <input type="email" placeholder="Your Email" />
//           <i class="bx bx-envelope"></i>
//         </div>
//         <hr />
//       </div>
//     </div>
//     <div class="f-design">
//       <div class="f-design-txt">
//         <p>Design and Code by Thapa Technical</p>
//       </div>
//     </div>
//   </footer>
//     )
//   }
