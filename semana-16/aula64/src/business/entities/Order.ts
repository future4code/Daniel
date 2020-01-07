import { Paper } from './Paper';
import { Frame, FrameBorderSizes } from './Frame';
import { User } from './User';


export class Order {
    private paper: Paper;
    private frame?: Frame;
    private user?: User;
    private id?: string;

    constructor(paper: Paper, frame?: Frame, user?: User, id?: string) {
        this.paper = paper;
        this.user = user;
        if (frame) {
            this.frame = frame;
        }
    }
    public getId() {
        if (this.id) {
            return this.id;
        }
        return "";
    }
    public getUsername() {
        if (this.user) {
            return this.user.getName();
        }
        return "";
    }
    public getEmail() {
        if (this.user) {
            return this.user.getEmail();
        }
        return "";
    }
    public getPrintSize() {
        return this.paper.getSize();
    }
    public getImageUrl() {
        return this.paper.getImageUrl();
    }
    public getPrintPaperType() {
        return this.paper.getType();
    }
    public getFrameType() {
        if (this.frame) {
            return this.frame.getType();
        }
        return "";
    }
    public getFrameBorderSize() {
        if (this.frame) {
            return this.frame.getBorderSize();
        }
        return "";
    }
    public getFrameColor() {
        if (this.frame) {
            return this.frame.getColor();
        }
        return "";
    }
    public calculatePaperPrice() {
        return this.paper.calculatePrice();
    }

    public calculateFramePrice() {
        if (this.frame) {
            return this.frame.calculatePrice();
        }
        return 0
    }
    public calculateBorderPrice() {
        if (this.frame) {
            let borderPrice = this.calculateFramePrice();
            switch (this.frame.getBorderSize()) {
                case FrameBorderSizes.PEQUENA:
                    borderPrice *= 1.25;
                    break;
                case FrameBorderSizes.MEDIA:
                    borderPrice *= 1.50;
                    break;
                case FrameBorderSizes.GRANDE:
                    borderPrice *= 1.75;
                    break;
                default:
                    borderPrice = 0;
                    break;
            }
            return borderPrice;
        }
        return 0
    }

    public calculateTotalPrice() {
        return this.calculatePaperPrice() + this.calculateFramePrice() + this.calculateBorderPrice();
    }
}