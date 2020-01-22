import knex from "knex";

export abstract class BaseDatabase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
            user: "daniel",
            password: "0b741a51df3eb52305629b5c97960c31",
            database: "daniel"
        }
    });
}
