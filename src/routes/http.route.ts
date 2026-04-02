import { Router } from "express";
import { HttpController } from "../controller/http.controller.js";

const router = Router();
const httpController = new HttpController();

router.get("/", async (req, res) => {
  res.json({ message: "Test Route" });
});
router.post("/status/200", httpController.success);
router.post("/status/201", httpController.created);
router.post("/status/400", httpController.badRequest);
router.post("/status/404", httpController.notFound);
router.post("/status/500", httpController.internalServerError);
router.post("/status/429", httpController.rateLimit);
router.post("/status/401", httpController.unauthorized);
router.post("/status/403", httpController.forbidden);
router.post("/status/502", httpController.badGateway);
router.post("/status/503", httpController.serviceUnreachable);
router.post("/status/timeout", httpController.timeout);
router.post("/status/network-error", httpController.networkError);
router.post("/status/econn-refused", httpController.econnRefused);
router.post("/status/dns-not-found", httpController.dnsNotFound);
router.post("/status/host-unreachable", httpController.hostUnreachable);

export default router;
