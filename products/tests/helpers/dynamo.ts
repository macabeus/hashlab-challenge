const dynamoProducts: any = {
  scan: (query, callback) => {
    callback(null, {
      Items: [
        {
          Title: { S: 'Bola' },
          Id: { N: '1' },
          Description: { S: 'Esfera chutavel.' },
          Price: { N: '100' },
        },
      ],
    })
  },
}

const dynamoFail: any = {
  scan: (query, callback) => {
    callback('error', null)
  },
}

export {
  dynamoProducts,
  dynamoFail,
}
