import { Paper } from '../../entities/Paper';
import { Frame } from '../../entities/Frame';
import { Order } from '../../entities/Order';
import { OrderDatabase } from '../../../data/OrderDatabase';

export class CreateOrder {
    private orderDatabase: OrderDatabase;
    constructor() {
        this.orderDatabase = new OrderDatabase;
    }
    async execute(order: OrderInput): Promise<OrderOutput> {
        const paper = new Paper(order.paper.imageUrl, order.paper.size, order.paper.type);
        if (order.frame) {
            const frame = new Frame(order.frame.color, order.frame.type, order.frame.borderSize);
            const newOrder = new Order(paper, frame);
            await this.orderDatabase.insertOrder(newOrder);
            return {
                printPrice: newOrder.calculatePaperPrice(),
                framePrice: newOrder.calculateFramePrice(),
                totalPrice: newOrder.calculateTotalPrice(),
                message: "Obrigado!"
            }

        }
        else {
            const newOrderWithoutFrame = new Order(paper);
            await this.orderDatabase.insertOrder(newOrderWithoutFrame);
            return {
                printPrice: newOrderWithoutFrame.calculatePaperPrice(),
                framePrice: newOrderWithoutFrame.calculateFramePrice(),
                totalPrice: newOrderWithoutFrame.calculateTotalPrice(),
                message: "Obrigado!"
            }

        }

    }
}

export interface OrderInput {
    paper: {
        imageUrl: string
        size: string
        type: string
    }
    frame?: {
        type: string
        borderSize: string
        color: string
    }

}

export interface OrderOutput {
    printPrice: number
    framePrice: number
    totalPrice: number
    message: string
}
