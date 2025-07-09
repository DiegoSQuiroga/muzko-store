import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ⬅️ Este path debe coincidir
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});