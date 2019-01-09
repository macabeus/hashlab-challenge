interface IProduct {
  id: number
  title: string
  description: string
  price_in_cents: number
  discount: {
    pct: number
    value_in_cents: number
  }
}

export default IProduct
