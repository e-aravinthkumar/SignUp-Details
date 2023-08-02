import { Injectable } from '@angular/core';
import { SignUpDetail } from './interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  signupDetails: SignUpDetail[] = []
  signupIdCounter: number = 1;
  constructor() { }

  addSignupDetail(value: object) {
    const signupDetail = value as SignUpDetail;
    signupDetail.id = this.signupIdCounter++;
    this.signupDetails.push(signupDetail);
  }

  getSignupDetails(){
    return this.signupDetails
  }

  updateSignupDetail(id:number, Value: object){
    const updatedValue = Value as SignUpDetail
    const index =  this.signupDetails.findIndex((signupDetail: SignUpDetail)=> signupDetail.id === id)
    if(index !== -1){
      this.signupDetails[index] = {...updatedValue, id} as SignUpDetail
    }
  }

  deleteSignup(id: number){
   const index = this.signupDetails.findIndex((signupDetail: SignUpDetail)=> signupDetail.id === id)
   if(index !== -1){
    this.signupDetails.splice(index, 1);
   }
  }

}
