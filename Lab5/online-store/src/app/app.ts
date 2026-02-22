import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { categories, products } from './data';
import { Category } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categoriesList = categories;
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
  
  removeProduct(id: number) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }

  get filteredProducts() {
  console.log('Выбранная категория:', this.selectedCategory?.id);
  return products.filter(p => p.categoryId === this.selectedCategory?.id);
}
}