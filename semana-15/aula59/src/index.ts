import { CreatePostHandler } from './Post';
import moment = require('moment');


const postCreator = new CreatePostHandler();

postCreator.execute("Dan","%minusculo");

postCreator.execute("Dan","&maiusculo");

postCreator.execute("Dan","normal");