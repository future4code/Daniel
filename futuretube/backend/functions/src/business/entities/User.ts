export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private photoUrl: string,
        private birthdate: Date
    ){}
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getBirthdate(): Date {
        return this.birthdate;
    }
    public getEmail(): string {
        return this.email;
    }
    public getPassword(): string {
        return this.password;
    }
    public getPhotoUrl(): string {
        return this.photoUrl;
    }
}