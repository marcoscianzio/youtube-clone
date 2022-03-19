import { HistoryIcon } from "../icons/History";
import { LibraryIcon } from "../icons/Library";
import { LikeIcon } from "../icons/Like";
import { MainIcon } from "../icons/Main";
import { SubsIcon } from "../icons/Subs";

export const menuItems = [
  {
    name: "Principal",
    icon: MainIcon,
  },
  {
    name: "Subscripciones",
    icon: SubsIcon,
    divider: true,
  },
  {
    name: "Bibloteca",
    icon: LibraryIcon,
  },
  {
    name: "Historial",
    icon: HistoryIcon,
  },
  {
    name: "Videos que me gustan",
    icon: LikeIcon,
    divider: true,
  },
];
