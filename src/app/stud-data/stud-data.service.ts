import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudDataService {

  constructor() { }
  getStudentList() {
    return [
      {name: "Hemant Borse", Year: "3rd year", Branch: "Information Technology"},
      {name: "student 2424", Year: "2nd year", Branch: "Computer Science"},
    ]
  }
}
