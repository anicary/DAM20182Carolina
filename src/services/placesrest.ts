import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class PlacesRest {
    public places: any;

    constructor(private http: Http) {
 
    }
    getPlaces(): void {
        this.http.get("http://127.0.0.1:8080/Unidad2/restServer/places.json")
            .subscribe((res) => {
                this.places = res.json();
                console.log(this.places);
            },
                (err) => {
                    console.log(err);
                });

    }
}