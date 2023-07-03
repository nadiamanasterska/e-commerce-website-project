from enum import Enum

from pydantic import BaseModel
from typing import Union


class OrderCreateSchema(BaseModel):
    order_number: int
    order_customer: str

    class Config:
        schema_extra = {
            "example": {
                "order_number": 0000,
                "order_customer": "Piotr Lehmann",
            }
        }


class OrderUpdateSchema(BaseModel):
    order_number: Union[int, None] = None
    order_customer: Union[str, None] = None

    class Config:
        schema_extra = {
            "example": {
                "order_number": 0000,
                "order_customer": "Piotr Lehmann",
            }
        }


class Order(OrderCreateSchema):
    id: int
