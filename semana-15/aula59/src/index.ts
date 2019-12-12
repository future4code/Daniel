import { CreatePostHandler, PostReaderImp } from './Post';
import moment = require('moment');
import { ErrorLogger } from './Error';
import { ErrorPrinter } from './ErrorPrinter';


const postCreator = new CreatePostHandler();
const errorLogger = new ErrorLogger()
postCreator.execute("","%",errorLogger);

postCreator.execute("","&",errorLogger);


// const postReader = new PostReaderImp();

// postReader.read();