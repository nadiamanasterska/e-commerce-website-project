from fastapi import APIRouter, HTTPException, Query

from .storage import get_orders_storage
from .schema import OrderCreateSchema, Order, OrderUpdateSchema

router = APIRouter()

ORDER_STORAGE = get_orders_storage()


@router.get("/")
async def get_orders() -> list[Order]:
    return list(get_orders_storage().values())


@router.get("/{order_id}")
async def get_order(order_id: int) -> Order:
    try:
        return ORDER_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist."
        )


@router.post("/")
async def create_order(order: OrderCreateSchema) -> Order:
    id = len(ORDER_STORAGE) + 1
    new_order = Order(**order.dict(), id=id)
    ORDER_STORAGE[id] = new_order
    return new_order


@router.patch("/{order_id}")
async def update_order(order_id: int, updated_order: OrderUpdateSchema) -> Order:
    try:
        ORDER_STORAGE[order_id] = Order(
            **(
                ORDER_STORAGE[order_id].dict()
                | updated_order.dict(exclude_unset=True)
            )
        )
        return ORDER_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist."
        )


@router.delete("/{order_id}")
async def delete_order(order_id: int) -> None:
    try:
        del ORDER_STORAGE[order_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Order with ID={order_id} does not exist."
        )
