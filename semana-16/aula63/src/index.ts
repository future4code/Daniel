import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'daniel',
    password: '0b741a51df3eb52305629b5c97960c31',
    database: 'daniel'
  }
});

app.post('/createUser', async (req: Request, res: Response) => {
  const newUser = { ...req.body };
  try {
    const query = connection('users').insert(newUser);
    const result = await query;
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  res.status(200).end();
});

app.put('/editNickname/:id', async (req: Request, res: Response) => {
  const newNickname = req.body.nickname;
  try {
    const query = connection('users').where('id', '=', req.params.id).update({nickname: newNickname});
    const result = await query;
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
  res.status(200).end();
});

app.delete('/deleteUser/:id', async (req: Request, res: Response)=>{
  try{
    const query = connection('users').where('id','=',req.params.id).del();
    const result = await query;
  }catch(err){
    console.log(err);
    res.status(500).end();
  }
  res.status(200).end();
});

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
