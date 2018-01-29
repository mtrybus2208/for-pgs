import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 
import { simpleFade } from './../../../shared/animations';

@Component({
  selector: 'app-item-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './item-img.component.html',
  styleUrls: ['./item-img.component.scss'],
  animations: [ simpleFade() ],
})
export class ItemImgComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() alt: string;
  state = 'out';

  constructor() {}

  ngOnInit() { }

}
