import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products$ = data
    );
  }

}
