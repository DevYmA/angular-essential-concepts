import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-forms';
  genders = ['Male', 'Female'];

  forbiddenName = ['John', 'Calr'];

  userForm: FormGroup;

  ngOnInit(){
    this.userForm = new FormGroup({
      'fullName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)] ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Male'),
      'education': new FormGroup({
        'primary': new FormControl('Primary', [Validators.required]),
        'secondary': new FormControl(null)
      }),
      'hobbies': new FormArray([])
    });

    //Value changes
    this.userForm.valueChanges.subscribe((value)=> {
      console.log(value);
    });

    //Status Changes
    this.userForm.statusChanges.subscribe((status)=> {
      console.log(status);
    });
  }

  onSubmit(){
    console.log(this.userForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (this.userForm.get('hobbies') as FormArray).push(control);
  }

  getFormArrayControls(){
    return (this.userForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control:FormControl): {[s: string]:boolean} {
    if(this.forbiddenName.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true}
    }
    return null;
  }

  // forbiddenEmail() : Promise<any>|| Observable<any>{
  //   const promise = new Promise()<any>((resolve, reject) => {
  //     setTimeout(() => {
  //         if()
  //     },1500)
  //   });
  // }

}
