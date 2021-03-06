import { Component, OnInit } from '@angular/core';

import {AirportService} from '../../services/airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  airports;
  state;
  
  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.airportService.getAirport().subscribe(airports=>{
      this.airports = airports;
    });
  }

  searchByState(){
    this.airportService.getAirportByState(this.state).subscribe(airports=>{
      this.airports = airports;
    });
  }
}
 