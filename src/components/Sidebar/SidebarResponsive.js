/*eslint-disable*/
import { HamburgerIcon } from "@chakra-ui/icons";
// chakra imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Image,
  Grid,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import IconBox from "components/Icons/IconBox";
import Logo from "assets/img/logo.png";
import { Separator } from "components/Separator/Separator";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import Calendario from "./Calendario";
import Fecha from "./Fecha";
import Reloj from "./Reloj";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function SidebarResponsive(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  const createLinks = (routes) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("#89bbcc", "gray.700");
    const inactiveBg = useColorModeValue("transparet");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");
    const colorIcon = useColorModeValue("gray.400");

    return routes.map((prop, key) => {
      if (prop.hide) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <div key={prop.name}>
             <Separator></Separator>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "12px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
            >
              {document.documentElement.dir === "rtl"
                ? prop.rtlName
                : prop.name}
            </Text>
            {createLinks(prop.views)}
            <Separator></Separator>
          </div>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color={colorIcon}
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const { logoText, routes, ...rest } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let hamburgerColor = useColorModeValue("gray.500", "gray.200");
  if (props.secondary === true) {
    hamburgerColor = "white";
  }
  var brand = (
    <Box pt={"0"} mb="8px">
      <Box w="70%" h="5px" mb="150px" ml={"30px"}>
        <Image src={Logo} alt="Logo palmosima" />
        <Box m={"0px 30px"} color={"#137797"} fontWeight="bold">
          <Grid templateColumns={"1fr 2fr"}>
            <TimeIcon boxSize={6} />
            <Box>
              <Box w={'100px'} m={"0px 5px"}>
                <Reloj />
              </Box>
              <Box m={'0px -15px'}>
                <Fecha />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Link
        href={`#`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      ></Link>
      <Box margin={'50px 0 20px 0'}>
        <Separator></Separator>
        <Text marginTop={'10px'} marginLeft={'13px'} fontWeight={'bold'}>Administración</Text>
      </Box>
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Flex
      display={{ sm: "flex", xl: "none" }}
      ref={mainPanel}
      alignItems="center"
    >
      <HamburgerIcon
        color={"#FFFF"}
        w="18px"
        h="18px"
        ref={btnRef}
        colorscheme="#FFFF"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={"left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="250px"
          maxW="250px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          borderRadius="16px"
        >
          <DrawerCloseButton
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="250px" px="1rem">
            <Box maxW="100%" h="100vh">
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                <Box>{links}</Box>
              </Stack>
              <Box marginTop={"60px"}>
                <Calendario></Calendario>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default SidebarResponsive;
