import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useMeQuery } from "../generated/graphql";
import { Logo } from "../icons/Logo";
import CreateVideoModal from "./CreateVideoModal";
import Sidebar from "./Sidebar";

const Navbar: React.FC = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { data, loading } = useMeQuery();

  let component: JSX.Element | null = null;

  if (loading) {
    component = <Spinner></Spinner>;
  } else if (!data?.me) {
    component = (
      <Button
        variant="bordered"
        as="a"
        href="http://localhost:4000/auth/github"
      >
        login
      </Button>
    );
  } else {
    component = (
      <HStack spacing={4}>
        <CreateVideoModal />
        <Avatar size="sm" bg="searchBorder" />
      </HStack>
    );
  }

  return (
    <Stack minH="100vh" spacing={0}>
      <HStack
        zIndex={100}
        justify="space-between"
        position="fixed"
        w="full"
        pr={5}
        h={16}
        bg="bgPrimary"
      >
        <HStack>
          <HStack w="20" justify="center">
            <IconButton
              alignSelf="start"
              aria-label="nav"
              onClick={onToggle}
              bg="transparent"
              icon={<HamburgerIcon boxSize={6} color="primary" />}
            />
          </HStack>
          <Link href="/">
            <Logo cursor="pointer" boxSize={24} />
          </Link>
        </HStack>
        <HStack w="30%" spacing={0}>
          <Input placeholder="Buscar" variant="search" />
          <IconButton
            aria-label="search"
            w={20}
            borderWidth="1px 1px 1px 0"
            _hover={{
              shadow: "base",
            }}
            borderColor="searchBorder"
            icon={<SearchIcon color="textPrimary" />}
            bg="searchButton"
          />
        </HStack>
        {component}
      </HStack>

      <Stack spacing={0} direction="row">
        <Sidebar isOpen={isOpen} />
        <Box w="full" pt={20} pl={isOpen ? "60" : "20"}>
          {children}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
