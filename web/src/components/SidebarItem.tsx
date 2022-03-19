import { Divider, HStack, Icon, Text } from "@chakra-ui/react";
import { Fragment } from "react";

interface SideBarItemProps {
  name: string;
  icon: React.FC;
  divider?: boolean;
}

export default function SideBarItem({ name, icon, divider }: SideBarItemProps) {
  return (
    <Fragment>
      <HStack
        pr={2}
        cursor="pointer"
        py={3}
        w="full"
        spacing={4}
        _hover={{
          bg: "chipBg",
        }}
      >
        <Icon as={icon} boxSize={6} />
        <Text isTruncated textStyle="sectionItem">
          {name}
        </Text>
      </HStack>
      {divider ? (
        <Divider marginLeft="-1em" borderColor="percentLayer"></Divider>
      ) : null}
    </Fragment>
  );
}
