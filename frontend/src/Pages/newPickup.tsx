import { toast } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import { CardActions } from "../Components/common/Card/cardActions";
import { CardTitle } from "../Components/common/Card/cardTitle";
import { usePickup } from "../Hooks/Data/usePickups";

export const CreateLoan: React.FC = () => <Outlet />;
