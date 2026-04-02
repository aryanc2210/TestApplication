export class HttpService {
  public async success(): Promise<any> {
    return {
      message: "SUCCESS",
      status: "200",
    };
  }

  public async created(): Promise<any> {
    return {
      message: "CREATED",
      status: "201",
    };
  }
  public async badRequest(): Promise<any> {
    return {
      message: "BAD_REQUEST",
      status: "400",
    };
  }
  public async notFound(): Promise<any> {
    return {
      message: "RESOURCE_NOT_FOUND",
      status: "404",
    };
  }
  public async internalServerError(): Promise<any> {
    return {
      message: "INTERNAL_SERVER_ERROR",
      status: "500",
    };
  }

  public async rateLimit(): Promise<any> {
    return {
      message: "RATE_LIMIT_ERROR",
      status: "429",
    };
  }

  public async unauthorized(): Promise<any> {
    return {
      message: "UNAUTHORIZED",
      status: "401",
    };
  }

  public async forbidden(): Promise<any> {
    return {
      message: "FORBIDDEN",
      status: "403",
    };
  }

  public async badGateway(): Promise<any> {
    return {
      message: "BAD_GATEWAY",
      status: "502",
    };
  }

  public async serviceUnreachable(): Promise<any> {
    return {
      message: "SERVICE_UNAVAILABLE",
      status: "503",
    };
  }

  public async timeout(): Promise<any> {
    return {
      message: "TIMEOUT",
      status: "504",
    };
  }
  public async networkError(): Promise<any> {
    return {
      message: "NETWORK_ERROR",
      status: "503",
    };
  }

  public async econnRefused(): Promise<any> {
    return {
      message: "ECONNREFUSED",
      status: "502",
    };
  }

  public async dnsNotFound(): Promise<any> {
    return {
      message: "ENOTFOUND",
      status: "404",
    };
  }

  public async hostUnreachable(): Promise<any> {
    return {
      message: "EHOSTUNREACH",
      status: "503",
    };
  }
}
