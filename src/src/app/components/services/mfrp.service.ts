import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class MFRPService{
    constructor(private http:HttpClient) { }

    getAllEmpData():any
	{
		return this.http.get("http://localhost:1111/allemployee");
 	}
}