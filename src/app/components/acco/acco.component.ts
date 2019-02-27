import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-acco',
    templateUrl: './acco.component.html',
    styleUrls: ['./acco.component.css']
})
export class AccoComponent implements OnInit {

    checkN: any;
    searchText: any = "";
    //checkName:any="PRACTICE CHECK";
    isClicked:boolean;
    checkType: any = ["PRACTICE CHECK", "FINAL CHECK"];
    empData: any = [
        {
            "checkId": 1,
            "checkTitle": "Sum of two integers",
            "checkDescription": "Complete the function solveMeFirst to compute the sum of two integers.Function prototype:int solveMeFirst(int a, int b);where,a is the first integer input.b is the second integer input Return values sum of the above two integers"
        },
        {
            "checkId": 2,
            "checkTitle": "Print first 10 multiples of integer N",
            "checkDescription": "Given an integer, N, print its first 10 multiples. Each multiple N * i (where 1<=i<=10) should be printed on a new line in the form: N x i = result."
        },
        {
            "checkId": 3,
            "checkTitle": "Check whether anagram or not",
            "checkDescription": "Two strings,  and , are called anagrams if they contain all the same characters in the same frequencies. For example, the anagrams of CAT are CAT, ACT, TAC, TCA, ATC, and CTA.Complete the function in the editor. If  and  are case-insensitive anagrams, print Anagrams; otherwise, print Not Anagrams instead.Print Anagrams if  and  are case-insensitive anagrams of each other; otherwise, print Not Anagrams instead."
        },
        {
            "checkId": 4,
            "checkTitle": "Display volume, perimeter and area of box",
            "checkDescription": "Create an application which allows the user to enter the dimensions of a box (as integers) and in return displays the volume of the box, the perimeter of the box and the surface area of the box"
        },
        {
            "checkId": 5,
            "checkTitle": "Sum of three integers",
            "checkDescription": "Complete the function solveMeFirst to compute the sum of two integers.Function prototype:int solveMeFirst(int a, int b);where,a is the first integer input.b is the second integer input Return values sum of the above two integers"
        },
    ];


    constructor() {
    }

    ngOnInit() {
    }


    addCheck(type: any, check: any) {
        alert("OBTAINED CHECK TYPE AND CHECK ID: " + type + " " + JSON.stringify(check));
    }
    onChange() {
        if (this.searchText.length >= 3)
            return true;
        else return false;
    }
}

