import { Component, input, output } from '@angular/core';
import { Product } from '../../product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div class="product-grid">
      @for (item of products(); track item.id) {
        <app-product-card 
          [product]="item" 
          (remove)="onRemoveItem($event)">
        </app-product-card>
      } @empty {
        <p class="empty-msg">В этой категории товаров пока нет.</p>
      }
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
  `]
})
export class ProductListComponent {
  products = input.required<Product[]>();
  removeProduct = output<number>();

  onRemoveItem(id: number) {
  this.removeProduct.emit(id);
}
}