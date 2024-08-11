import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { TableModule } from 'primeng/table';
import { ToolPanelComponent } from '../../layout/tool-panel/tool-panel.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [HeaderComponent, TableModule,ToolPanelComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
 
  public products: any[] = [];

  constructor(){}

  ngOnInit(): void {

    for (let index = 0; index < 20; index++) {
      console.log(index)
      this.products.push(
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
      )
      
    }
    
  }


}
