import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup-add-column',
  standalone: true,
  imports: [DialogModule, ButtonModule, CheckboxModule, FormsModule],
  templateUrl: './popup-add-column.component.html',
  styleUrl: './popup-add-column.component.scss',
})
export class PopupAddColumnComponent implements OnInit {
  @Input() isVisible = false;
  @Input() columns:any;
  @Input() selectedColumns:any;
  @Output() visiblePopupHandler = new EventEmitter<boolean>();
  @Output() changeColumns = new EventEmitter();
  public selectedColumnsPopup:any;

  // public visible!: boolean;

  ngOnInit(): void {
    this.selectedColumnsPopup = [...this.selectedColumns]
  }

  public closePopup() {
    this.visiblePopupHandler.emit(false);
  }

  public changeSelectedColumns() {
    this.changeColumns.emit(this.selectedColumnsPopup);
    this.closePopup();
  }

}
