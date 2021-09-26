import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri:String='http://localhost:4000/';
  headers = new HttpHeaders().set('content-Type','application/json');

  constructor(private http: HttpClient) { }
  createEmployee(data:any): Observable<any>{
    let url =`${this.baseUri}create`;
    return this.http.post(url,data)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getEmployees(){
    return this.http.get(`${this.baseUri}`);
  }
  getEmployee(id:any): Observable<any>{
    let url =`${this.baseUri}read/${id}`;
    return this.http.get(url,{headers :this.headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateEmployee (id:any,data:any): Observable<any>{
    let url =`${this.baseUri}update/${id}`;
    return this.http.put(url,data,{headers: this.headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }
  deleteEmploye(id:any):Observable<any>{
    let url =`${this.baseUri}delete/${id}`;
    return this.http.delete(url,{headers:this.headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
