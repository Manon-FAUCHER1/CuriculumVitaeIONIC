import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompetencesModel } from '../model/competences-model';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/competences';

@Injectable({
  providedIn: 'root'
})
export class ApiCompetencesService {

  constructor(public http: HttpClient) { }

  public findAll(): Observable<CompetencesModel[]>  {
    return this.http.get<CompetencesModel[]>(url);
  }

  public add(c: CompetencesModel): Observable<CompetencesModel[]>  {
    return this.http.post<CompetencesModel[]>(url, c);
  }

  public update(c: CompetencesModel): Observable<CompetencesModel[]>  {
    return this.http.put<CompetencesModel[]>(url+'/'+c.id, c);
  }

  public delete(c: CompetencesModel): Observable<CompetencesModel[]>  {
    return this.http.delete<CompetencesModel[]>(url+'/'+c.id);
  }
}
