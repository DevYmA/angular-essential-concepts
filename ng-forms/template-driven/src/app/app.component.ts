import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') userDetailForm: NgForm ;
  defaultProvince = 2;
  address = '';
  genders = ['Male', 'Female'];
  user = {
    fullName: '',
    email: ''
  }

  title = 'ng-forms';

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.userDetailForm);
    this.user.fullName = this.userDetailForm.form.value.userData.fullName;
    this.user.email = this.userDetailForm.form.value.userData.email;
  }

  suggestValue(){
    const suggestedValue = 'Rick Gremmy';
    // this.userDetailForm.setValue({
    //   userData:{
    //     fullName: suggestedValue
    //   }
    // });
    this.userDetailForm.form.patchValue(
      {
          userData:{
            fullName: suggestedValue
          }
        }
    );
  }
}
