import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit {
  @Input() textDisplay: TextDisplay;

  name: string;
  textLeft: string;
  textRight: string;

  constructor() { }

  ngOnInit() {
    this.name = this.textDisplay.name;
    this.textLeft = this.textDisplay.text.substring(0, this.textDisplay.text.indexOf('/') === -1 ? this.textDisplay.text.length : this.textDisplay.text.indexOf('/'));

    this.textRight = this.textDisplay.text.substring(this.textDisplay.text.indexOf('/'));
  }

}
export interface TextDisplay {
  name: string;
  text: string;
}
