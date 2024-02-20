import { Link } from "react-router-dom";
import { useLoan } from "../Hooks/useLoan";

export const ShowLoans = () => {
    const { loans } = useLoan();

    if (loans.isLoading) return <div>Loading data.....</div>;

    return (
        <div className="w-full flex flex-col px-48 py-6 gap-4 bg-img min-h-screen">
            <h1 className="pb-6 text-xl font-bold">Loan applications</h1>

            {loans.data?.length === 0 && (
                <div>
                    No Applications found create one from <Link to="/new" className="text-blue-800">here</Link>
                </div>
            )}
            {loans.data?.map((loan) => {
                return (
                    <div className="w-full p-6 border-4 border-primary  rounded-md glass">
                        <div className="flex gap-5 ">
                            <span className="font-bold">name</span>
                            <span>{loan.name}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Address</span>
                            <span>{loan.address}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Interest Rate</span>
                            <span>{loan.interestRate} %</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Duration</span>
                            <span>{loan.duration} Months</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Loan Status</span>
                            <span>{loan.status}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Bank</span>
                            <span>{loan.bank}</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span className="font-bold">Scheme</span>
                            <span>{loan.loan_name}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
