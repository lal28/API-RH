import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users-v1.js";

const app = express();
app.use(bodyParser.json());

// Todas as rotas de usuários ficam em /api/v1/users
app.use("/api/v1/users", usersRouter);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000 🚀");
});
