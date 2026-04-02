import { Router } from "express";
import { HttpController } from "../controller/http.controller.js";

const router = Router();
const httpController = new HttpController();

router.get("/", async (req, res) => {
  res.json({ message: "Test Route" });
});
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
router.get("/status/timeout", httpController.timeout);
router.get("/status/network-error", httpController.networkError);
router.get("/status/econn-refused", httpController.econnRefused);
router.get("/status/dns-not-found", httpController.dnsNotFound);
router.get("/status/host-unreachable", httpController.hostUnreachable);

export default router;
