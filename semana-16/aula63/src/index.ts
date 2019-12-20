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
    password: process.env.SENHA_BANCO,
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
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});

app.put('/editNickname/:id', async (req: Request, res: Response) => {
  const newNickname = req.body.nickname;
  try {
    const query = connection('users').where('id', '=', req.params.id).update({ nickname: newNickname });
    const result = await query;
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});

app.delete('/deleteUser/:id', async (req: Request, res: Response) => {
  try {
    const query = connection('users').where('id', '=', req.params.id).del();
    const result = await query;
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});

app.get('/user/', async (req: Request, res: Response) => {
  const name = req.query.name;
  const id = req.query.id;
  if (id || name) {
    if (id) {
      try {
        const query = connection('users').select().where('id', '=', id);
        const result = await query;
        res.send(result[0]);
      } catch (err) {
        console.log(err);
        res.sendStatus(500).end();
      }
    }
    else {
      try {
        const query = connection('users').select().where('name', '=', name);
        const result = await query;
        console.log(result);
        res.send(result[0]);
      } catch (err) {
        console.log(err);
        res.sendStatus(500).end();
      }
    }
  }
  res.sendStatus(400).end();
});

app.get('/allUsers/', async (req: Request, res: Response) => {
  const order = req.query.order ? `order by name` : ``;
  const age = req.query.age ? `where year(CURDATE()) - year(birthdate) = ${req.query.age}` : ``;
  console.log(req.query);
  try {
    const query = connection.raw(`SELECT * FROM users ${age} ${order}`);
    const result = await query;
    res.send(result[0]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(400).end();
});

app.post('/createTask', async (req: Request, res: Response) => {
  const newTask = { ...req.body };
  try {
    const query = connection('tasks').insert(newTask);
    const result = await query;
    console.log(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});
app.put('/editTask/:id', async (req: Request, res: Response) => {
  const newDesc = req.body.description;
  const newDate = req.body.deadline;
  try {
    const query = connection('tasks').where('id', '=', req.params.id).update({ description: newDesc, deadline: newDate });
    const result = await query;
    console.log(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});
app.post('/addAssignee', async (req: Request, res: Response) => {
  const task_id = req.body.task_id;
  const task_assignee = req.body.task_assignee;
  try {
    const query = connection('tasks_assignees').insert({ task_id, task_assignee });
    const result = await query;
    console.log(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});
app.delete('/removeAssignee', async (req: Request, res: Response) => {
  const task_id = req.body.task_id;
  const task_assignee = req.body.task_assignee;
  try {
    const query = connection('tasks_assignees').where('task_id', '=', task_id).andWhere('task_assignee', '=', task_assignee).del();
    const result = await query;
    console.log(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
  res.sendStatus(200).end();
});

app.get('/allTasksByOwner/:id', async (req: Request, res: Response) => {
  const date = req.query.date ? `and t.deadline=${req.query.date}` : ``;
  try {
    const tasks = connection.raw(`
    SELECT t.id, t.description, t.deadline, u.id as owner_id, u.name as owner_name, u.nickname as owner_nickname, null as assignees 
    FROM tasks t
    JOIN users u ON u.id = t.task_owner
    WHERE u.id=${req.params.id} ${date}`);
    const tasksResult = await tasks;

    const assignees = connection.raw(`
    SELECT t.id as task_id,ta.task_assignee as assignee_id,u.name as assignee_name
    FROM tasks t
    JOIN users task_owner ON task_owner.id = t.task_owner
    JOIN tasks_assignees ta ON ta.task_id = t.id
    JOIN users u ON u.id = ta.task_assignee
    WHERE task_owner.id = ${req.params.id} ${date}`);
    const assigneeResult = await assignees;

    const allAssignees = [...assigneeResult[0]];
    const allTasks = [...tasksResult[0]].map(task => {
      const assigneeList = allAssignees.filter(assignee => assignee.task_id == task.id);
      return { ...task, assignees: assigneeList }
    });

    res.send(allTasks);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
});

app.get('/allTasksByAssignee/:id', async (req: Request, res: Response) => {
  const date = req.query.date ? `and t.deadline=${req.query.date}` : ``;
  try {
    const tasks = connection.raw(`
    SELECT t.id, t.description, t.deadline, owners.id as owner_id, owners.name as owner_name, owners.nickname as owner_nickname, null as assignees 
    FROM tasks t
    JOIN tasks_assignees ta on ta.task_id = t.id
    JOIN users assignees ON assignees.id = ta.task_assignee
    JOIN users owners ON owners.id = t.task_owner
    WHERE assignees.id=${req.params.id} ${date}`);
    const tasksResult = await tasks;

    const assignees = connection.raw(`
    SELECT ta.task_id as task_id,ta.task_assignee as assignee_id,u.name as assignee_name
    FROM tasks_assignees ta
    JOIN users u ON u.id = ta.task_assignee
    JOIN tasks t ON t.id = ta.task_id
    WHERE ta.task_id IN (SELECT task_id FROM tasks_assignees t WHERE t.task_assignee = ${req.params.id}) ${date}`);
    const assigneeResult = await assignees;

    const allAssignees = [...assigneeResult[0]];
    const allTasks = [...tasksResult[0]].map(task => {
      const assigneeList = allAssignees.filter(assignee => assignee.task_id == task.id);
      return { ...task, assignees: assigneeList }
    });

    res.send(allTasks);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
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
