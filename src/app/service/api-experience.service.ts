import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperiencesModel } from '../model/experiences-model';

const url = 'http://localhost:3000/experiences';

@Injectable({
  providedIn: 'root'
})
export class ApiexperienceService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ExperiencesModel[]>  {
    return this.http.get<ExperiencesModel[]>(url);
  }

  public findOne(id: string): Observable<ExperiencesModel>  {
    return this.http.get<ExperiencesModel>(url+ '/'+ id);
  }

  public add(e: ExperiencesModel) {
    return this.http.post<ExperiencesModel>(url, e);
  }

  public update(e: ExperiencesModel) {
    return this.http.put<ExperiencesModel>(url+'/'+e.id, e);
  }

  public delete(e: ExperiencesModel) {
    return this.http.delete<ExperiencesModel>(url+'/'+ e.id);
  }
}
