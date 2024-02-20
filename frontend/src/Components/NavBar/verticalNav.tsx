import { Link } from "react-router-dom";
import { useUserData } from "../../Hooks/Data/useUserData";

export const VerticalNav = () => {
    const { user } = useUserData();
    return (
        <div className="min-w-[14vw] max-w-[14vw] border-r min-h-full border-slate-200 shadow-md flex">
            <ul className="flex flex-col min-h-full w-full">
                <li className="pb-6 border-b ">
                    <Link className="btn btn-ghost normal-case text-xl w-full rounded-none text-primary" to="/">
                        {import.meta.env.VITE_SITE_NAME}
                    </Link>
                </li>
                {user && user.role === "admin" && (
                    <>
                        <li>
                            <Link
                                className=" text-center btn btn-ghost  w-full rounded-none capitalize text-secondary"
                                to="/admin/all"
                            >
                                All Applications
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-center btn btn-ghost  w-full rounded-none capitalize text-secondary"
                                to="/admin"
                            >
                                Pending Applications
                            </Link>
                        </li>
                    </>
                )}
                <li>
                    <Link
                        className=" text-center btn btn-ghost  w-full rounded-none capitalize text-secondary"
                        to="/logout"
                    >
                        Logout
                    </Link>
                </li>
                <li className="mt-auto pb-10 pt-4 flex items-center justify-center">
                    <Link to="/new" className=" btn btn-primary text-white">
                        New Loan
                    </Link>
                </li>
            </ul>
        </div>
    );
};
