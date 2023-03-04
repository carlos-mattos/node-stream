import { EventEmitter } from "node:events";

export class GlobalEventEmitter {
  private static instance: GlobalEventEmitter;
  private eventEmitter: EventEmitter;

  private constructor() {
    this.eventEmitter = new EventEmitter();
  }

  static getInstance(): GlobalEventEmitter {
    if (!GlobalEventEmitter.instance) {
      GlobalEventEmitter.instance = new GlobalEventEmitter();
    }

    return GlobalEventEmitter.instance;
  }

  getEmitter(): EventEmitter {
    return this.eventEmitter;
  }
}
