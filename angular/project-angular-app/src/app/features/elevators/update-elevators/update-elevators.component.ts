import { Component } from '@angular/core';
import { Buildings } from 'src/app/Interfaces/buildings';
import { BuildingService } from 'src/app/Services/buildings.service';


@Component({
  selector: 'app-update-buildings',
  templateUrl: './update-elevators.component.html',
  styleUrls: ['./update-elevators.component.css']
})
export class UpdateBuildingsComponent {
  building ={
    name:'',
    description:'',
    dimension:'',
    code:'',
  }  

 /* constructor(private buildingService:BuildingService) { }

 createBuilding() {
    const buildingData = this.buildingService.createBuilding(this.building as Buildings).subscribe(
      (response) => {
        alert("Building created successfully!");
      },
      (error) => {
        alert("Error creating building...");
      }
    );
  }*/
}
