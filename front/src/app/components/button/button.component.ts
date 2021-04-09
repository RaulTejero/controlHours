import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() textBtn: string;
  @Input() widthBtn: string;
  @Input() bgBtn: string;
  @Input() fontSizeBtn: string;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
