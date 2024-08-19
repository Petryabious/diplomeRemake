import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-popup-good',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './popup-good.component.html',
  styleUrl: './popup-good.component.scss'
})
export class PopupGoodComponent implements OnInit {
 
  @Input() isVisible = false;
  @Input() product:any;

  @Output() visiblePopupHandler = new EventEmitter<boolean>();


  constructor(){
    console.log('init popup good')
    
  }

  ngOnInit(): void {
    console.log('init popup good')
  }
  public closePopup() {
    this.visiblePopupHandler.emit(false);
  }
}
