import express from "express";
import cors from "cors";
import qrCodeRoute from "./routes/qrcode.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", qrCodeRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
