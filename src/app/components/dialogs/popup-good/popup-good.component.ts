import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../../interfaces/test/product.interface';


@Component({
  selector: 'app-popup-good',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './popup-good.component.html',
  styleUrl: './popup-good.component.scss'
})
export class PopupGoodComponent implements OnInit {
 
  @Input() isVisible = false;
  @Input() product!:Product;
  @Input() type: string = '';

  @Output() isVisibleChange = new EventEmitter<boolean>();


  constructor(){
    
  }

  ngOnInit(): void {
    console.log('init popup good')
  }
  public closePopup() {
    this.isVisibleChange.emit(false);
  }
}
