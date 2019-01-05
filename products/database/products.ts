import * as AWS from 'aws-sdk'
import DynamoError from './dynamo_error'

interface IProduct {
  id: string
  title: string
  description: string
  price_in_cents: number
  discount: {
    pct: number
    value_in_cents: number
  }
}

const responseObjectBuilder = obj => {
  return {
    id: obj.Id.N,
    title: obj.Title.S,
    description: obj.Description.S,
    price_in_cents: Number(obj.Price.N),
    discount: {
      pct: 0,
      value_in_cents: 0,
    },
  }
}

const index: (dynamo: AWS.DynamoDB) => Promise<IProduct[]> = dynamo => {
  const query: AWS.DynamoDB.ScanInput = {
    TableName: 'Products',
  }

  return new Promise((resolve, reject) => {
    dynamo.scan(query, (error, data) => {
      if (error) {
        return reject(new DynamoError(error))
      }

      const response = data.Items.map(responseObjectBuilder)

      return resolve(response)
    })
  })
}

export { index }
