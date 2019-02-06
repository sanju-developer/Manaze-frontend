import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  LoginForm:FormGroup;
  change:Boolean = false;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) { }

  public ngOnInit() : void{
    this.LoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)] )
    })
  }

  public get f(){
    return this.LoginForm.controls;
  }

  login = () => {
    this.change = true;
    // If form is valid
    if(this.LoginForm.invalid){
      return;
    }else{
      if(this.LoginForm.value.email=="portal@portal.in" && this.LoginForm.value.password=="12345678"){
        localStorage.setItem('auth-token','asgdyga')
        this.navCtrl.navigateForward('home');
      }else{
        return;
      }
    }
  }

}
