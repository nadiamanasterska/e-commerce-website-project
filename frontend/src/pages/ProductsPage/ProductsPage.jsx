import { MainNav } from "@/components/MainNav";
import { UserNav } from "@/components/UserNav";
import { navigationLinks } from "@/config/navigationLinks";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductsList";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { createProducts, deleteProduct, fetchProducts } from "@/services/products";
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react'

const ProductsPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, [products]);

  const onAddProductHandler = async (productName, productPrice) => {
    await createProducts({ productName, productPrice });
  };

  const onProductDeleteHandler = async (id) => {
    await deleteProduct(id);
    fetchProducts().then(setProducts);
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex" style={{marginBottom: '60px'}}>
        <AddProductForm onClick={onAddProductHandler}/>
        </div>
         <ProductList products={products} onProductDeleteHandler={onProductDeleteHandler}/> 
      </div>
    </div>
  );
};
 
export default ProductsPage;