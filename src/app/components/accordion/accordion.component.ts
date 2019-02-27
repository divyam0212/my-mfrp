import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  //checkName:any="PRACTICE CHECK";

  checkType:any=["PRACTICE CHECK","FINAL CHECK"];

  empData:any=[
    {
        "checkId":1,
        "checkTitle":"Sum of two integers",
        "checkDescription":"Complete the function solveMeFirst to compute the sum of two integers.Function prototype:int solveMeFirst(int a, int b);where,a is the first integer input.b is the second integer input Return values sum of the above two integers"
    },
    {
        "checkId":2,
        "checkTitle":"Print first 10 multiples of integer N",
        "checkDescription":"Given an integer, N, print its first 10 multiples. Each multiple N * i (where 1<=i<=10) should be printed on a new line in the form: N x i = result."
    },
    {
        "checkId":3,
        "checkTitle":"Check whether anagram or not",
        "checkDescription":"Two strings,  and , are called anagrams if they contain all the same characters in the same frequencies. For example, the anagrams of CAT are CAT, ACT, TAC, TCA, ATC, and CTA.Complete the function in the editor. If  and  are case-insensitive anagrams, print Anagrams; otherwise, print Not Anagrams instead.Print Anagrams if  and  are case-insensitive anagrams of each other; otherwise, print Not Anagrams instead."
    },
    {
        "checkId":4,
        "checkTitle":"Display volume, perimeter and area of box",
        "checkDescription":"Create an application which allows the user to enter the dimensions of a box (as integers) and in return displays the volume of the box, the perimeter of the box and the surface area of the box"
    }    
];

private filteredProblemStatementTemplates = [];
private _searchText: string;
private isClicked: boolean = false;

ngOnInit() {

}

get searchText(): string {
  return this._searchText;
}

set searchText(value: string){
  this._searchText = value;
  this.filteredProblemStatementTemplates = this.filterProblemStatementTemplate(value);
}
filterProblemStatementTemplate(value: string){
  return this.empData.filter(data => 
    data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
onClick(){
  if(this.isClicked){
    this.isClicked = false;
  }
  else{
    this.isClicked = true;
  }
}
}
