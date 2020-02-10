export class Video{
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private ownerId: string,
        private url: string
    ){}

    public getId(): string {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getDescription(): string {
        return this.description;
    }
    public getOwnerId(): string {
        return this.ownerId;
    }
    public getUrl(): string {
        return this.url;
    }
}