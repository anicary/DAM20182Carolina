import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class DeportesRest {
    public deportes: any;

    constructor(private http: Http) {

    }
    getDeportes(): void {
        this.http.get("http://127.0.0.1:8080/Unidad2/restServer/deportes.json")
            .subscribe((res) => {
                this.deportes = res.json();
                console.log(this.deportes);
            },
                (err) => {
                    console.log(err);
                });

    }
}