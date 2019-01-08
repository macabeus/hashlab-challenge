def intermittent(intermittentFlag: bool, productId: int):
    if intermittentFlag and productId % 2 == 0:
        raise Exception('Intermittent error simulation')
