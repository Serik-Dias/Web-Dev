import { Component, input, output } from '@angular/core';
import { Product } from '../../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  product = input.required<Product>();
  
  remove = output<number>();

  like() {
    this.product().likes++;
  }

  delete() {
    this.remove.emit(this.product().id);
  }

  shareOnWhatsapp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product().link)}`, '_blank');
  }

  shareOnTelegram() {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product().link)}`, '_blank');
  }
}