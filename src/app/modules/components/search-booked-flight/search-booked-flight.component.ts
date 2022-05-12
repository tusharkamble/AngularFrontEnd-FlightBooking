import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-search-booked-flight',
  templateUrl: './search-booked-flight.component.html',
  styleUrls: ['./search-booked-flight.component.css']
})
export class SearchBookedFlightComponent implements OnInit {
  lstBookingHistory:any;
  PNR:string="";

  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
  }

  getBookingHistoryByPNR(searchedPNR:string){
    this.PNR=searchedPNR;
    this.bookingService.getBookingHistoryByPNR(this.PNR)
    .subscribe((res: any) => {  
      this.lstBookingHistory=res;
    });
  }
}
