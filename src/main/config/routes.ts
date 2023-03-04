import { Express, Router } from "express";
import { readdirSync } from "node:fs";

export default (app: Express): void => {
  const router = Router();

  app.use("/api", router);

  readdirSync(`${__dirname}/../api/routes`).map(async (file) => {
    const fileWithOutExt = file.split(".")[0];
    if (!file.endsWith(".map") && fileWithOutExt !== "HealthCheck") {
      (await import(`../api/routes/${file}`)).default(router);
    }
  });
};
