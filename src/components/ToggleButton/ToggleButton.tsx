import React, { useCallback } from 'react';
import { Button, IButtonProps } from '@blueprintjs/core';

interface ToggleButtonProps<
  T,
  E extends HTMLButtonElement | HTMLAnchorElement = HTMLButtonElement
> {
  onClick: (newValue: T) => void;
  currentValue: T;
  label: string;
  value: T;

  buttonProps?: IButtonProps<E>;
}

const ToggleButton = <T extends unknown>({
  onClick,
  currentValue,
  label,
  value,
  buttonProps,
}: ToggleButtonProps<T>) => {
  const handleButtonClick = useCallback(() => onClick(value), [value, onClick]);

  return (
    <Button
      {...buttonProps}
      active={value === currentValue}
      onClick={handleButtonClick}
      outlined={false}
    >
      {label}
    </Button>
  );
};

export default ToggleButton;
