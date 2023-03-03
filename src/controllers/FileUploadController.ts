import { Request, Response } from "express";
import { FileUploadService } from "../services";
import { Container } from "typedi";

export class FileUploadController {
  async execute(request: Request, response: Response) {
    const fileUploadService = Container.get(FileUploadService);

    return response.send();
  }
}
