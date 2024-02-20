import { createBrowserRouter, Outlet } from "react-router-dom";
import { Logout } from "../Pages/Logout";
import { RequireAuth } from "../Components/Auth/RequireAuth";
import { AppLayout } from "../Components/Layout/AppLayout";
import { Dashboard } from "../Pages/Dashboard";
import ErrorPage from "../Pages/Error";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { CreateLoan } from "../Pages/newPickup";
import { RequireToBeAdmin } from "../Components/Auth/admin";
import { AdminDashboard } from "../Pages/AdminDashboard";
import { Election } from "../Pages/Election";
import { ElectionView } from "../Pages/viewElection";
import { Vote } from "../Pages/vote";
import { ChooseBank } from "../Pages/chooseBank";
import { ChooseCategory } from "../Pages/chooseCategory";
import { Loan } from "../Pages/createLoan";
import { ShowLoans } from "../Pages/showLoans";
import { AdminDashboardAll } from "../Pages/AdminDashboardAll";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        loader: () => null,
        action: () => null,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
            {
                path: "",
                element: <RequireAuth />,
                children: [
                    {
                        path: "",
                        element: <ShowLoans/>,
                    },
                    {
                        path: "new",
                        element: <CreateLoan />,
                        children:[
                            {
                                path: "",
                                element: <ChooseBank/>,
                            },
                            {
                                path: ":bankId",
                                element: <ChooseCategory/>,
                            },
                            {
                                path: ":bankId/:category",
                                element: <Loan/>,
                            },
                        ]
                    },
                    {
                        path: "election/:electionId",
                        element: <ElectionView/>,
                    },
                    {
                        path: "/election/:electionId/vote",
                        element: <Vote/>,
                    },
                    {
                        path: "admin",
                        element: <RequireToBeAdmin/>,
                        children:[

                            {
                                path: "",
                                element: <AdminDashboard/>,
                            },
                            {
                                path: "all",
                                element: <AdminDashboardAll/>,
                            },

                            {
                                path: "election",
                                element: <Election/>,
                            },
                            {
                                path: "election/:electionId",
                                element: <ElectionView/>,
                            },
                        ]
                    },
                    
                ],
            },
            
        ],
    },
]);
