import { Divider, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { HistoryIcon } from "../icons/History";
import { LibraryIcon } from "../icons/Library";
import { LikeIcon } from "../icons/Like";
import { MainIcon } from "../icons/Main";
import { SubsIcon } from "../icons/Subs";

interface LinkProps {
  name: string;
  icon: React.FC;
  divider?: boolean;
}

const links: Array<LinkProps> = new Array(
  {
    name: "principal",
    icon: MainIcon,
  },
  {
    name: "subscripciones",
    icon: SubsIcon,
    divider: true,
  },
  {
    name: "bibloteca",
    icon: LibraryIcon,
  }
);

const allLinks: Array<LinkProps> = links.concat(
  new Array(
    {
      name: "historial",
      icon: HistoryIcon,
    },
    {
      name: "videos que me gustan",
      icon: LikeIcon,
    }
  )
);

const Sidebar: React.FC<{ isOpen: any }> = ({ isOpen }) => {
  return (
    <Stack spacing={0} direction="row">
      <Stack
        h="100vh"
        mt={16}
        position="fixed"
        bg="bgPrimary"
        alignItems="center"
        w={isOpen ? "60" : "20"}
      >
        {isOpen ? (
          allLinks.map(({ name, icon, divider }: LinkProps, i) => (
            <>
              <HStack
                key={i}
                pl={7}
                cursor="pointer"
                py={3}
                w="full"
                spacing={4}
                _hover={{
                  bg: "chipBg",
                }}
              >
                <Icon as={icon} boxSize={6} />
                <Text
                  textTransform="capitalize"
                  fontSize="small"
                  textStyle="sectionItem"
                >
                  {name}
                </Text>
              </HStack>
              {divider ? <Divider borderColor="percentLayer"></Divider> : null}
            </>
          ))
        ) : (
          <>
            {links.map(({ name, icon }: LinkProps, i) => (
              <VStack
                key={i}
                cursor="pointer"
                py={4}
                w="full"
                spacing={2}
                _hover={{
                  bg: "chipBg",
                }}
              >
                <Icon as={icon} boxSize={6} />
                <Text
                  textTransform="capitalize"
                  fontSize="x-small"
                  textStyle="sectionItem"
                >
                  {name}
                </Text>
              </VStack>
            ))}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
