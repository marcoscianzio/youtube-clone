import { extendTheme } from "@chakra-ui/react";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { Form } from "./components/form";
import { Input } from "./components/input";
import { Link } from "./components/link";
import { Modal } from "./components/modal";
import { Tag } from "./components/tag";
import { Textarea } from "./components/textarea";
import { fonts } from "./foundations/fonts";
import { semanticTokens } from "./foundations/semanticTokes";
import { textStyles } from "./foundations/textStyles";
import { styles } from "./styles";

export const theme = extendTheme({
  fonts,
  components: {
    Link,
    Textarea,
    Modal,
    Button,
    Badge,
    Input,
    Tag,
    Form,
  },
  semanticTokens,
  styles,
  textStyles,
});
