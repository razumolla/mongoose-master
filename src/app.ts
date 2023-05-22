import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//application route
import userRouter from "./app/modules/user/user.route";

// Middleware
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRouter);
app.use("/api/v1/user", userRouter);

export default app;

/**
 * Breakdown
 * --------
 * interface -> interface.ts
 * schema, Model -> model.ts
 *
 * route
 * route function-> conteroler.ts
 * Database Query Function(logic) -> service.ts
 *
 */
