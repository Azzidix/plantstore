import { Component, OnInit } from '@angular/core';
import { Plants } from '../../interfaces/plants';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  plantList = [];
  plantData: Plants;

  constructor(private firebaseService: FirebaseService) {
    this.plantData = {} as Plants;
  }

  ngOnInit() {
    this.firebaseService.readPlant().subscribe((data) => {
      this.plantList = data.map((e) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          price: e.payload.doc.data()['price'],
          description: e.payload.doc.data()['description'],
          img: e.payload.doc.data()['img'],
        };
      });
      console.log(this.plantList);
    });
  }
}
