import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail)
  }

}
