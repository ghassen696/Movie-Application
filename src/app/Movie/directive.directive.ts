import { Directive ,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private elt : ElementRef, private renderer :Renderer2) { }

  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.elt.nativeElement,'margin','5px 50px')
    this.renderer.setStyle(this.elt.nativeElement,'pading','5px 50px')
    this.renderer.setStyle(this.elt.nativeElement,'width','70%')
   // this.renderer.setStyle(this.elt.nativeElement,'transition','transform .01s')
    }

    @HostListener('mouseout') onmouseout(){
      this.renderer.setStyle(this.elt.nativeElement,'margin','0px 0px')
      this.renderer.setStyle(this.elt.nativeElement,'pading','0px 0px')
      this.renderer.setStyle(this.elt.nativeElement,'width','60%')
      this.renderer.setStyle(this.elt.nativeElement,'transition','scale(2.5)')
      }
    }