export class UserDetails {
    name!:string;
    surname!:string;
    phone!:number;
    email!:string;
    address!:string;
    education!:string;
    country!:string;
    state!:string;

    constructor(name:string,surname:string,phone:number,email:string,address:string,education:string,country:string,state:string){
        this.name=name;
        this.surname=surname;
        this.phone=phone;
        this.email=email;
        this.address=address;
        this.education=education;
        this.country=country;
        this.state=state;
    }

    
}
