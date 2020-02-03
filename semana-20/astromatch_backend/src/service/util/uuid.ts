import { v4 } from 'uuid'
import { IdGateway } from '../../business/gateways/IdGateway';

export class Uuid implements IdGateway {
    generate() {
        return v4();
    }
} 