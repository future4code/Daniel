export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: Date,
        private ownerID: string
    ) { }

    public getId() {
        return this.id;
    }
    public getTitle() {
        return this.title;
    }
    public getDescription() {
        return this.description;
    }
    public getCreationDate() {
        return this.creationDate;
    }
    public getOwnerId() {
        return this.ownerID;
    }
}