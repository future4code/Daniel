import { User } from "../entities/User";

export interface UserGateway {
    getUserRelation(input: UserGatewayRelationInput): Promise<boolean>;
    createUserRelation(input: UserGatewayRelationInput): Promise<void>;
    deleteUserRelation(input: UserGatewayRelationInput): Promise<void>;
    registerUser(user: User): Promise<void>;
    fetchUserByEmail(email: string): Promise<User>;
}

export interface UserGatewayRelationInput {
    userId: string,
    followedId: string
}