import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PlacesRest } from "../../services/placesrest";

@Component({
    selector: 'other-page',
    templateUrl: 'otherPage.html'
})
export class OtherPage {
nombre_user:any;
photo_user:any;
    constructor(
        public navCtrl: NavController,
        public placesrest: PlacesRest,
        public navParams: NavParams
    ) {
        this.nombre_user=navParams.get("nombre");
        this.photo_user=navParams.get("photo");
        this.placesrest.getPlaces();
    }

    goBack(): void {
        this.navCtrl.pop();
    }

    onPageWillEnter() {
        console.log('Enter on Page');
    }
}