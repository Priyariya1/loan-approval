import { Link } from "react-router-dom";
import { useLoan } from "../Hooks/useLoan";

export const ChooseCategory = () => {
    const { templates } = useLoan();

    const images = ["1.jpg", "2.jpg", "3.webp", "4.jpg", "5.jpg"];

    function getImage() {
        return `/assets/${images[Math.floor(Math.random() * (images.length - 1))]}`;
    }

    if (templates.isLoading) return <div>Loading bank details please wait...</div>;

    if (templates.isError)
        return (
            <div>
                Error occurred while loading banks <pre>{JSON.stringify(templates.error, null, 4)}</pre>
            </div>
        );

    //@ts-ignore
    const categories = Object.keys(templates.data);

    return (
        <div>
            <div className="px-4">
                {/* @ts-ignore */}
                <Link to={-1} className="btn btn-ghost">
                    Back
                </Link>
            </div>
            {categories.map((category) => {
                return (
                    <div>
                        <div className="p-4 text-xl text-secondary capitalize">{category}</div>
                        <div className="p-4 flex flex-wrap gap-2">
                            {/* @ts-ignore */}
                            {templates.data[category].map((template) => {
                                return (
                                    <Link to={template.name} className="card w-[30%] bg-base-100 shadow-xl image-full">
                                        <figure>
                                            <img src={getImage()} alt="Shoes" />
                                        </figure>
                                        <div className="card-body flex items-center justify-center">
                                            <h2 className="card-title m-auto w-full">{template.name}</h2>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
