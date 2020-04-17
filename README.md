<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Challenge 05: First Node.js project
</h3>

## :rocket: About the challenge

Implement an application to store finantial income and outcome transactions

**[Full challenge description](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs)**

### Application routes

- **`POST /transactions`**: Store a transaction. The request body contains `title`, `value`, and `type`. There are only two types -`income` and `outcome`. Save the transaction in the following format:
```json
{
  "id": "uuid",
  "title": "Salary",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: Return all stored transactions and a balance containing the total available credit, total income, and total outcome. Return a json in the following format:
```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salary",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freelance",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Water Bill",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Gaming Chair",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

### Setup

```shell
# Clone this repository
$ git clone git@github.com:franciscoescastro/first-nodejs-project-gostack.git

# Go into the repository
$ cd first-nodejs-project-gostack.git

# Install dependencies
$ yarn install

# Run tests
$ yarn test

# Run server on dev mode

$ yarn dev:server
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
