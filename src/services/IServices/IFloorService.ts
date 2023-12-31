import {IFloorDTO} from "../../dto/IFloorDTO";
import {Result} from "../../core/logic/Result";


export default interface IFloorService{
  createFloor(floorDTO: IFloorDTO): Promise<Result<IFloorDTO>>;

  updateFloor(floorDTO: IFloorDTO): Promise<Result<IFloorDTO>>;
}
