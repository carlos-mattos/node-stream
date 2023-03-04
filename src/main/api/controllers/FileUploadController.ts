import { Request, Response } from "express";
import { UnzipFile } from "../../../application/uploads/UnzipFile";
import { WineUpload } from "../../../application/uploads/WineUpload";
import { Container } from "typedi";

export class FileUploadController {
  async execute(request: Request, response: Response) {
    const unzipFile = Container.get(UnzipFile);
    const wineUpload = Container.get(WineUpload);
    wineUpload.initializeEventListener();

    const { file } = request;

    if (!file)
      return response
        .status(500)
        .send({ message: "Something went wrong with the file" });

    unzipFile.execute({ file, url: request.url });
    return response.send();
  }
}
