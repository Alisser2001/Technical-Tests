def saleEntity(sale) -> dict:
    return {
        "id": str(sale["_id"]),
        "store": sale["store"],
        "date": sale["date"],
        "product": sale["product"],
        "amount": sale["amount"],
        "price": sale["price"],
        "total": sale["total"]
    }

def salesEntity(sales) -> list:
    return [saleEntity(sale) for sale in sales]