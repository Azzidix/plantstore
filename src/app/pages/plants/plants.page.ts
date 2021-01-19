import { Component, OnInit } from '@angular/core';
import { Plants } from '../../interfaces/plants';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
})
export class PlantsPage implements OnInit {
  plant: any = [];
  plantList: any = [];
  plantData: Plants;

  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    this.plantData = {} as Plants;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('plantId')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
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
        let plant = this.plantList.filter(
          (e: any) => e.id === paramMap.get('plantId')
        );

        this.plant = plant[0];
        console.log(this.plant);
      });
    });
  }
}
