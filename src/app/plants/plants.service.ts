import { Injectable } from "@angular/core";
import { Plants } from "./plants.model";

@Injectable({
  providedIn: "root",
})
export class PlantsService {
  private _plants: Plants[] = [
    new Plants("ab1", "alovera", 24000, "alovera good plant"),
    new Plants("ab2", "janda", 12000, "janda bolong"),
  ];

  get plants() {
    return [...this._plants];
  }

  constructor() {}

  getPlant(id: string) {
    return this._plants.find((p) => p.id === id);
  }

  addPlant(name: string, price: number, description: string) {
    const newPlant = new Plants(
      Math.random().toString(),
      name,
      price,
      description
    );

    console.log(newPlant);
    this._plants.push(newPlant);
  }
}
