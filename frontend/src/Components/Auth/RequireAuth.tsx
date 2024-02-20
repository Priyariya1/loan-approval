import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Configurations } from "../../Config";
import { useUserData } from "../../Hooks/Data/useUserData";
import { NavBar } from "../NavBar";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { VerticalNav } from "../NavBar/verticalNav";

interface RequireAuth {
    // children: React.ReactElement;
}

export const RequireAuth: React.FC<RequireAuth> = ({}) => {
    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        const loginStatus = localStorage.getItem(Configurations.LOGIN_STATUS);

        if (!loginStatus) return navigate("/logout");
    }, []);

    const { user, isError, isLoading, error, isLoadingError } = useUserData();

    return (
        <>
            {/* <NavBar /> */}
            <SwitchTransition>
                <CSSTransition key={location.pathname} nodeRef={null} timeout={300} classNames="page" unmountOnExit>
                    <div className="min-w-full min-h-full flex flex-1">
                        <div className="h-screen sticky top-0">
                            <VerticalNav/>
                        </div>
                        <div className="w-full pt-3 ">
                            <Outlet />
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            {/* {user && user.role === "admin" && (
                <div className="fixed  bottom-8 right-8 ">
                    <Link to={"/admin/election"}>
                        <button className="btn btn-square btn-primary text-2xl shadow-lg">+</button>
                    </Link>
                </div>
            )} */}
        </>
    );
};
