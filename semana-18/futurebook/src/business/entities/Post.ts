export class Post {

    constructor(
        private id: string,
        private photoUrl: string,
        private description: string,
        private creationDate: Date,
        private type: string,
        private ownerId:string
    ) { }
    getOwnerId(): string {
        return this.ownerId;
    }
    getType(): string {
        return this.type
    }
    getCreationDate(): Date {
        return this.creationDate;
    }
    getDescription(): string {
        return this.description;
    }
    getPhotoUrl(): string {
        return this.photoUrl;
    }
    getId(): string {
        return this.id;
    }
}

export enum PostTypes {
    EVENT = "EVENT",
    NORMAL = "NORMAL"
}