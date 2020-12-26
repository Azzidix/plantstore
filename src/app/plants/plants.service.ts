import { Injectable } from "@angular/core";
import { Plants } from "./plants.model";

@Injectable({
  providedIn: "root",
})
export class PlantsService {
  private _plants: Plants[] = [
    new Plants(
      "ab1",
      "Alovera",
      27,
      "alovera good plant",
      "https://www.plantsguru.com/image/cache/catalog/Adenium/pg-aloevera-800x800.jpg"
    ),
    new Plants(
      "ab3",
      "Alovera",
      22,
      "alovera good plant",
      "https://www.plantsguru.com/image/cache/catalog/Adenium/pg-aloevera-800x800.jpg"
    ),
    new Plants(
      "ab4",
      "Alovera",
      25,
      "alovera good plant",
      "https://www.plantsguru.com/image/cache/catalog/Adenium/pg-aloevera-800x800.jpg"
    ),
    new Plants(
      "ab2",
      "Alovera",
      20,
      "alovera good plant",
      "https://www.plantsguru.com/image/cache/catalog/Adenium/pg-aloevera-800x800.jpg"
    ),
  ];

  get plants() {
    return [...this._plants];
  }

  constructor() {}

  getPlant(id: string) {
    return this._plants.find((p) => p.id === id);
  }

  addPlant(name: string, price: number, description: string, imageUrl: string) {
    const newPlant = new Plants(
      Math.random().toString(),
      name,
      price,
      description,
      imageUrl
    );

    console.log(newPlant);
    this._plants.push(newPlant);
  }
}
