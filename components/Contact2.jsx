import { Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'

const Contact2 = () => {
  return (
    <div className='z-0'>
        <Container maxW='450px' mt={12}>
            <Heading>Contact</Heading>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    type="text" name="Fiance Name"
                />
            </FormControl>
        </Container>
    </div>
  )
}

export default Contact2