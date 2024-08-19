import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-tool-panel',
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule],
  templateUrl: './tool-panel.component.html',
  styleUrl: './tool-panel.component.scss',
})
export class ToolPanelComponent {
  // public options = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' },
  // ];
  // public currentOption: {} | undefined;
  @Output() isPopupAddGood = new EventEmitter<string>();

  public showPopupAdd(){
    this.isPopupAddGood.emit('popupGood')
  }
}
