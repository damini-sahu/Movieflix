// import { NavLink, useRouteError } from "react-router-dom"
import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
const navigate = useNavigate();

const handleGoBack = () => {
    navigate(-1);             //ek step back chle jaoge
}

    if (error.status === 404) {
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img src="https://cdn.dribble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a"> The page you are looking for could not be found</p>
                        <p className="p-b">... back to previous page</p>
                    </div>
                </div>
                {/* <NavLink to="/" className="btn">
                    Go back to Home page
                </NavLink> */}
                <button className="btn" onClick={handleGoBack}>Go Back</button>
            </section>
        )
    }
    console.log(error);

    return <h1>The page you are looking does not exist.</h1>
}