import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'; 
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import { ProductCard } from '../components/ProductCard.jsx';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  
  useEffect(() => { 
    fetchProducts();
  },[fetchProducts]);
  console.log("products",products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30px"} fontWeight={"bold"} bgGradient={"linear(to-r, #7928CA, #FF0080)"} bgClip={"text"} textAlign={"center"}> Current Products </Text>
        //#7928CA, #FF0080

        <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10} w={"full"}>
          {products.map((product)=>(
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>


       {products.length===0 && ( < Text fontSize='x1' textAlign={"center"} fontWeight='bold' color='gray.500'>No products found, {" "}
        <Link to={"/create"}>
        <Text as='span' color='#FF0080' _hover={{textDecoration:"underline"}}>
          Add a product </Text></Link></Text>
)}
      </VStack>
    </Container>
  );
};

export default HomePage