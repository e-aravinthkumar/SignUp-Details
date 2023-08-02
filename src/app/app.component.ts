import { Component } from '@angular/core';
import { SignUpServiceService } from './sign-up-service.service';
import { SignUpDetail } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formName: string = 'Sign Up'
  signUpDetailsList?: SignUpDetail[]
  currentSignUpDetails?: SignUpDetail
  constructor(private signupService: SignUpServiceService){
  }
  
  ngOnInit(){
    this.signUpDetailsList = this.signupService.getSignupDetails()
  }

  onSubmit(value: object){
    if(this.formName === 'Sign Up'){
      this.signupService.addSignupDetail(value)
    }
    else if(this.formName==='Edit Sign Up' && this.currentSignUpDetails){
      this.signupService.updateSignupDetail(this.currentSignUpDetails?.id, value)
      this.formName='Sign Up'
    }
  }

  onDelete(id:number){
    if(this.currentSignUpDetails){
      this.signupService.deleteSignup(id)
      this.signUpDetailsList = this.signupService.getSignupDetails()
    }

  }

  onEdit(signupDetail: SignUpDetail){
    this.formName = 'Edit Sign Up'     
  this.currentSignUpDetails = signupDetail
  }


  
}
