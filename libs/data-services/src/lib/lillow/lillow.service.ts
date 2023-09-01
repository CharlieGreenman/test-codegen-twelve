import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LillowService {

  constructor(private apollo: Apollo) { }

  loadLillow() {
    const query = Lillow;
    const variables = {};
    const lillow$ = this.apollo.query({ query, variables });
    return from(lillow$).pipe(map((data: any) => data?.lillow);
  }
}