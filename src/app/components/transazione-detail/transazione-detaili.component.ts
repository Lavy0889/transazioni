import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';

@Component({
  selector: 'app-transazione-detaili',
  templateUrl: './transazione-detaili.component.html',
  styleUrl: './transazione-detaili.component.css'
})
export class TransazioneDetailiComponent {
  @Input()
transazione?: Transazione;
}
