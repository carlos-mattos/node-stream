import { EventEmitter } from "events";
import { Service } from "typedi";
import StreamZip from "node-stream-zip";
import { GlobalEventEmitter } from "../../shared/GlobalEventEmitter";
import { IUnzipFileInput } from "./IUploads";

@Service()
export class UnzipFile {
  eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = GlobalEventEmitter.getInstance().getEmitter();
  }

  async execute(params: IUnzipFileInput) {
    const { file, url } = params;
    const routeMap = new Map();
    routeMap.set("/upload/wine", "Wine");

    try {
      const zip = new StreamZip.async({ file: file?.path });
      await zip.extract(null, "./extracted");
      await zip.close();

      this.eventEmitter.emit(`unzipFile${routeMap.get(url)}`, file);
    } catch (error) {
      console.error(error);
    }
  }
}
