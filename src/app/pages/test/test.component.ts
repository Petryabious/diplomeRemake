import { Component, OnInit } from '@angular/core';
import { Column } from '../../interfaces/test/column.interface';
import { Product } from '../../interfaces/test/product.interface';
// import { TableComponent } from "../../components/table/table.component";

import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    // TableComponent
    ContextMenuModule,
    TableModule,
    TableComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {


  public products: Product[] = [];

  public cols: Column[] = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];

public itemsOfContextMenu = [
  {
    label: 'Добавить колонку',
    icon: 'pi pi-fw pi-bars',
    // command: () => this.showPopup('addColumn'),
  },
  {
    label: 'Изменить',
    icon: 'pi pi-fw pi-pen-to-square',
    // command: () => this.editOrderPopup('addColumn'),
  },
];


ngOnInit(): void {
  for (let index = 0; index < 5; index++) {
    this.products.push({
      id: index,
      code: 'f230fh0g3' + index,
      name: 'Bamboo Watch' + index,
      description: 'Product Description' + index,
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories' + index,
      quantity: 24,
      inventoryStatus: 'INSTOCK' + index,
      rating: 5,
    });
  }
}

}
