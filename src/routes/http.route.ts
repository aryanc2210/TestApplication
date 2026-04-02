import { Router } from "express";
import { HttpController } from "../controller/http.controller.js";

const router = Router();
const httpController = new HttpController();

router.get("/status/200", httpController.success);
router.get("/status/201", httpController.created);
router.get("/status/400", httpController.badRequest);
router.get("/status/404", httpController.notFound);
router.get("/status/500", httpController.internalServerError);
router.get("/status/429", httpController.rateLimit);
router.get("/status/401", httpController.unauthorized);
router.get("/status/403", httpController.forbidden);
router.get("/status/502", httpController.badGateway);
router.get("/status/503", httpController.serviceUnreachable);

export default router;
