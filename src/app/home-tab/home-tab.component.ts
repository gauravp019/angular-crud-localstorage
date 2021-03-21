import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {
  oldData: any;
  text: any;
  userData = JSON.parse(localStorage.getItem("data")!);

  constructor() { }

  ngOnInit(): void {
    // console.log(this.userData)

    // }

    // editData(data: any, i: any) {

    //   myForm.get('id').patchValue(data.id);
    //   console.log(data)
    // }
  }
}