import { NavLink } from "react-router-dom";


export default function NavBar(){
    return(
        <>
            <NavLink to="/">Home</NavLink>{' | '}
            <NavLink to="/register">Register</NavLink>
        </>
    )
};