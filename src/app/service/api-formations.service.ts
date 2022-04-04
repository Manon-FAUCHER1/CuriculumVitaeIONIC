import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormationsModel } from '../model/formations-model';

const url = 'http://localhost:3000/formations';

@Injectable({
  providedIn: 'root'
})
export class ApiFormationsService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<FormationsModel[]>  {
    return this.http.get<FormationsModel[]>(url);
  }

  public add(f: FormationsModel) {
    return this.http.post<FormationsModel>(url, f);
  }

  public update(f: FormationsModel) {
    return this.http.put<FormationsModel>(url+'/'+f.id, f);
  }

  public delete(f: FormationsModel) {
    return this.http.delete<FormationsModel>(url+'/'+f.id);
  }
}
