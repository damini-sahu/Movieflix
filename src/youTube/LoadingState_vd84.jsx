// export const Loading = () => {
//     return (
//         <div className="container loader-section">
//             <div className="container"></div>
//         </div>
//     )
//     }

//     /////////////////////////////////////////////////
//     import { Outlet, useNavigation } from "react-router-dom";
// import { Footer } from "./Footer"
// import { Header } from "./Header"
// import { Loading } from "./Loading";

// const AppLayout = () => {
//     const navigation = useNavigation();
//     console.log(navigation);
    
//     if(NavigationPreloadManager.state === "loading") return <Loading />
    
//     return (
//         <>
//             <Header />
//             <Outlet />
//             <Footer />
//         </>
//     )
// }

// export default AppLayout;