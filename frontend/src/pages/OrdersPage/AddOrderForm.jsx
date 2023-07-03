import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Form } from "react-router-dom";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'



const AddOrderForm = ({onClick}) => {

  const toast = useToast()
  const [orderNumber, setOrderNumber] = useState("");
  const [orderCustomer, setOrderCustomer] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    onClick(orderNumber, orderCustomer);
    setOrderNumber("");
    setOrderCustomer("");  
  };

  return (  
    <Form onSubmit={onSubmitHandler} >
    <Input
      placeholder="Order Number"
      value={orderNumber}
      onChange={(e) => setOrderNumber(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
    <Input
      placeholder="Order Customer"
      value={orderCustomer}
      onChange={(e) => setOrderCustomer(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
        
    <Button colorScheme='whatsapp' variant='outline' type="submit" onClick={() =>
      toast({
        title: 'Order added.',
        description: "We've added an order for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      }>Add</Button>
  </Form>
  );
}
 
export default AddOrderForm;