import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  isLoggedin: Boolean = false;

  constructor(private navCtrl: NavController){}

  ngOnInit(){
    this.isUserLoggedIn();
  }


  isUserLoggedIn = () => {
    let token = localStorage.getItem('auth-token');
    if(!token){
      this.navCtrl.navigateForward('login');
    }
  }
}
