/* @flow */
/* Flow declarations for restify requests and responses */
declare class Request {
  method: String;
  body: Object;
  query: Object;
}

declare class Response {
  status: (code: Number) => Response;
  set: (field: String, value: String) => Response;
  send: (body: String) => void;
}
