import knex from 'knex'
import { Order } from '../business/entities/Order'

interface OrderModel {
    id: string
    name: string
    email: string
    print_size: string
    print_type: string
    frame_type: string
    frame_border_size: string
    frame_color: string
    order_date: Date
    image_url: string
}

export class OrderDatabase {
    private connection: knex

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'daniel',
                password: '0b741a51df3eb52305629b5c97960c31',
                database: 'daniel'
            }
        })

    }

    async insertOrder(order: Order): Promise<void> {
        const databaseModel: OrderModel = {
            id: order.getId(),
            name: order.getUsername(),
            email: order.getEmail(),
            print_size: order.getPrintSize(),
            print_type: order.getPrintPaperType(),
            frame_type: order.getFrameType(),
            frame_border_size: order.getFrameBorderSize(),
            frame_color: order.getFrameColor(),
            order_date: new Date(),
            image_url: order.getImageUrl()
        }
        await this.connection('orders').insert(databaseModel);
    }
}
