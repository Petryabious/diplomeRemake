import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tool-panel',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './tool-panel.component.html',
  styleUrl: './tool-panel.component.scss'
})
export class ToolPanelComponent {

}
