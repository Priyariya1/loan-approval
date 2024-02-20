import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Card } from "../Components/common/Card/card";
import { SpinnerWithText } from "../Components/common/Loader/SpinnerWithText";
import { useAdmin } from "../Hooks/Data/useAdmin";
import { useUserData } from "../Hooks/Data/useUserData";
import { useLoan } from "../Hooks/useLoan";

export const AdminDashboardAll: React.FC = () => {
    const { allLoans, statusMutation } = useLoan();

    const statuses = ["pending", "rejected", "approved"];

    const handleStatusChange = async (status: string, loan: any) => {
        try {
            await statusMutation.mutateAsync({ status, loanId: loan.id });
            toast.success("updated status");
        } catch (err) {
            toast.error("Failed to update status");
        }
    };

    return (
        <div className="w-full flex flex-col px-48 py-6 gap-4 bg-img min-h-screen">
            <h1 className="pb-6 text-xl font-bold">All Loan applications</h1>

            {allLoans.isLoading && <div>Loading data.....</div>}

            {allLoans.data && allLoans.data?.length === 0 && <div>No loans application found</div>}

            {allLoans.data?.map((loan) => {
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
                        <div className="py-3">Documents</div>
                        <div className="flex gap-5 ">
                            {loan.LoanAttachments?.map((file: any) => (
                                <a
                                    href={`http://localhost:5000/upload/${file.file}`}
                                    download={file.title}
                                    target="_blank"
                                    className="btn btn-secondary btn-sm"
                                >
                                    {file.title}
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-5 py-4">Change status to</div>
                        <div className="flex gap-5 ">
                            {statuses.map((stat) => (
                                <button className="btn btn-primary" onClick={() => handleStatusChange(stat, loan)}>
                                    {stat}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
