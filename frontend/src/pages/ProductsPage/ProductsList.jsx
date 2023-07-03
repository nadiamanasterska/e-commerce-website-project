import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

const ProductList = ({products, onProductDeleteHandler}) => {
  
  const [data, setData] = useState(products); 

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Product List</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
            {data.map((item) => 
             (
              <Box display="flex" alignItems="center" justifyContent="space-between" key={item.id}>
                <div>
                  <Heading size='xs' textTransform='uppercase'>
                    {item.product_name}
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Price: {item.product_price} PLN
                  </Text>
                </div>
                <IconButton
                  colorScheme='whatsapp'
                  variant='outline'
                  aria-label='Call Segun'
                  fontSize='20px'
                  icon={<DeleteIcon />}
                  onClick={() => onProductDeleteHandler(item.id)}
            />
              </Box>
            )
          )}
          
      </Stack>
    </CardBody>
  </Card> );
}
 
export default ProductList;