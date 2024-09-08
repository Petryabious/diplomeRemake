import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { InputTextModule } from 'primeng/inputtext';

import { Product } from '../../../interfaces/test/product.interface';


@Component({
  selector: 'app-popup-good',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './popup-good.component.html',
  styleUrl: './popup-good.component.scss'
})
export class PopupGoodComponent implements OnInit {
 
  @Input() isVisible = false;
  @Input() product!:Product;
  @Input() type: string = '';
  @Input() header: string = '';

  @Output() isVisibleChange = new EventEmitter<boolean>();

  public cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

  constructor(){
    
  }

  ngOnInit(): void {
    console.log('init popup good')
    console.log(this.type)
  }
  public closePopup() {
    this.isVisibleChange.emit(false);
  }
}
