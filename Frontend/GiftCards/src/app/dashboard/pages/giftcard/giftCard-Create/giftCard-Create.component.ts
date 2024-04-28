import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gift-card-create',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './giftCard-Create.component.html',
  styleUrl: './giftCard-Create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftCardCreateComponent { }
