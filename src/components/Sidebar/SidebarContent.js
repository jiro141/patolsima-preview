/*eslint-disable*/
// chakra imports
import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Grid,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import IconBox from "components/Icons/IconBox";
import Logo from "assets/img/logo.png";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Reloj } from "components/Sidebar/Reloj";
import { Fecha } from "components/Sidebar/Fecha";
import { Calendario } from "components/Sidebar/Calendario";

// this function creates the links and collapses that appear in the sidebar (left menu)

const SidebarContent = ({ logoText, routes }) => {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  const createLinks = (routes) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("#89bbcc", "gray.700");
    const inactiveBg = useColorModeValue("transparet");
    const activeColor = useColorModeValue("#2B6CB0", "white");
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
              color={"#000"}
              mb={{
                xl: "5px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="8px"
            >
              {prop.name}
            </Text>
            {createLinks(prop.views)}
            <Box margin={'0px 0 20px 0'}>
              <Separator></Separator>
            </Box>
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
                xl: "5px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="8px"
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
                    bg={'none'}
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  { prop.name}
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
                xl: "5px",
              }}
              mx={{
                xl: "auto",
              }}
              py="8px"
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
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const links = <>{createLinks(routes)}</>;

  return (
    <Box maxW={'200px'}>
      <Box w="70%" h="5px" m=" 5px 10px 150px 10px">
        <Link href="/admin/Home"><Image src={Logo} alt="Logo palmosima" /></Link>
        <Box m={"0px 30px"} color={"#137797"} fontWeight="bold">
          <Grid templateColumns={"1fr 2fr"}>
            <TimeIcon boxSize={6} />
            <Box>
              <Box w={'100px'} m={"0px 10px"}>
                <Reloj />
              </Box>
              <Box m={'0 -8px'}>
                <Fecha />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box pt={"10px"} mb="5px">
        <Box margin={'50px 0 20px 0'}>
          <Separator></Separator>
          <Text marginTop={'10px'} marginLeft={'13px'} >Administración</Text>
        </Box>
      </Box>
      <Stack direction="column" mb="40px">
        <Box>{links} <Separator></Separator></Box>
      </Stack>
      <Calendario />
    </Box>
  );
};

export default SidebarContent;
