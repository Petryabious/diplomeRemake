import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-popup-add-column',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './popup-add-column.component.html',
  styleUrl: './popup-add-column.component.scss',
})
export class PopupAddColumnComponent implements OnInit {
  @Input() isVisible = false;
  @Output() visiblePopupHandler = new EventEmitter<boolean>();

  // public visible!: boolean;

  ngOnInit(): void {}

  public closePopup() {
    this.visiblePopupHandler.emit(false);
  }

  public test(val: any) {
    console.log(val);
  }
}
