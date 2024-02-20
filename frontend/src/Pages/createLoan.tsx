import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ReactSelect from "react-select";
import { useLoan } from "../Hooks/useLoan";

export const Loan = () => {
    const { bankId, category } = useParams();

    const { addMutation } = useLoan();

    const [files, setFiles] = useState<any>([]);

    const navigate = useNavigate();

    const { templates } = useLoan();

    const categories = Object.keys(templates?.data ?? {})
        .map((category) => {
            return templates?.data?.[category]?.map((template) => template.name);
        })
        .flat();

    const { banks } = useLoan();

    console.log(templates);

    const interestRate = [
        { interest: 14, duration: 36 },
        { interest: 14.5, duration: 36 },
        { interest: 15, duration: 43 },
        { interest: 13, duration: 32 },
        { interest: 17, duration: 45 },
        { interest: 14.5, duration: 36 },
        { interest: 14.5, duration: 36 },
    ];

    const [selected, setSelected] = useState<any>({});

    const onInterestChange = (interest: number) => {
        const item = interestRate.find((r) => r.interest === interest);
        setSelected(item);
    };
    const onDurationChange = (interest: number) => {
        const item = interestRate.find((r) => r.duration === interest);
        setSelected(item);
    };

    const fileRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);

    const handleUpload = async () => {
        if (!fileRef.current || !titleRef.current) return;

        const file = fileRef.current.files && fileRef.current.files[0];

        if (!file) return toast.error("Please upload a file first");
        if (!titleRef.current.value) return toast.error("Please fill a title first");

        const formData = new FormData();

        formData.append("file", file);

        try {
            const request = await axios.post("/upload", formData);

            const title = titleRef.current?.value;

            setFiles((old: any) => [...old, { file: request.data, title }]);

            toast.success("File uploaded successfully");
            fileRef.current.value = "";
            titleRef.current.value = "";
        } catch (err) {
            toast.error("failed to upload file");
        }
    };

    const handleRemove = (index: number) => {
        setFiles((old: any[]) => old.filter((file, fileIndex) => fileIndex !== index));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const entries = {} as { [key: string]: string };

        for (const entry of formData.entries()) {
            if (!entry[1]) toast.error(`Please fill in the ${entry[0]} field`);

            const key = entry[0];

            entries[key] = entry[1] as string;
        }

        if (files.length === 0) return toast.error("Please upload at least one file");

        try {
            await addMutation.mutateAsync({
                attachments: files,
                ...entries,
                installments: Math.round(Number(entries.duration) / 12),
            });

            toast.success("loan created successfully");

            navigate("/");
        } catch (err) {
            console.log(err);
            toast.error("error occurred while creating loan");
        }
    };

    return (
        <div>
            <h1 className="text-xl px-16 py-4 ">Loan Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="bank" value={bankId} />
                {/* <input type="hidden" name="loan_name" value={category} /> */}

                <div className="px-16">
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Loan Category</span>
                        </label>
                        <select name="loan_name" className="select select-primary w-full">
                            {categories.map((key) => (
                                <option>{key}</option>
                            ))}
                        </select>
                    </div>
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered input-primary w-full "
                            placeholder="Name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered input-primary w-full "
                            placeholder="address"
                            name="address"
                            required
                        />
                    </div>
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input
                            type="number"
                            min={1}
                            max={1000000000}
                            defaultValue={20}
                            className="input input-bordered input-primary w-full "
                            placeholder="Amount"
                            name="amount"
                            required
                        />
                    </div>
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Interest Rate</span>
                        </label>
                        <select
                            name="interestRate"
                            className="select select-primary w-full"
                            value={selected.interest}
                            onChange={(e) => onInterestChange(Number(e.target.value))}
                        >
                            {interestRate?.map((interestRate) => (
                                <option value={interestRate.interest}>{interestRate.interest} %</option>
                            ))}
                        </select>
                    </div>
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Loan Duration</span>
                        </label>
                        <select
                            name="duration"
                            className="select select-primary w-full"
                            value={selected.duration}
                            onChange={(e) => onDurationChange(Number(e.target.value))}
                        >
                            {interestRate?.map((interestRate) => (
                                <option value={interestRate.duration}>{interestRate.duration} Months</option>
                            ))}
                        </select>
                    </div>
                    <div className="py-3 form-control w-full">
                        <label className="label">
                            <span className="label-text">Tell us about your job</span>
                        </label>
                        <textarea name="jobDescription" className="textarea textarea-primary"></textarea>
                    </div>
                    <div className="border rounded-lg p-4 border-primary shadow-md">
                        <h1>Uploaded files</h1>
                        <ul className="pt-3 w-full">
                            {files.map((file: any, index: number) => {
                                return (
                                    <li className="w-full flex justify-between">
                                        <span>{file.title}</span>{" "}
                                        <button className="btn btn-ghost btn-sm" onClick={() => handleRemove(index)}>
                                            {" "}
                                            Remove
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                        </label>
                        <div className="flex justify-around w-full">
                            <input
                                ref={fileRef}
                                type="file"
                                className="file-input file-input-bordered w-full max-w-md"
                            />
                            <input
                                type="text"
                                ref={titleRef}
                                placeholder="File name"
                                className="input input-bordered input-primary w-full max-w-md"
                            />
                            <button type="button" className="btn btn-primary" onClick={handleUpload}>
                                Add
                            </button>
                        </div>
                    </div>

                    <div className="w-full flex justify-end px-16 pt-6">
                        <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
