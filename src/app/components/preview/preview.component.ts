import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  checkId:any;
  hero:any={
    "checkId":1,
    "checkDescription":"<b>Hello World</b><br> &nbsp; &nbsp; My User Story is to search and add existing checks. <br>",
    "checkDuration":2,
    "checkTitle": "Sum of two integers",
    "checkType":"PRACTICE CHECK"
  }
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.checkId=this.route.snapshot.paramMap.get('checkId');
    alert("CHECK ID:--->"+this.checkId);
  }
  backFn(){
    alert("GOING BACK TO SEARCH");
    this.router.navigate(['/acco']);
  }

  addCheck(hero:any){
    alert("CHECK ADDED: -------> "+JSON.stringify(hero));
  }

}
