import type { Request, Response } from "express";
import { HttpService } from "../service/http.service.js";

export class HttpController {
  private healthService = new HttpService();

  public success = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.success();

      res.status(200).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  public created = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.created();

      res.status(201).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  public badRequest = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.badRequest();

      res.status(400).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  public notFound = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.notFound();

      res.status(404).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public internalServerError = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const response = await this.healthService.internalServerError();

      res.status(500).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public rateLimit = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.rateLimit();

      res.status(429).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public unauthorized = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.unauthorized();

      res.status(401).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public forbidden = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.forbidden();

      res.status(403).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public badGateway = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.badGateway();

      res.status(502).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public serviceUnreachable = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const response = await this.healthService.serviceUnreachable();

      res.status(503).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public timeout = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.timeout();

      res.status(504).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public networkError = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.networkError();

      res.status(503).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public econnRefused = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.econnRefused();

      res.status(502).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public dnsNotFound = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.dnsNotFound();

      res.status(404).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  public hostUnreachable = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.healthService.hostUnreachable();

      res.status(503).json({
        message: response.message,
        status: response.status,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
}
