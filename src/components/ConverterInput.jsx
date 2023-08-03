import { FormLabel, Input } from '@chakra-ui/react';

const ConverterInput = ({ value, onAmountChange }) => {
  return (
    <>
      <FormLabel htmlFor="amount" fontWeight="bold" color="#858e96">
        Amount
      </FormLabel>
      <Input
        id="amount"
        size="lg"
        type="number"
        min={0}
        value={value}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </>
  );
};

export default ConverterInput;
