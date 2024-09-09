import {
  Component,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { Product } from '../../interfaces/test/product.interface';
import { Column } from '../../interfaces/test/column.interface';
import { PopupGoodComponent } from '../dialogs/popup-good/popup-good.component';
import { PopupAddColumnComponent } from '../dialogs/popup-add-column/popup-add-column.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    ContextMenuModule,
    PopupGoodComponent,
    PopupAddColumnComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() columns: Column[] = [];
  public selectedProduct!: Product;
  public typeOfPopup = 'addColumn';
  public isVisiblePopup = false;
  public isLabelEdit: WritableSignal<boolean> = signal(false);

  public selectedColumns: Column[] = [];

  public itemsOfContextMenu = [
    {
      label: 'Добавить колонку',
      icon: 'pi pi-fw pi-bars',
      command: () => this.showPopup('addColumn'),
    },
    {
      label: 'Изменить',
      icon: 'pi pi-fw pi-pen-to-square',
      command: () => this.editOrderPopup(),
      visible: this.isLabelEdit,
    },
  ];
  ngOnInit(): void {
    this.selectedColumns = [...this.columns];
  }

  public changeColumnsHandler(newColumns: Column[]) {
    this.selectedColumns = [...newColumns];
  }

  public showPopup(typeOfPopup: string) {
    this.typeOfPopup = typeOfPopup;
    this.isVisiblePopup = true;
  }

  public editOrderPopup() {
    console.log(this.selectedProduct);
  }

  public onRowSelect() {
    this.isLabelEdit.set(true);
    // this.itemsOfContextMenu.push({
    //   label: 'Изменить',
    //   icon: 'pi pi-fw pi-pen-to-square',
    //   command: () => this.editOrderPopup(),
    //   visible: this.isLabelEdit,
    // });
    // console.log(this.itemsOfContextMenu);
    // this.itemsOfContextMenu[1].visible = true;
  }

  public onRowUnselect() {
    this.isLabelEdit.set(false);
    // this.itemsOfContextMenu = this.itemsOfContextMenu.filter(
    //   (item) => item.label != 'Изменить'
    // );
    // this.itemsOfContextMenu[1].visible = false;
  }
}
