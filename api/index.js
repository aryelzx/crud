import cors from "cors";
import express from "express";
import useRouter from "./routes/users.js";

const port = 8800;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", useRouter);

app.listen(port, () => console.log(`server running on port ${port}`));
