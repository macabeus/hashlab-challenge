/* tslint:disable:no-console */

import dynamo from './dynamo'

console.log('Starting seeds...')

const createProductsTable = async () => {
  console.log('Creating products table...')

  const params: AWS.DynamoDB.CreateTableInput = {
    TableName: 'Products',
    KeySchema: [
      {
        AttributeName: 'Id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'Id',
        AttributeType: 'N',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  }

  return new Promise((resolve, reject) => {
    dynamo.createTable(params, (error, data) => {
      if (error) {
        return reject(error)
      }

      resolve(data)
    })
  })
}

const createUsersTable = async () => {
  console.log('Creating users table...')

  const params: AWS.DynamoDB.CreateTableInput = {
    TableName: 'Users',
    KeySchema: [
      {
        AttributeName: 'Id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'Id',
        AttributeType: 'N',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  }

  return new Promise((resolve, reject) => {
    dynamo.createTable(params, (error, data) => {
      if (error) {
        return reject(error)
      }

      resolve(data)
    })
  })
}

const populateProducts = async () => {
  console.log('Populating products...')

  const params: AWS.DynamoDB.BatchWriteItemInput = {
    RequestItems: {
      Products: [
        {
          PutRequest: {
            Item: {
              Id: { N: '1' },
              Title: { S: 'Bola' },
              Description: { S: 'Esfera chutavel.' },
              Price: { N: '100' },
            },
          },
        },
        {
          PutRequest: {
            Item: {
              Id: { N: '2' },
              Title: { S: 'Pirulito' },
              Description: { S: 'Tipo o do quico.' },
              Price: { N: '125' },
            },
          },
        },
        {
          PutRequest: {
            Item: {
              Id: { N: '3' },
              Title: { S: 'Karaoke' },
              Description: { S: 'Direto da Liberdade.' },
              Price: { N: '5000' },
            },
          },
        },
      ],
    },
  }

  return new Promise((resolve, reject) => {
    dynamo.batchWriteItem(params, (error, data) => {
      if (error) {
        return reject(error)
      }

      resolve(data)
    })
  })
}

const populateUsers = async () => {
  console.log('Populating users...')

  const params: AWS.DynamoDB.BatchWriteItemInput = {
    RequestItems: {
      Users: [
        {
          PutRequest: {
            Item: {
              Id: { N: '1' },
              FirstName: { S: 'Macabeus' },
              LastName: { S: 'Aquino' },
              DateOfBirth: { S: '1996-06-01' },
            },
          },
        },
        {
          PutRequest: {
            Item: {
              Id: { N: '2' },
              FirstName: { S: 'Marco' },
              LastName: { S: 'Worms' },
              DateOfBirth: { S: '1993-08-04' },
            },
          },
        },
        {
          PutRequest: {
            Item: {
              Id: { N: '3' },
              FirstName: { S: 'Mateus' },
              LastName: { S: 'Moog' },
              DateOfBirth: { S: '1991-01-14' },
            },
          },
        },
      ],
    },
  }

  return new Promise((resolve, reject) => {
    dynamo.batchWriteItem(params, (error, data) => {
      if (error) {
        return reject(error)
      }

      resolve(data)
    })
  })
}

createProductsTable()
  .then(() => createUsersTable())
  .then(() => populateProducts())
  .then(() => populateUsers())
  .catch(e => {
    console.log('Fatal Error!!')
    console.log(e)
  })
