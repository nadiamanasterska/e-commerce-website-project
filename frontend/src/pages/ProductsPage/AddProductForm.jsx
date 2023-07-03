import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Form } from "react-router-dom";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'
import { onClick } from "react";


const AddProductForm = ({ onClick }) => {

  const toast = useToast()
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("")
  
  const onSubmitHandler = (event) => {
    event.preventDefault();

    onClick(productName, productPrice);
    setProductName("");
    setProductPrice("");
  };

  return ( 
    <Form onSubmit={onSubmitHandler} >
    <Input
      placeholder="Product Name"
      value={productName}
      onChange={(e) => setProductName(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
    <Input
      placeholder="Product Price"
      value={productPrice}
      onChange={(e) => setProductPrice(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
        
    <Button colorScheme='whatsapp' variant='outline' type="submit" onClick={() =>
      toast({
        title: 'Product added.',
        description: "We've added a product for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      }>Add</Button>
  </Form>
   );
}
 
export default AddProductForm;