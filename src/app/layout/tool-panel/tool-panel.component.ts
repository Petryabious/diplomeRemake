import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PopupGoodComponent } from '../../components/dialogs/popup-good/popup-good.component';

@Component({
  selector: 'app-tool-panel',
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule, PopupGoodComponent],
  templateUrl: './tool-panel.component.html',
  styleUrl: './tool-panel.component.scss',
})
export class ToolPanelComponent {
  public isPopupOpen = false;

  public showPopupAdd() {
    this.isPopupOpen = true;
  }
}
