import { Component } from "@angular/core";
import { NavController,NavParams} from "ionic-angular";
import { DeportesRest } from "../../services/deportesrest";

@Component({
    selector:'user-page',
    templateUrl:'userPage.html'
})
export class UserPage {
    deportes:any;
    nombre_user:any;
    photo_user:any;
    constructor(
        public navCtrl: NavController, 
        public deportesrest:DeportesRest,
        public navParams:NavParams
        ) {
            this.deportesrest.getDeportes(); 
            this.nombre_user=navParams.get("nombre");
            this.photo_user=navParams.get("photo");
        }

    goBack():void {
        this.navCtrl.pop();
    }

    onPageWillEnter() {
        console.log('Enter on Page');
    }
}