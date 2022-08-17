import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'cornflowerblue';
  @Input('appBetterHighlight') highlightColor: string = 'red';

  @HostBinding('style.border') border: string;

  constructor(private elRef: ElementRef, private rend: Renderer2) {}

  ngOnInit(): void {
    // this.rend.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.rend.setStyle(
      this.elRef.nativeElement,
      'background-color',
      this.highlightColor
    );
    this.border = '5px solid red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.rend.setStyle(
      this.elRef.nativeElement,
      'background-color',
      this.defaultColor
    );
    this.border = '5px solid green';
  }
}
