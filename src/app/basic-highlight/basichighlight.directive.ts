import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHightlightDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
