import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.page.html",
  styleUrls: ["./transaction.page.scss"],
})
export class TransactionPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail)
  }
}
