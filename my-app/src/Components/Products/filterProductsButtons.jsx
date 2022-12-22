import React from 'react'
import { Box, Checkbox, Heading, Show, Stack, UnorderedList } from '@chakra-ui/react'

const FilterProductsButtons = ({ onClose, filtMen, filtWomen,filtBoys,filtGirls, sizeS, sizeM,sizeL,sizeXL,sizeXXL, colorBlue, colorRed, colorPink, colorBlack , colorGreen,colorYellow,setData }) => {

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
  const filterBoys = (e) => {
    if (e.target.checked) {
      console.log('filterBoys')
      filtBoys()
      // return true
    } else {
      setData([])
    }
  }
  const filterGirls = (e) => {
    if (e.target.checked) {
      filtGirls()
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
  const filtersizeL = (e) => {
    if (e.target.checked) {
      sizeL()
      // return true
    } else {
      setData([])
    }
  }
  const filtersizeXL = (e) => {
    if (e.target.checked) {
      sizeXL()
      // return true
    } else {
      setData([])
    }
  }
  const filtersizeXXL = (e) => {
    if (e.target.checked) {
      sizeXXL()
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
  const colorBl = (e) => {
    if (e.target.checked) {
      colorBlack()
      // return true
    } else {
      setData([])
    }
  }
  const colorG = (e) => {
    if (e.target.checked) {
      colorGreen()
      // return true
    } else {
      setData([])
    }
  }
  const colorY = (e) => {
    if (e.target.checked) {
      colorYellow()
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
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filterBoys}>Boys</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filterGirls}>Girls</Checkbox>

        </Box><hr />

        <Heading textAlign="left" pl={2} size='sm' marginTop="5px">Size</Heading>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeS} >S</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeM} >M</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeL}>L</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeXL}>XL</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={filtersizeXXL}>XXL</Checkbox>

        </Box>
        <hr />

        <Heading textAlign="left" pl={2} size='sm' marginTop="5px">Colors</Heading>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorB} >Blue</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorR} >Red</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorP} >Pink</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorBl}>Black</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorG}>Green</Checkbox>
          <Checkbox pl="6" size='sm' colorScheme='green' onChange={colorY}>yellow</Checkbox>


        </Box>

      </Stack>





  )
}

export default FilterProductsButtons