import { React, useState } from "react";
import {
  Badge,
  Heading,
  Link,
  Text,
  useColorModeValue,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalBody,
  CloseButton
} from "@chakra-ui/react";
import { FaFlask } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import ModalRegistro from "./components/ModalRegistro";

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
      ci: "536510320"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "15154512"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "536510320"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "15154512"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "536510320"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "15154512"
    },
  ];

  const mediumPriorityStudies = [
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "ematologia",
      paciente: "Javiera de castellanos",
      ci: "51451551551"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "ematologia",
      paciente: "Javiera de castellanos",
      ci: "51451551551"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "ematologia",
      paciente: "Javiera de castellanos",
      ci: "51451551551"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "4548156152"
    },
  ];

  const lowPriorityStudies = [
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "615054154"
    },
    {
      nestudio: "B:010-2023",
      fecha: "15/03/2023",
      estudio: "Biopcia",
      paciente: "Javiera de castellanos",
      ci: "2515651515"
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Box margin={{ lg: '50px 0px 0px 0px', sm: '60px 0px 0px 0px' }}
        padding={{ lg: '0 25px', md: '10px', sm: '0px 0 10% 0' }}
        backgroundColor={'gray.100'}
        borderRadius={'20px'}
        backgroundSize="cover"
        backgroundPosition="center"
        height={'auto'} >
        <Box padding={'2%'}>
          <Heading
            size="md"
          >
            Registro de muestras
          </Heading>
          <Box
            p={'15px 25px 25px 25px'}
            width={'100%'}
            m={"20px 30px 30px 10px"}
            backgroundColor={"#FFFF"}
            boxShadow={"0px 0px 16px 2px rgba(0, 0, 0, 0.2)"}
            borderRadius="20px"
            overflowY="scroll"
            overflowX="hidden"
            maxH={'34em'}
            >

            <Table >
              <Thead>
                <Tr>
                  <Th># Muestra</Th>
                  <Th>Nombre y Apellido</Th>
                  <Th>RIF/CI</Th>
                  <Th>Fecha de recepción</Th>
                  <Th>Tipo de estudio</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr borderBottom={'solid 3px'} borderColor={highPriorityColor}>
                  <Heading
                    size="md"
                    mt={4}
                  >
                    Prioridad Alta
                  </Heading>
                </Tr>
                {highPriorityStudies.map((study) => (
                  <Tr borderBottom={'solid 2px'} borderColor={'gray.400'} key={study.nestudio}>
                    <Td>
                      <Link onClick={toggleModal}> {study.nestudio}</Link>
                    </Td>
                    <Td><Link onClick={toggleModal}>{study.paciente}</Link></Td>
                    <Td>
                      <Link onClick={toggleModal}>{study.ci}</Link>
                    </Td>
                    <Td>
                      <Link onClick={toggleModal}>{study.fecha}</Link>
                    </Td>
                    <Td><Link onClick={toggleModal}>{study.estudio}</Link></Td>
                  </Tr>
                ))}
                <Tr borderBottom={'solid 3px'} borderColor={mediumPriorityColor}>
                  <Heading
                    size="md"
                    mt={4}
                  >
                    Prioridad Media
                  </Heading>
                </Tr>
                {mediumPriorityStudies.map((study) => (

                  <Tr borderBottom={'solid 2px'} borderColor={'gray.400'} key={study.nestudio}>
                    <Td>
                      <Link onClick={toggleModal}> {study.nestudio}</Link>
                    </Td>
                    <Td><Link onClick={toggleModal}>{study.paciente}</Link></Td>
                    <Td>
                      <Link onClick={toggleModal}>{study.ci}</Link>
                    </Td>
                    <Td>
                      <Link onClick={toggleModal}>{study.fecha}</Link>
                    </Td>
                    <Td><Link onClick={toggleModal}>{study.estudio}</Link></Td>
                  </Tr>
                ))}
                <Tr borderBottom={'solid 3px'} borderColor={lowPriorityColor}>
                  <Heading
                    size="md"
                    mt={4}
                  >
                    Prioridad Baja
                  </Heading>
                </Tr>
                {lowPriorityStudies.map((study) => (

                  <Tr borderBottom={'solid 2px'} borderColor={'gray.400'} key={study.nestudio}>
                    <Td>
                      <Link onClick={toggleModal}> {study.nestudio}</Link>
                    </Td>
                    <Td><Link onClick={toggleModal}>{study.paciente}</Link></Td>
                    <Td>
                      <Link onClick={toggleModal}>{study.ci}</Link>
                    </Td>
                    <Td>
                      <Link onClick={toggleModal}>{study.fecha}</Link>
                    </Td>
                    <Td><Link onClick={toggleModal}>{study.estudio}</Link></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
      <Modal
        size={'4xl'}
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
  );
};
export default Dashboard;