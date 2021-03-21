import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input-tab',
  templateUrl: './input-tab.component.html',
  styleUrls: ['./input-tab.component.css']
})
export class InputTabComponent implements OnInit {
  userData: any = [];
  public myForm = new FormGroup({});
  id: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      phone: new FormControl('')
    });
    this.id = this.route.snapshot.paramMap.get('id');
    let users = JSON.parse(localStorage.getItem("data")!);
    // console.log(users)
    // console.log(this.id)
    let obj = users.find((o: any) => o.id === Number(this.id));
    // console.log(obj)
    if (obj) {
      if (obj.id = this.id) {
        this.myForm.patchValue({
          phone: obj["phone"],
          id: obj["id"],
          name: obj["name"],

        })
      }
    }

    this.userData = JSON.parse(localStorage.getItem('data')!) || [];
  }


  enterdata(val: any) {

    if (this.id) {
      let objIndex = this.userData.findIndex(((obj: any) => obj.id == this.id));
      console.log(objIndex) //shows index number we select
      this.userData[objIndex] = val;
      localStorage.setItem('data', JSON.stringify(this.userData));
      // localStorage.setItem('data'[objIndex], JSON.stringify(this.userData[objIndex]));
      this.router.navigate(['/home']);
    }
else{
    this.userData.push(val);
    localStorage.setItem('data', JSON.stringify(this.userData));
    this.router.navigate(['/home']);
}
  }

}
