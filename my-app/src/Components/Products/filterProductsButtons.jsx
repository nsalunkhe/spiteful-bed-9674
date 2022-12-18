import React from 'react'
import { Box, Checkbox, Heading, Show } from '@chakra-ui/react'

const FilterProductsButtons = ({ filtMen, filtWomen, sizeS, sizeM, colorBlue, colorRed, colorPink, setData }) => {

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
 
     
        <Box width="15%"   >
          {/* backgroundColor="#f1f2f4" */}
          <Box position="Fixed" width="13%" backgroundColor="#f1f2f4" border="1px solid black"> <hr />
            <Heading textAlign="left" pl={2} size='md'>Gender</Heading>

            <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

              <Checkbox pl="6" size='md' colorScheme='green' onChange={filterMen} >Mens</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' onChange={filterWomen}>Womens</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Boys</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Girls</Checkbox>

            </Box><br /><hr />

            <Heading textAlign="left" pl={2} size='md' marginTop="5px">Size</Heading>
            <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

              <Checkbox pl="6" size='md' colorScheme='green' onChange={filtersizeS} >S</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' onChange={filtersizeM} >M</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >L</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >XL</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >XXL</Checkbox>

            </Box><br />
            <hr />

            <Heading textAlign="left" pl={2} size='md' marginTop="5px">Colors</Heading>
            <Box display="flex" flexDirection="column" justifyContent="flex-start" marginTop="10px">

              <Checkbox pl="6" size='md' colorScheme='green' onChange={colorB} >Blue</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' onChange={colorR} >Red</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' onChange={colorP} >Pink</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Black</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Green</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >yellow</Checkbox>


            </Box><br />
            <hr />


          </Box>
        </Box>
      
      


   
  )
}

export default FilterProductsButtons