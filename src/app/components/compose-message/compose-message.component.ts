import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from '../../animations';

@Component({
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
  animations: [ slideInDownAnimation ],
})
export class ComposeMessageComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  message: string;
  details: string;
  sending = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  send() {
    this.sending = true;
    this.details = 'Sending message...';

    // simulate latency before "sending" the message and closing the popup.
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  /** The closePopup() method closes the popup view by navigating to the popup outlet with a null. */
  closePopup() {
    // Providing a 'null' value to the named outlet clears the contents of the named outlet.
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
