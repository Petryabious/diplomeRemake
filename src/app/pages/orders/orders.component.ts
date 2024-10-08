import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { TableModule } from 'primeng/table';
import { ToolPanelComponent } from '../../layout/tool-panel/tool-panel.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PopupAddColumnComponent } from '../../components/dialogs/popup-add-column/popup-add-column.component';
import { PopupGoodComponent } from '../../components/dialogs/popup-good/popup-good.component';
import { Product } from '../../interfaces/test/product.interface';
import { Column } from '../../interfaces/test/column.interface';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    HeaderComponent,
    TableModule,
    ToolPanelComponent,
    ContextMenuModule,
    PopupAddColumnComponent,
    PopupGoodComponent,
    TableComponent
],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  public products: Product[] = [];
  public selectedProduct!: Product;

  public cols: Column[] = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];

  public selectedColumns:Column[] = [...this.cols];

  constructor() {}

  ngOnInit(): void {
    console.log('init orders')
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
