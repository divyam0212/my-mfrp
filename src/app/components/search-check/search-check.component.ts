import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-search-check',
  templateUrl: './search-check.component.html',
  styleUrls: ['./search-check.component.css']
})
export class SearchCheckComponent implements OnInit {

  searchText: any = "";
  empData: any = [
    {
      "checkId": 1,
      "checkTitle": "Sum of two integers",
      "checkDuration": 1,
      "checkType": "PRACTICE CHECK",
      "checkDescription": "Complete the function solveMeFirst to compute the sum of two integers.Function prototype:int solveMeFirst(int a, int b);where,a is the first integer input.b is the second integer input Return values sum of the above two integers"
    },
    {
      "checkId": 2,
      "checkTitle": "Print first 10 multiples of integer N",
      "checkDuration": 1,
      "checkType": "PRACTICE CHECK",
      "checkDescription": "Given an integer, N, print its first 10 multiples. Each multiple N * i (where 1<=i<=10) should be printed on a new line in the form: N x i = result."
    },
    {
      "checkId": 3,
      "checkTitle": "Check whether anagram or not",
      "checkDuration": 2,
      "checkType": "FINAL CHECK",
      "checkDescription": "Two strings,  and , are called anagrams if they contain all the same characters in the same frequencies. For example, the anagrams of CAT are CAT, ACT, TAC, TCA, ATC, and CTA.Complete the function in the editor. If  and  are case-insensitive anagrams, print Anagrams; otherwise, print Not Anagrams instead.Print Anagrams if  and  are case-insensitive anagrams of each other; otherwise, print Not Anagrams instead."
    },
    {
      "checkId": 4,
      "checkTitle": "Display volume, perimeter and area of box",
      "checkDuration": 2,
      "checkType": "FINAL CHECK",
      "checkDescription": "Create an application which allows the user to enter the dimensions of a box (as integers) and in return displays the volume of the box, the perimeter of the box and the surface area of the box"
    },
    {
      "checkId": 5,
      "checkTitle": "Sum of three integers",
      "checkDuration": 2,
      "checkType": "PRACTICE CHECK",
      "checkDescription": "Complete the function solveMeFirst to compute the sum of two integers.Function prototype:int solveMeFirst(int a, int b);where,a is the first integer input.b is the second integer input Return values sum of the above two integers"
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    (function () {
      'use strict';
      window.addEventListener('load',  function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var  forms  =  document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var  validation  =  Array.prototype.filter.call(forms,  function (form) {
          form.addEventListener('submit',  function (event) {
            if  (form.checkValidity()  ===  false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },  false);
        });
      },  false);
    })();
  }

  onChange() {
    if (this.searchText.length >= 3)
      return true;
    else return false;
  }
  addCheck(check: any) {
    alert("CHECK ADDED: -------> " + JSON.stringify(check));
  }
  previewCheck(checkId: any) {
    alert("CHECK ID RECIEVED-----> " + checkId);
    this.router.navigate(['/preview', checkId]);
  }
}
