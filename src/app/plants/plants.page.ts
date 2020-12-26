import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { Plants } from './plants.model';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
})
export class PlantsPage implements OnInit {
  plant: Plants;

  constructor(
    private plantService: PlantsService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private authServices: AuthService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('plantId')) {
        this.navCtrl.navigateBack('/home')
        return;
      }
      this.plant = this.plantService.getPlant(paramMap.get('plantId'));
    })
  }

}
