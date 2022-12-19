import React from 'react'
import { Box, Checkbox, Heading, Show, Stack, UnorderedList } from '@chakra-ui/react'

const FilterProductsButtons = ({ onClose, filtMen, filtWomen, sizeS, sizeM, colorBlue, colorRed, colorPink, setData }) => {

  const filterMen = (e) => {
    if (e.target.checked) {
      filtMen()
      //   return true
    } else {
      setData([])
    }

  }

  const filterWomen = (e) => {
    if (e.target.checked) {
      filtWomen()
      // return true
    } else {
      setData([])
    }
  }
  const filtersizeS = (e) => {
    if (e.target.checked) {
      sizeS()
      // return true
    } else {
      setData([])
    }
  }
  const filtersizeM = (e) => {
    if (e.target.checked) {
      sizeM()
      // return true
    } else {
      setData([])
    }
  }
  const colorB = (e) => {
    if (e.target.checked) {
      colorBlue()
      // return true
    } else {
      setData([])
    }
  }
  const colorR = (e) => {
    if (e.target.checked) {
      colorRed()
      // return true
    } else {
      setData([])
    }
  }
  const colorP = (e) => {
    if (e.target.checked) {
      colorPink()
      // return true
    } else {
      setData([])
    }
  }


  return (

      <Stack w={"100%"} fontSize="14px" pl="10px" pt="2" onClick={onClose}>

        <Heading textAlign="left" pl={2} size='lg' letterSpacing="2px">Filter</Heading>

        <Heading textAlign="left" pl={2} size='sm'>Gender</Heading>

        <Box display="flex" flexDirection="column"   justifyContent="flex-start" marginTop="10px">

          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filterMen} >Mens</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filterWomen}>Womens</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >Boys</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >Girls</Checkbox>

        </Box><hr />

        <Heading textAlign="left" pl={2} size='sm' marginTop="5px">Size</Heading>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeS} >S</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeM} >M</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >L</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >XL</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >XXL</Checkbox>

        </Box>
        <hr />

        <Heading textAlign="left" pl={2} size='sm' marginTop="5px">Colors</Heading>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorB} >Blue</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorR} >Red</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorP} >Pink</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >Black</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >Green</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' >yellow</Checkbox>


        </Box>

      </Stack>





  )
}

export default FilterProductsButtons