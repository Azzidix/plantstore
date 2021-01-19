import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Plants } from 'src/app/interfaces/plants.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  plant: any = [];
  plantList: any = [];
  plantData: Plants;
  segment: string;

  constructor(
    private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController
  ) {}

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
    });
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    this.segment = event.detail.value;
    console.log(event.detail);
  }

  onDelete(id: string) {
    this.loadingCtrl.create();
    this.firebaseService.deletePlant(id);
    this.loadingCtrl.dismiss();
  }
}
