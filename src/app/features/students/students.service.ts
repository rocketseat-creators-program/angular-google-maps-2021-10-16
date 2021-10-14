import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {
  }

  save(student: Student) {
    return this.http.post<Student>(this.url, student);
  }

  update(id: number, student: Student) {
    return this.http.put<Student>(`${this.url}/${id}`, student);
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  findById(id: number) {
    return this.http.get<Student>(`${this.url}/${id}`);
  }

  findAll() {
    return this.http.get<Student[]>(this.url);
  }

}
