import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  title: string;
  genre: string;
  description: string;
  image: string;
  year: number;
  rating: number;
  id: string;
}

@Service()
export class Api {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://6ae98f453d3dd3d37be52304.mockapi.io/lib';

  getProducts() {
    const response = this.http.get<Product[]>(`${this.baseUrl}/games`);

    return response;
  }
}
