from enum import Enum

from pydantic import BaseModel
from typing import Union


class ProductCreateSchema(BaseModel):
    product_name: str
    product_price: int

    class Config:
        schema_extra = {
            "example": {
                "product_name": "Paper",
                "product_price": 3,
            }
        }


class ProductUpdateSchema(BaseModel):
    product_name: Union[str, None] = None
    product_price: Union[int, None] = None

    class Config:
        schema_extra = {
            "example": {
                "product_name": "Paper",
                "product_price": 5,
            }
        }


class Product(ProductCreateSchema):
    id: int
