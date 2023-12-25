# RESTful API using Node.js and MongoDB
This API project has been made for to learn how Node.js and MongoDB work together. And also has been used MVC architecture pattern.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install dependencies. In the project directory;

```bash
npm install
```

## .env File Content
The content of the `.env` file is as follows:

```text
PORT=<Port Number>
MONGODB_URL=<Mongo DB URL>
DB_NAME=<Database Name>
CRYPT_SALTROUNDS=<Salt Round>
CRYPT_PREFIX=<Prefix>
TOKEN_SECRETKEY=<Secret Key>
```


## Usage

To run the project:

```bash
npm start
```

You can use [REST Client](https://github.com/Huachao/vscode-restclient) VSCode extension or [Postman](https://www.postman.com/) for api requests.

## To Do List
- [x] Error handler
- [x] Product category (for relational data)
- [x] API Authentication - JWT