import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Funcionarios {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    salario: number;

    @Column()
    local_de_trabalho: string;

    @Column()
    data_contratacao: Date;

    @Column()
    genero: string;

    @Column()
    data_nascimento: Date;
}
