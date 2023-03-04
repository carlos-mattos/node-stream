import { EventEmitter } from "events";
import { GlobalEventEmitter } from "../../shared/GlobalEventEmitter";
import { Service } from "typedi";

@Service()
export class WineUpload {
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = GlobalEventEmitter.getInstance().getEmitter();
  }

  public initializeEventListener() {
    this.eventEmitter.on("unzipFileWine", this.execute);
  }

  private async execute(file: Express.Multer.File) {
    console.log(file);
  }
}
