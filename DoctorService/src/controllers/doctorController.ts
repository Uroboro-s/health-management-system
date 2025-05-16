import { Request, Response } from "express";

function checkApiStatus(req: Request, res: Response) {
  const status = {
    status: "OK",
    timestamp: new Date(),
    message: "API is running",
  };
  res.status(200).json(status);
}

export { checkApiStatus };
