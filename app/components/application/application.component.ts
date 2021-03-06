import { Component, ViewEncapsulation } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';

@Component({
    selector:'auction-application',
    templateUrl:'app/component/application/application.component.html',
    styleUrls:'app/component/application/application.component.css',
    encapsulation:ViewEncapsulation.None
})
export default class ApplicationComponent {
    products : Array<Product> = [];

    constructor (private productService : ProductService) {
        this.products = this.productService.getProducts();
    }
}