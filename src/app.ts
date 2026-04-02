import express from "express";
import httpRoutes from "./routes/http.route.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use(httpRoutes);
// const healthService = new HealthService();

// healthService.healthCheckCron();

app.use(errorHandler);




export default app;
