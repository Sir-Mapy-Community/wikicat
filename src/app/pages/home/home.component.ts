import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  phases = [
    [  "Wiki Cat Launch", "500 holders", "2,000 wallet Transactions", "Website Launch", "Contract auditing by solidity Finance", "1000 Organic Telegram Members", "Creation of our Chinese and Turkish Community", "White Paper Creation", "Road Map Creation"
    ],
    [
      "Website Launch", "Contract auditing by solidity Finance", "1000 Organic Telegram Members", "Creation of our Chinese and Turkish Community", "White Paper Creation", "Road Map Creation"
    ],
    [
      "Contract auditing by solidity Finance", "1000 Organic Telegram Members", "Creation of our Chinese and Turkish Community", "White Paper Creation", "Road Map Creation"
    ]
  ]

  currentArray = 0;
  currentPhase = this.phases[this.currentArray];

  ngOnInit(): void {

  }

  nextPhase() {

    if (this.phases.length - 1 != this.currentArray) {
      this.currentArray++;
      this.currentPhase = this.phases[this.currentArray];
    }

  }

  previousPhase() {

    if (this.currentArray != 0) {
      this.currentArray--;
      this.currentPhase = this.phases[this.currentArray];
    }

  }

}
