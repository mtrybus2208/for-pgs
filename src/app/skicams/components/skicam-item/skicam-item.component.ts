import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SkiCam } from './../../models/skicam.model';

@Component({
  selector: 'app-skicam-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skicam-item.component.html',
  styleUrls: ['./skicam-item.component.scss'],
})
export class SkicamItemComponent implements OnInit {

  @Input() skiCam: SkiCam;
  @Input() date: Date;

  constructor() {}

  ngOnInit() {  }

}
