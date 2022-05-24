import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  social = environment.social;
  links = environment.links;

  phases = [
    [  "Wiki Cat Launch", "500 holders", "2,000 wallet Transactions", "Website Launch", "Contract auditing by solidity Finance", "1000 Organic Telegram Members", "Creation of our Chinese and Turkish Community", "Road Map Creation"
    ],
    [
      "CoinMarketCap listing", "Coin Gecko listing", "5,000 telegram members", "2,000 holders", "Creation of donation wallet", "Listing on a centralized exchange", "Creation of Wiki Cat NFT (Wiki Cat Club)"
    ],
    [
      "12,000 holders", "20,000 telegram members", "White paper release of wikicat Stable coin (WUSD)", "Increase marketing", "Partnership announcement", "Road map Review", "More Listing on centralized exchange", "Market analysis for the future"
    ],
    [
      "50,000 holders", "Increase push towards crypto education in identified regions", "Listing on major top CEX", "Launch of Wiki Cat Stable coin (WUSD)", "CertiK or Hacken Audit for WKC and WUSD", "Increased Marketing for WUSD", "Project Review"
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

  // faq(data: any) {
  //   console.log(data);
  // }




}
