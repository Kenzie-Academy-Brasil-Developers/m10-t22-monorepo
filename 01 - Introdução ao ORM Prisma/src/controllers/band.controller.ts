import { Request, Response } from "express";
import { BandService } from "../services/band.service";

export class BandController {
  private bandService = new BandService();

  list = async (req: Request, res: Response) => {
    const bands = await this.bandService.list();

    return res.json(bands);
  };

  create = async (req: Request, res: Response) => {
    const band = await this.bandService.create(req.body);

    return res.status(201).json(band);
  };
}
