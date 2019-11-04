import { Injectable } from '@angular/core';
import { Question } from '../datamodel/question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {



  constructor(private httpClient: HttpClient) { }
 
  
  getQuestionList(criterion : string): Observable<Question[]>{
    var questionList : Question[];
    return this.httpClient.get("http://localhost:8080/quiz-rest-api/rest/questions?qContent=" + criterion) as Observable<Question[]>;
    
 
  }
 
}



