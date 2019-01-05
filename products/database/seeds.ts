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

createProductsTable()
  .then(() => populateProducts())
  .catch(e => {
    console.log('Fatal Error!!')
    console.log(e)
  })
