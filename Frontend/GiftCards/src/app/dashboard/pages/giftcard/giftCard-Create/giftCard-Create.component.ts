import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gift-card-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './giftCard-Create.component.html',
  styleUrl: './giftCard-Create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftCardCreateComponent { 

  public tipoRegalo = signal(['Producto','Monto']);
  public selectedRegalo = signal('');

  constructor() {
    this.selectedRegalo.set(this.tipoRegalo()[0]);
  }
}
