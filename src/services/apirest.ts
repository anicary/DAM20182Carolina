import {Injectable} from "@angular/core"; //desde cualquier clase se pueden hacer peticiones
import {Http} from "@angular/http"

@Injectable()
export class ApiRest{
    //private http:any;
    public users:any;
//recibe el parametro y crea el atributo
    constructor(private http:Http){
 
    }

    getUsers():void{
        //this.http.get("http://127.0.0.1:8080/users.json")
        this.http.get("http://127.0.0.1:8080/Unidad2/restServer/users.json")
        
        //hace la peticion y queda en espera de respuesta
        .subscribe(
            (res) => { //Todo Ok 
                this.users = res.json();
                console.log(this.users);
            },
            function(err) { //Error
                console.log(err);
            }
        );
    }    
}