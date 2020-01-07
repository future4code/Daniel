export class User {
    constructor(
        private name: string,
        private email: string
    ) { }

    public getName(){
        return this.name;
    }

    public getEmail(){
        return this.email;
    }
}