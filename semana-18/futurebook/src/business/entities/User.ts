export class User {
    constructor(
        private id: string,
        private name: string,
        private password: string,
        private email: string,
    ) { }

    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public getPassword() {
        return this.password;
    }
    public getEmail() {
        return this.email;
    }
}