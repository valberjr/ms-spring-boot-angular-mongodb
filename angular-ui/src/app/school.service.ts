import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { School } from './school.component';

const URL = 'http://localhost:8080/api/schools';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  #datasource = new BehaviorSubject<School>({});
  #school = new BehaviorSubject<School>({});

  constructor(private http: HttpClient) {}

  setDatasource(datasource: any): void {
    this.#datasource.next(datasource);
  }

  getDatasource(): Observable<School> {
    return this.#datasource.asObservable();
  }

  setSchool(school: any): void {
    this.#school.next(school);
  }

  getSchool(): Observable<School> {
    return this.#school.asObservable();
  }

  save(school: School): Observable<School> {
    if (school.id) {
      return this.http.put<School>(URL, school);
    }

    return this.http.post<School>(URL, school);
  }

  getAllSchools(): Observable<School[]> {
    return this.http.get<School[]>(URL);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${URL}/${id}`);
  }
}
