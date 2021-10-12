import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { Student } from './student';
import { catchError, delay, finalize } from 'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url = `${environment.apiUrl}/students`;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
  }

  save(student: Student) {
    this.spinner.show();
    return this.http.post<Student>(this.url, student).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  update(id: number, student: Student) {
    this.spinner.show();
    return this.http.put<Student>(`${this.url}/${id}`, student).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  deleteById(id: number) {
    this.spinner.show();
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  findById(id: number) {
    this.spinner.show();
    return this.http.get<Student>(`${this.url}/${id}`).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    ).toPromise();
  }

  findAll(): Observable<Student[]> {
    this.spinner.show();
    return this.http.get<Student[]>(this.url).pipe(
      delay(1000),
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

  private exceptionHandler(error: HttpErrorResponse): ObservableInput<any> {
    this.toastr.error(error.message, `${error.status} - ${error.statusText}`);
    return throwError(error);
  }

}
