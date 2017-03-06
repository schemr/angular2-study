import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';

  private backgroundColor : string;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //첫번째 방법은 직접 DOM에 접근하므로 사용을 자제하고 두번째 방법 처럼 renderer API 를 사용하자
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
  }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
