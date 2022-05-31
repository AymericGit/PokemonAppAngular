import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
    private initialColor: string = "#f5f5f5"
    private defaultColor: string = "#009688"
    private defaultHeight: number = 200;
    private borderColor: string = "#009688"

    constructor(private el: ElementRef) {
        this.setBackgroundColor(this.initialColor);
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
        this.setBackgroundColor(this.defaultColor || this.initialColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
        this.setBackgroundColor(this.initialColor);
    }

    private setBorder(color: string) {
        let border = 'solid 4px' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

    private setBackgroundColor(backgroundColor : string) {
        this.el.nativeElement.style.backgroundColor = backgroundColor; 
    }

}
