import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";

import IFloorController from "./IControllers/IFloorController";
import IFloorService from '../services/IServices/IFloorService';
import {IFloorDTO} from '../dto/IFloorDTO';

import { Result } from "../core/logic/Result";

@Service()
export default class FloorController implements IFloorController /* TODO: extends ../core/infra/BaseController */ {
  constructor(
    @Inject(config.services.floor.name) private floorServiceInstance : IFloorService
  ) {}

  public async createFloor(req: Request, res: Response, next: NextFunction) {
    try {

      const floorOrError = await this.floorServiceInstance.createFloor(req.body as IFloorDTO) as Result<IFloorDTO>;

      if (floorOrError.isFailure) {
        return res.status(402).send();
      }

      const floorDTO = floorOrError.getValue();
      return res.json( floorDTO ).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async updateFloor(req: Request, res: Response, next: NextFunction) {
    try {

      const floorOrError = await this.floorServiceInstance.updateFloor(req.body as IFloorDTO) as Result<IFloorDTO>;

      if (floorOrError.isFailure) {
        return res.status(404).send();
      }

      const floorDTO = floorOrError.getValue();
      return res.status(201).json( floorDTO );
    }
    catch (e) {
      return next(e);
    }
  };
}
