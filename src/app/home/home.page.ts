import { Component, OnInit } from "@angular/core";
import { Plants } from "../plants/plants.model";
import { PlantsService } from "../plants/plants.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  loadedPlants: Plants[];
  listedLoadedPlants: Plants[];

  constructor(private plantsService: PlantsService) {}

  ngOnInit() {
    this.loadedPlants = this.plantsService.plants;
    this.listedLoadedPlants = this.loadedPlants.slice(1);

    console.log(this.loadedPlants);
  }
}
