import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoredbService } from './coredb.service';
import { Product } from './product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coredb-products',
  templateUrl: './coredb-products.component.html',
  styleUrls: ['./coredb-products.component.css']
})
export class CoredbProductsComponent implements OnInit, OnDestroy {

  productSubscription: Subscription;

  numProducts = 10;

  filteredSerialNumber = '';

  currentPage = 0;
  pageSize = 10;
  numPages: number;

  products: Product[] = [];

  constructor(public coredbService: CoredbService) { }

  ngOnInit() {
    this.initialize();
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  initialize() {
    this.productSubscription = this.coredbService.getProducts(this.numProducts)
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        (error: any) => {
          console.log(error);
        })
    this.numPages = +this.numProducts/this.pageSize;
  }

  onUpdate() {
    console.log('update');
    this.initialize();
    this.numPages = +this.numProducts/this.pageSize;
  }

  getStatusClasses(product: Product) {
    return {
      'list-group-item-success': product.flags === 5,
      'list-group-item-warning': product.flags < 5,
      'list-group-item-danger': product.flags > 5
    };
  }

}
