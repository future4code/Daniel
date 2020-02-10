import { v4 } from 'uuid'
import { IdGateway } from '../../business/gateway/IdGateway';

export class UuidV4 implements IdGateway {
    generate() {
        return v4();
    }
}