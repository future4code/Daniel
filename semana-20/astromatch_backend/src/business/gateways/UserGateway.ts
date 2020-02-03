import { User } from "../entities/User";

export interface UserGateway {
    fetchAllMatches(id: string): Promise<User[]>;
    deleteUserMatch(matchInput: UserGatewayMatchInput): Promise<void>;
    createUserMatch(matchInput: UserGatewayMatchInput): Promise<void>;
    verifyUserMatch(matchInput: UserGatewayMatchInput): Promise<boolean>;
    fetchAllUsers(): Promise<User[]>;
    updatePassword(id: string, newPassword: string): Promise<void>;
    fetchUserByEmail(email: string): Promise<User>;
    fetchUserById(id: string): Promise<User>;
    registerUser(user: User): Promise<void>;
}

export interface UserGatewayMatchInput {
    id: string,
    matchId: string
} 