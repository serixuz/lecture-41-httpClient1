import { Component, inject, signal } from '@angular/core';
import { Api } from '../../core/service/api';
import { Product } from '../../core/service/api';

@Component({
  imports: [],
  selector: 'app-library',
  styleUrl: './library.css',
  templateUrl: './library.html',
})
export class Library {
  private readonly apiData = inject(Api);
  protected readonly products = signal<Product[]>([]);

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiData.getProducts().subscribe((data) => {
      this.products.set(data);
    });
  }
}
