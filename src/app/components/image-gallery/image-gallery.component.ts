import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rq-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  @Input() images:string[];

  activeSlide:string = "0";

  constructor(private modalService: NgbModal,
              private config: NgbCarouselConfig) {
    config.interval = 0;
  }
  ngOnInit() {
  }

  open(content, imgId) {
    this.activeSlide = imgId;
    this.modalService.open(content, {size:'lg'}).result.then((result) => {
      // close
    }, (reason) => {
      // dismissed
    });;
  }

}
