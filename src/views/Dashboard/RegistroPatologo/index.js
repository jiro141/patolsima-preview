import { React, useState, useContext } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Badge,
  Heading,
  Grid,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  CloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaFlask } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import ModalRegistro from "./components/ModalRegistro";
import ModoVisualizacionContext from "components/ModoVisualizacion/ModoVisualizacion";
import ModoLista from "./ModoLista";

const Dashboard = () => {
  const highPriorityColor = "#FE686A";
  const mediumPriorityColor = "#FC9F02";
  const lowPriorityColor = "#02B464";

  const highPriorityStudies = [
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
  ];

  const mediumPriorityStudies = [
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "ematologia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
  ];

  const lowPriorityStudies = [
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
    },
  ];
  // modales para las vistas flotantes
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const { modoVisualizacion } = useContext(ModoVisualizacionContext);

  const renderStudies = (studies, priorityColor) => {
    return studies.map((study) => (
      <Flex flexDirection={"row 7"}>
        <Link
          onClick={toggleModal}>
          <Box
            margin={"5px 0px "}
            boxShadow={"0px 0px 16px 2px rgba(0, 0, 0, 0.2)"}
            borderRadius={"16px"}
            padding={"0"}
            key={study.nestudio}
          >
            <Box
              borderTopLeftRadius={"16px"}
              borderTopRightRadius={"16px"}
              backgroundColor={priorityColor}
            >
              <Badge
                textAlign={"center"}
                background={"none"}
                color={"#FFFF"}
                padding={"10px"}
                fontSize={"17px"}
                w={'200px'}
              >
                {study.nestudio}
                <Icon
                  border={"solid"}
                  borderColor={priorityColor}
                  marginTop={"-30px"}
                  marginLeft={"46px"}
                  marginBottom={'-18px'}
                  height={"55px"}
                  width={"55px"}
                  padding={"5px"}
                  borderRadius={"50%"}
                  as={FaFlask}
                  backgroundColor={"#FFFF"}
                  color={priorityColor}
                />
              </Badge>
            </Box>
            <Box
              minH={'192px'} minW={'180px'} p={"10px "}>
              <Heading size="sm">Fecha de ingreso</Heading>
              <Text
                textAlign={"right"}
                ml={2}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {study.fecha}
              </Text>
              <Heading size="sm">Estudio</Heading>
              <Text
                textAlign={"right"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {study.estudio}
              </Text>
              <Heading size="sm">Paciente</Heading>
              <Text textAlign={"right"}>{study.paciente}</Text>
            </Box>
          </Box>
        </Link>
      </Flex>
    ));
  };

  return (
    modoVisualizacion === 'tarjeta' ? (
      <>
        <Box
          margin={{ lg: '50px 0px 0px 0px', sm: '60px 0px 10% 0px' }}
          padding={{ lg: '0 25px', md: '10px', sm: '0px 0 10% 0' }}
          backgroundColor={'gray.100'}
          borderRadius={'20px'}
          backgroundSize="cover"
          backgroundPosition="center"
          height={'auto'}
          >
          <Box padding={'2%'}>
            <Heading
              size="md"
            >
              Registro de muestras
            </Heading>
            <Box
              width={'100%'}
              m={"20px 30px 30px 10px"}
              backgroundColor={"#FFFF"}
              boxShadow={"0px 0px 16px 2px rgba(0, 0, 0, 0.2)"}
              borderRadius="20px"
              overflowY="scroll"
              overflowX="hidden"
              maxH={'34em'}
             
            >
              <SimpleGrid columns={1} spacing={4}>
                <SimpleGrid columns={1}>
                  <Box
                    padding={'25px'}
                  >
                    <Heading
                      borderBottom="solid"
                      borderColor={highPriorityColor}
                      size="md"
                      mb={4}
                    >
                      Prioridad Alta
                    </Heading>
                    <Grid gap={"20px"} templateColumns={{ lg: "repeat(5,1fr)", md: "repeat(3,1fr)", sm: "repeat(1,1fr)" }}>
                      {renderStudies(highPriorityStudies, highPriorityColor)}
                    </Grid>
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={1}>
                  <Box padding={'25px'}>
                    <Heading
                      borderBottom="solid"
                      borderColor={mediumPriorityColor}
                      size="md"
                      mb={4}
                    >
                      Prioridad Media
                    </Heading>
                    <Grid gap={"20px"} templateColumns={{ lg: "repeat(5,1fr)", md: "repeat(3,1fr)", sm: "repeat(1,1fr)" }}>
                      {renderStudies(mediumPriorityStudies, mediumPriorityColor)}
                    </Grid>
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={1}>
                  <Box padding={'25px'}>
                    <Heading
                      borderBottom="solid"
                      borderColor={lowPriorityColor}
                      size="md"
                      mb={4}
                    >
                      Prioridad Baja
                    </Heading>
                    <Grid gap={"20px"} templateColumns={{ lg: "repeat(5,1fr)", md: "repeat(3,1fr)", sm: "repeat(1,1fr)" }}>
                      {renderStudies(lowPriorityStudies, lowPriorityColor)}
                    </Grid>
                  </Box>
                </SimpleGrid>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
        <Modal
          size={'3xl'}
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
              <ModalRegistro />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    ) : (
      <ModoLista />
    )
  );
};

export default Dashboard;
