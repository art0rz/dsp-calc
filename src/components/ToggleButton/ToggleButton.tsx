import React, { useCallback } from 'react';
import { Button } from '@blueprintjs/core';

interface ToggleButtonProps<T> {
  onClick: (newValue: T) => void;
  currentValue: T;
  label: string;
  value: T;
}

const ToggleButton = <T extends unknown>({
  onClick,
  currentValue,
  label,
  value,
}: ToggleButtonProps<T>) => {
  const handleButtonClick = useCallback(() => onClick(value), [value, onClick]);

  return (
    <Button
      active={value === currentValue}
      onClick={handleButtonClick}
      outlined={false}
    >
      {label}
    </Button>
  );
};

export default ToggleButton;
