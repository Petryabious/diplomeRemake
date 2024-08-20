import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { Column } from '../../../interfaces/test/column.interface';

@Component({
  selector: 'app-popup-add-column',
  standalone: true,
  imports: [DialogModule, ButtonModule, CheckboxModule, FormsModule],
  templateUrl: './popup-add-column.component.html',
  styleUrl: './popup-add-column.component.scss',
})
export class PopupAddColumnComponent implements OnInit {
  @Input() isVisible = false;
  @Input() columns:Column[] = [];
  @Input() selectedColumns:Column[]= [];
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() changeColumns = new EventEmitter<Column[]>();
  public selectedColumnsPopup:Column[] = [];

  // public visible!: boolean;

  ngOnInit(): void {
    this.selectedColumnsPopup = [...this.selectedColumns]
  }

  public closePopup() {
    this.isVisibleChange.emit(false);
  }

  public changeSelectedColumns() {
    this.changeColumns.emit(this.selectedColumnsPopup);
    this.closePopup();
  }

}
