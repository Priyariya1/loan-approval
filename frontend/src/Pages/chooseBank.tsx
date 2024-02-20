import { Link } from "react-router-dom";
import { useLoan } from "../Hooks/useLoan";

export const ChooseBank = () => {
    const { banks } = useLoan();

    const images = ["1.jpg", "2.jpg", "3.webp", "4.jpg", "5.jpg"];

    function getImage() {
        return `/assets/${images[Math.floor(Math.random() * (images.length - 1))]}`;
    }

    if (banks.isLoading) return <div>Loading bank details please wait...</div>;

    if (banks.isError)
        return (
            <div>
                Error occurred while loading banks <pre>{JSON.stringify(banks.error, null, 4)}</pre>
            </div>
        );

    return (
        <div>
            <div className="px-4">
                {/* @ts-ignore */}
                <Link to={-1} className="btn btn-ghost">
                    Back
                </Link>
            </div>
            <div className="flex flex-wrap gap-4 items-stretch justify-evenly">
                {banks?.data?.map((bank) => {
                    return (
                        <Link to={bank.name} className="card w-[30%] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={getImage()} alt="Shoes" />
                            </figure>
                            <div className="card-body flex items-center justify-center">
                                <h2 className="card-title m-auto w-full">{bank.name}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
