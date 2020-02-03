
export interface Request {
    path: string,
    headers?: { [key: string]: any; },
    body?: { [key: string]: any; }
}