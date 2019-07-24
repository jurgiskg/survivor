import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IAnswersResult} from '../hints/hints.model';

@Injectable({
  providedIn: 'root'
})
export class HintsService {
  constructor(private httpClient: HttpClient) { }

  public sendAnswers(answers: any): Observable<IAnswersResult> {
    console.log(answers);
    return this.httpClient.post<IAnswersResult>('https://us-central1-survivor-e2d68.cloudfunctions.net/hints', answers);
  }
}
