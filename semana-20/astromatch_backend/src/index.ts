import { Request } from './presentation/base/Request';
import { userSignupEndpoint } from './presentation/endpoints/userSignupEndpoint';
import { Response } from './presentation/base/Response';
import { userAuthEndpoint } from './presentation/endpoints/userAuthEndpoint';

exports.handler = async (req: Request): Promise<Response> => {
  let response;

  switch (req.path) {
    case "/signup":
      response = userSignupEndpoint(req);
      break;
    case "/login":
      response = userAuthEndpoint(req);
      break;
    default:
      return {
        statusCode: 400,
        body: { message: 'Não existe esse endpoint!' },
      }
  };

  return response;
};