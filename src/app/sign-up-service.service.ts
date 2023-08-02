import { Injectable } from '@angular/core';
import { SignUpDetail } from './interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  signupDetails: SignUpDetail[] = []
  currentIndex: number = 0
  constructor() { }

  addSignupDetail(value: object){
    const signupDetail = value
    this.signupDetails.push({...signupDetail, id:this.currentIndex++} as SignUpDetail)
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
