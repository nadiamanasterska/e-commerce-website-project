from functools import lru_cache

from .schema import Order

OrdersStorageType = dict[int, Order]

ORDERS: OrdersStorageType = {}


@lru_cache(maxsize=1)
def get_orders_storage() -> OrdersStorageType:
    return ORDERS
