import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  CloseButton,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiChat1 } from "react-icons/ci";
import { memo } from "react";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    transition="3s ease"
    bg={useColorModeValue("white", "gray.900")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Room Chat
      </Text>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Rooms
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3} marginLeft={2}>
            <ListItem>
              <ListIcon as={CiChat1} color="green.500" />
              Room1
            </ListItem>
            <ListItem>
              <ListIcon as={CiChat1} color="green.500" />
              Room2
            </ListItem>
            <ListItem>
              <ListIcon as={CiChat1} color="green.500" />
              Room3
            </ListItem>
            <ListItem>
              <ListIcon as={CiChat1} color="green.500" />
              Room4
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Box>
);

export default memo(SidebarContent);
