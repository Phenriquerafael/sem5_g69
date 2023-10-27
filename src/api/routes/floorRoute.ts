import { Router} from 'express';
import {celebrate, Joi} from "celebrate";

import { Container } from 'typedi';
import IFloorController from "../../controllers/IControllers/IFloorController";

import config from "../../../config";

const route = Router();

export default (app:Router) => {
  app.use('/floor',route)

  const ctrl = Container.get(config.controllers.floor.name) as IFloorController;

  route.post('',
    celebrate({
      body: Joi.object({
        buildingId: Joi.string().required(),
        floorNumber: Joi.number().required(),
        description: Joi.string().required(),
      })
    }),
    (req, res, next) => ctrl.createFloor(req, res, next) );

  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        buildingId: Joi.string().required(),
        floorNumber: Joi.number().required(),
        description: Joi.string().required(),
      }),
    }),
    (req, res, next) => ctrl.updateFloor(req, res, next) );

}