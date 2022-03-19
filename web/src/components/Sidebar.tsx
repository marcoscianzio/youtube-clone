import { Stack } from "@chakra-ui/react";
import { menuItems } from "../data/sidebarItems";
import SideBarItem from "./SidebarItem";
import Subscriptions from "./Subscriptions";

const Sidebar: React.FC<{ isOpen: any }> = ({ isOpen }) => {
  return (
    <Stack spacing={0} direction="row">
      <Stack
        h="100vh"
        mt={16}
        position="fixed"
        bg="bgPrimary"
        hidden={!isOpen}
        pl={7}
        pr={2}
        py={3}
        w={72}
      >
        {isOpen && (
          <Stack spacing={8}>
            <Stack>
              {menuItems.map((item, i) => {
                return (
                  <SideBarItem
                    key={i}
                    name={item.name}
                    icon={item.icon}
                    divider={item.divider}
                  />
                );
              })}
            </Stack>

            <Subscriptions />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
