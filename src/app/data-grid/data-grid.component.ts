import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  // Default Input for table
  dataArray: Array<any> = [
    {
      "status": "actif",
      "contractNum": "123456789",
      "type": "NL+",
      "signDate": "12/05/2021",
      "activeDate": "13/05/2021",
      "validDate": "13/05/2023",
      "carrier": "Jean DUPONT",
      "payer": "Jean DUPONT"
    },
    {
      "status": "actif",
      "contractNum": "123456789",
      "type": "NL+",
      "signDate": "12/05/2021",
      "activeDate": "13/05/2021",
      "validDate": "13/05/2023",
      "carrier": "Martine DUPONT",
      "payer": "Jean DUPONT"
    }
  ];

  @Input() dataSource: any = this.dataArray;

}
