import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Form } from "react-router-dom";
import { useState, onClick } from "react";
import { useToast } from '@chakra-ui/react'


const AddCustomerForm = ({ onClick }) => {
  const toast = useToast()
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");

  
  const onSubmitHandler = (event) => {
    event.preventDefault();

    onClick(name, surname, email, phoneNumber);
    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");

    
  };
  return (
    <Form onSubmit={onSubmitHandler} >
    <Input
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
    <Input
      placeholder="Surname"
      value={surname}
      onChange={(e) => setSurname(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
    <Input 
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
    <Input
      placeholder="Phone number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.currentTarget.value)}
      size='md'
      marginBottom='17px'
      />
        
    <Button colorScheme='whatsapp' variant='outline' type="submit" onClick={() =>
      toast({
        title: 'Customer added.',
        description: "We've added a customer for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      }>Add</Button>
  </Form>);
}
 
export default AddCustomerForm;