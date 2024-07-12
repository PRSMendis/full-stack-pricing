import { Autocomplete } from "@mantine/core";

interface SearchProps {
  attribute: string;
  data: string[];
  value: Record<string, string>;
  onChange: (attribute: string, value: string) => void;
  onOptionSubmit: (attribute: string, value: string) => void;
  placeholder: string;
}

export function Search({ attribute, data, value, onChange, onOptionSubmit, placeholder }: SearchProps) {
  return (
    <Autocomplete
      data={data}
      value={value[attribute]}
      onChange={(value) => onChange(attribute, value)}
      onOptionSubmit={(value) => onOptionSubmit(attribute, value)}
      placeholder={placeholder}
    />
  );
}