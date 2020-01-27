import "reflect-metadata";
import {createConnection} from "typeorm";
import { Funcionarios } from './entity/funcionario';


createConnection().then(async connection => {

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Funcionarios);
    console.log("Loaded users: ", users);
}).catch(error => console.log(error));
