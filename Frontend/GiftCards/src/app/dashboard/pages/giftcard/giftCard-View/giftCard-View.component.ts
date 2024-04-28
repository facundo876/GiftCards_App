import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gift-card-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './giftCard-View.component.html',
  styleUrl: './giftCard-View.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftCardViewComponent { }
