import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appPizzaBorderCard]'
})


export class BorderCardDirective {

  private readonly GREY_COLOR = '#f4f4F5'; 
  private readonly GREEN_COLOR = '#009688';
  
  constructor(private element: ElementRef) {

    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
  }

  @Input('appPizzaBorderCard') borderColor: string | undefined;

  private setBorder(color: string) {
    const border = 'solid 4px' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.element.nativeElement.style.height = height + 'px';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.GREEN_COLOR);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.GREY_COLOR)
  }

}
