import { Request, Response } from 'express';
import { SimulatePriceInput, SimulatePrice } from '../business/usercases/simulatePrice/SimulatePrice';

export async function SimulatePriceEndpoint(req: Request, res: Response) {
    try {
        const useCase = new SimulatePrice();
        let result;
        if (req.body.frame) {
            const simulateOrderWithFrame: SimulatePriceInput = {
                paper: {
                    imageUrl: req.body.paper.imageUrl,
                    size: req.body.paper.size,
                    type: req.body.paper.type,
                },
                frame: {
                    type: req.body.frame.type,
                    borderSize: req.body.frame.borderSize,
                    color: req.body.frame.color
                }
            };
            result = useCase.execute(simulateOrderWithFrame);
            res.send({
                printPrice: formatNumberToBRL(result.printPrice),
                framePrice: formatNumberToBRL(result.framePrice),
                totalPrice: formatNumberToBRL(result.totalPrice),
            });
        }
        else {
            const simulatedOrder: SimulatePriceInput = {
                paper: {
                    imageUrl: req.body.paper.imageUrl,
                    size: req.body.paper.size,
                    type: req.body.paper.type,
                }
            };

            result = useCase.execute(simulatedOrder);
            res.send({
                printPrice: formatNumberToBRL(result.printPrice),
                framePrice: formatNumberToBRL(result.framePrice),
                totalPrice: formatNumberToBRL(result.totalPrice),
            });
        }

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}

function formatNumberToBRL(numero: number): string {
    return `R$${numero.toFixed(2)}`
}