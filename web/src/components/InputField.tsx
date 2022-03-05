import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps {
  name: string;
  placeholder: string;
  label: string;
  textArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  textArea,
  label,
  ...props
}) => {
  const [field, { error }] = useField(props);
  const Component = textArea ? Textarea : Input;

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Component
        variant="outline"
        {...field}
        id={field.name}
        placeholder={placeholder}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
