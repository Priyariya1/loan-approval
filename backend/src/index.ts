import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { json } from "express";
import { CorsConfig } from "./Config/Cors";
import { ExceptionHandler, PayloadErrorHandler } from "./Middlewares/handleErrors";
import { AdminRouter } from "./Routes/Admin";
import { LoanRouter } from "./Routes/Loan";
import { UserRouter } from "./Routes/User";
import multer from "multer";

dotenv.config();

export const App = express();

initServer();

function initServer() {
    try {

        App.use(json({ limit: "5mb" }));

        App.use(cookieParser())

        App.use(bodyParser.urlencoded({ extended: true }));

        App.use(cors(CorsConfig));

        App.use(PayloadErrorHandler);

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "./upload");
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            },
        });

        const upload = multer({ storage });

        App.post("/upload", upload.single("file"), function (req: any, res: any) {
            const file = req.file;
            res.status(200).json(file.filename);
        });

        App.use('/upload', express.static('upload'))

        App.get("/", (req, res) => res.send(`Hey there it's lonely here..... 😔`))

        App.use('/user', UserRouter);

        App.use('/loan', LoanRouter);

        App.use('/admin', AdminRouter);

        App.use(ExceptionHandler)

        const PORT = process.env.PORT || 5000;

        App.listen(PORT, () => console.log(`🚀 server running on @${PORT}`));

    } catch (e: any) {
        console.error(`Error initializing app -${e.message}`);
    }

}