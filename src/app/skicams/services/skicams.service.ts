import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { SkiCam } from './../models/skicam.model';

@Injectable()
export class SkicamsService {

  private BASE_API_URL = 'https://makevoid-skicams.p.mashape.com/cams.json';
  private searchedCams: String[] = ['Bielmonte', 'Castione della Presolana'];

  constructor(private http: HttpClient) { }

  getSkicams(): Observable<SkiCam[]> {
    const headers = new HttpHeaders().append('X-Mashape-Key', 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw');
    return this.http
      .get<any>(this.BASE_API_URL, {
        headers,
      })
      .pipe(
        map((result) => {
          return Object.keys(result).map((key) => {
            return new SkiCam({
              name: result[key].name,
              cams: Object.entries(result[key].cams).slice(0, 2).map(x => x[1]),
            });
          });
        }),
        map(result => result
          .filter( cam => cam.name === this.searchedCams[0] ||  cam.name ===  this.searchedCams[1])
        ),
        catchError(error => {
          return Observable.throw(error.json());
        })
      );
  }

}
