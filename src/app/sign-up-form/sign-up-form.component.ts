import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpDetail } from '../interface';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

  signupForm: FormGroup
  @Input() formName: string = '';
  @Output() submitEvent = new EventEmitter<SignUpDetail>()
  
  
  constructor(private fb: FormBuilder){
      this.signupForm = this.fb.group({
        name:['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        email:['', [Validators.required, Validators.email]],
        phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
     })
  }


  onSubmit(){
    if(this.signupForm.valid){
      this.submitEvent.emit(this.signupForm.value as SignUpDetail);
      this.signupForm.reset();
    }
  }

  @Input() set currentSignUpDetails(details: SignUpDetail | undefined) {
    if (details) {
      this.signupForm.patchValue(details);
    }
  }
}
