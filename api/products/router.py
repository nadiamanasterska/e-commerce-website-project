from fastapi import APIRouter, HTTPException, Query

from .storage import get_products_storage
from .schema import ProductCreateSchema, Product, ProductUpdateSchema

router = APIRouter()

PRODUCT_STORAGE = get_products_storage()


@router.get("/")
async def get_products() -> list[Product]:
    return list(get_products_storage().values())

# TO DO


@router.get("/{product_id}")
async def get_product(product_id: int) -> Product:
    try:
        return PRODUCT_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Product with ID={product_id} does not exist."
        )

# TO DO


@router.post("/")
async def create_product(product: ProductCreateSchema) -> Product:
    id = len(PRODUCT_STORAGE) + 1
    new_product = Product(**product.dict(), id=id)
    PRODUCT_STORAGE[id] = new_product
    return new_product


@router.delete("/{product_id}")
async def delete_product(product_id: int) -> None:
    try:
        del PRODUCT_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Product with ID={product_id} does not exist."
        )


@router.patch("/{product_id}")
async def update_customer(product_id: int, updated_product: ProductUpdateSchema) -> Product:
    try:
        PRODUCT_STORAGE[product_id] = Product(
            **(
                PRODUCT_STORAGE[product_id].dict()
                | updated_product.dict(exclude_unset=True)
            )
        )
        return PRODUCT_STORAGE[product_id]
    except KeyError:
        raise HTTPException(
            status_code=404, detail=f"Product with ID={product_id} does not exist."
        )
