import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  checkId: any;
  contentVisible: boolean = true;
  hero: any = {
    "checkId": 1,
    "checkDescription": "<b>Hello World</b><br> &nbsp; &nbsp; My User Story is to search and add existing checks. <br>",
    "checkDuration": 2,
    "checkTitle": "Sum of two integers",
    "checkType": "PRACTICE CHECK",
    "checkInput": "a=3 b=5",
    "checkOutput": "Sum is: 8"
  }

  /* hero:any={
    "checkId":1,
    "checkDescription":"<b>Hello World</b><br> &nbsp; &nbsp; My User Story is to search and add existing checks. <br>",
    "checkDuration":2,
    "checkTitle": "Sum of two integers",
    "checkType":"PRACTICE CHECK",
    "checkOutput":"Sum is: 8"
  } */

  /* hero:any={
    "checkId":1,
    "checkDescription":"<b>Hello World</b><br> &nbsp; &nbsp; My User Story is to search and add existing checks. <br>",
    "checkDuration":2,
    "checkTitle": "Sum of two integers",
    "checkType":"PRACTICE CHECK",
    "checkInput":"a=3 b=5"
  } */


  /* hero:any={
    "checkId":1,
    "checkDuration":2,
    "checkTitle": "Sum of two integers",
    "checkType":"PRACTICE CHECK",
    "checkInput":"a=3 b=5",
    "checkOutput":"Sum is: 8"
  } */

  /* hero:any={
    "checkId":1,
    "checkDuration":2,
    "checkInput":"a=3 b=5",
    "checkOutput":"Sum is: 8"
  } */


  scores: any = [
    { "checkCondition":  "you need to have commands with code",  "mark": 20 },
    { "checkCondition":  "you need to have proper spacing in code",  "mark": 10 }
  ];
  /* scores:any=[];  */

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.checkId = this.route.snapshot.paramMap.get('checkId');

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
  backFn() {
    alert("GOING BACK TO SEARCH");
    this.router.navigate(['/acco']);
  }

  addCheck(hero: any) {
    alert("CHECK ADDED: -------> " + JSON.stringify(hero));
  }

}
