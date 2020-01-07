import { Paper } from '../../entities/Paper';
import { Frame } from '../../entities/Frame';
import { Order } from '../../entities/Order';

export class SimulatePrice {
    execute(order: SimulatePriceInput): SimulatePriceOutput {
        const paper = new Paper(order.paper.imageUrl, order.paper.size, order.paper.type);
        console.log(order);
        if (order.frame) {
            const frame = new Frame(order.frame.color, order.frame.type, order.frame.borderSize);
            const simulatedOrder = new Order(paper, frame);
            return {
                printPrice: simulatedOrder.calculatePaperPrice(),
                framePrice: simulatedOrder.calculateFramePrice(),
                totalPrice: simulatedOrder.calculateTotalPrice()
            }

        }
        else {
            const simulatedOrderWithoutFrame = new Order(paper);
            return {
                printPrice: simulatedOrderWithoutFrame.calculatePaperPrice(),
                framePrice: simulatedOrderWithoutFrame.calculateFramePrice(),
                totalPrice: simulatedOrderWithoutFrame.calculateTotalPrice()
            }
        }


    }
}

export interface SimulatePriceInput {
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

export interface SimulatePriceOutput {
    printPrice: number
    framePrice: number
    totalPrice: number
}
