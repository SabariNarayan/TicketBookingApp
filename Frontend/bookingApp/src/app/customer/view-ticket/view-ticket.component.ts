import { Component,OnInit } from '@angular/core';
import { BookingTicketService } from 'src/app/services/booking service/booking-ticket.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  tickets: any[] = [];
  errorMessage: string = '';
  userId: string | null;

  constructor(private ticketBookingService : BookingTicketService , private loginService: LoginService) {
    this.userId = this.loginService.getUserId();
  }

  ngOnInit(): void {

    this.loadTickets();
    // Get the user's ID, for example, from your authentication service or wherever it's stored.
    // You can use this.userId to pass the user ID to the service.
    if (this.userId) {
      // Fetch user's tickets using this.userId
      this.ticketBookingService.getTicketsByUserId(this.userId).subscribe(
        (tickets) => {
          this.tickets= tickets;
          console.log('User Tickets:', tickets);
          
        },
        (error) => {
          console.error('Error fetching user tickets:', error);
          // Handle the error here
        }
      );
    } else {
      // Handle the case where userId is not available (e.g., user is not logged in)
      console.log('User is not authenticated. Please log in to view tickets.');
    }
  }

  cancelTicket(ticketId: string, userId: string): void {
    this.ticketBookingService.cancelTicket(ticketId, userId).subscribe(
      (response) => {
           alert('Ticket(s) Cancelled');// Handle a successful cancellation, e.g., remove the canceled ticket from the list
      },
      (error) => {
         // Handle errors, e.g., show an error message to the user
      }
    );
  }

  loadTickets() {
    if (this.userId) {
      this.ticketBookingService.getTicketsByUserId(this.userId).subscribe((data) => {
        this.tickets = data;
      });
    } else {
      // Handle the case where userId is null, e.g., show an error message or redirect the user to log in.
    }
  }
  
  reloadTable() {
    // Call your loadTickets method to fetch and update the data
    this.loadTickets();
  }
}
