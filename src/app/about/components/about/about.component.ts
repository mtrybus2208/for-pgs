import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { simpleFade } from './../../../shared/animations/img.animations';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ simpleFade() ],
})
export class AboutComponent implements OnInit {

  state = 'out';

  constructor( ) {}

  ngOnInit() {
  }

}
