import { React, useState } from "react";
import {
    Box,
    Text,
    Grid,
    Select,
    Input,
    Button,
    useBreakpointValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    CloseButton
} from "@chakra-ui/react";
import ModalDescripcion from "./ModalDescripcion";


const ModalInforme = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    //tamaños de modal
    const size = useBreakpointValue({ base: "sm", lg: "5xl", md: '2xl' });
    return (
        <>
            <Grid templateColumns={'2fr 1fr'}>
                <Box marginTop={'-50px'}>
                    <Text margin={'10px'} color={'gray.900'} fontSize={'20px'} >Información General</Text>
                    <Grid templateColumns={"repeat(3,1fr)"}>
                        <Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'} >Paciente</Text>
                                <Text >Amelia Amigo Jordan</Text>
                            </Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Fecha</Text>
                                <Text >15/03/1986</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Cedula de Identidad</Text>
                                <Text >26651254</Text>
                            </Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Medico Tratante</Text>
                                <Text >Jose Salmeron</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Telefono</Text>
                                <Text color={'gray.600'}>26651254</Text>
                            </Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Telefono</Text>
                                <Text >26565462</Text>
                            </Box>
                        </Box>
                    </Grid>
                    <Text margin={'10px'} fontSize={'20px'}>Información de estudio</Text>
                    <Grid templateColumns={"repeat(3,1fr)"}>
                        <Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Numero de estudio</Text>
                                <Text>B:aa-nnn</Text>
                            </Box>
                            <Box margin={'10px'} >
                                <Text fontSize={'17px'}>Tipo de muestra</Text>
                                <Text>Estomago</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>tipo de estudio</Text>
                                <Text>Biopsia</Text>
                            </Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Tipo de muestra 2</Text>
                                <Text>Estomago parte alta</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Patologo</Text>
                                <Text>Simon Peraza</Text>
                            </Box>
                            <Box margin={'10px'}>
                                <Text fontSize={'17px'}>Tipo de muestra 3</Text>
                                <Text>Estomago parte baja</Text>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid margin={'60px 10px 20px 10px'} templateColumns={'repeat(3,1fr)'} gap={'20px'}>
                        <Select color="gray.400" defaultValue="Informes anteriores">
                            <option hidden colorScheme="gray.400">Informes anteriores</option>
                            <option value=""></option>
                            <option value=""></option>
                        </Select>
                        <Select color="gray.400" defaultValue="Anexos">
                            <option hidden colorScheme="gray.400">Anexos</option>
                            <option value=""></option>
                            <option value=""></option>
                        </Select>
                        <Input
                            placeholder='Notas'
                            type="text"
                            name="notas"
                        />
                    </Grid>
                </Box>
                <Box marginTop={'-50%'}  height={'100%'}>
                    <Box height='80%' marginTop={'60%'} borderLeft={'solid #89bbcc'}>
                        <Button
                            margin={'10px'}
                            marginBottom={'30px'}
                            marginTop={'-20%'}
                            border={'solid 2px'}
                            color={'gray.400'}
                            borderColor={'gray.400'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'10px'}
                            onClick={toggleModal}>Registro de cambios</Button>
                        <Button
                            margin={'10px'}
                            border={'solid 2px'}
                            color={'#137798'}
                            borderColor={'#137798'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'20px'}
                            onClick={toggleModal}>Descripción microscópica</Button>
                        <Button
                            margin={'10px'}
                            border={'solid 2px'}
                            color={'#137798'}
                            borderColor={'#137798'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'20px'}
                            onClick={toggleModal}>Descripción microscópica</Button>
                        <Button
                            margin={'10px'}
                            border={'solid 2px'}
                            color={'#137798'}
                            borderColor={'#137798'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'20px'}
                            onClick={toggleModal}>Diagnóstico</Button>
                        <Button
                            margin={'10px'}
                            border={'solid 2px'}
                            color={'#137798'}
                            borderColor={'#137798'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'20px'}
                            onClick={toggleModal}>Notas</Button>
                        <Button
                            margin={'10px'}
                            border={'solid 2px'}
                            color={'#137798'}
                            borderColor={'#137798'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'20px'}
                            onClick={toggleModal}>Anexos</Button>
                        <Button
                            margin={'10px'}
                            border={'solid 2px'}
                            color={'#137798'}
                            borderColor={'#137798'}
                            w={'80%'}
                            background={'none'}
                            borderRadius={'20px'}
                            onClick={toggleModal}>Biblografía</Button>
                    </Box>
                </Box>
            </Grid>
            <Button
                marginBottom={{ lg: '-5%', md: '-8%', sm: '-10%' }}
                marginLeft={{ lg: '88%', md: '70%', sm: '77%' }}
                borderRadius={'20px'}
                bgColor={'#137797'}
                color='#ffff'>
                Procesar
            </Button>
            <Modal
                size={size}
                maxWidth='100%'
                isOpen={showModal}
                onClose={toggleModal}>
                <ModalOverlay />
                <ModalContent borderRadius={'20px'} bg="#ffff">
                    <ModalHeader>
                        <Button
                            borderRadius={'50%'}
                            colorScheme="blue"
                            width="40px"
                            height="40px"
                            marginLeft={'95%'}
                            marginTop={'-60px'}
                            bgColor={'#137797'}
                            color='#ffff'
                            onClick={toggleModal}>
                            <CloseButton />
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <ModalDescripcion />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalInforme;