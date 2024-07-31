import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

function MainLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </> 
    )
}

export default MainLayout;