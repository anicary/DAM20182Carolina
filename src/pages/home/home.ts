import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";
import { UserPage } from "../userPage/userPage";
import { ApiRest } from "../../services/apirest";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: string;
  private password: string;
  nombre :any;
  photo:any;
  private credentials = {
    user: '',
    password: ''
  };
 
  constructor(public navCtrl: NavController, public apirest: ApiRest) {
    //this.credentials.user="Israel";
    //this.credentials.password ="12345";
    this.apirest.getUsers();
  }

  goToOtherPage(): void {
    console.log('Ir hacia otra página');
    console.log(this.credentials.user);
    console.log(this.credentials.password);
    console.log(this.apirest.users);
    let isUser = false;
    this.apirest.users.forEach(element => { 
      if (this.credentials.user === element.usuario
        && this.credentials.password === element.password
      ) {
        alert("válido");
        isUser = true;
        if (element.role == "admin") {
          this.navCtrl.push(OtherPage,{
           nombre:element.usuario,
           photo:element.photo
          });
        } else {
          this.navCtrl.push(UserPage,{
            nombre:element.usuario,
            photo:element.photo
          });
        }
      }
    });
    if (!isUser) {
      alert("Error invalido");
    }
  }



  ionViewDidLoad() {
    console.log('Enter on Page');
  }

}