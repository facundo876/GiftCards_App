import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftCardCreateComponent } from "./dashboard/pages/giftcard/giftCard-Create/giftCard-Create.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, GiftCardCreateComponent]
})
export class AppComponent {
  title = 'GiftCards';
}
