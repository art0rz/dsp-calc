import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Drawer,
  FormGroup,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import ToggleButton from '../ToggleButton';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const beltTiers = [1, 2, 3];
const assemblerTiers = [1, 2];

const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  const [beltTier, setBeltTier] = useState(1);
  const [assemblerTier, setAssemblerTier] = useState(1);

  return (
    <Drawer isOpen={isOpen} className="bp3-dark">
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Settings</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={'right'}>
          <Button icon={'cross'} onClick={onClose} />
        </NavbarGroup>
      </Navbar>
      <Card>
        <FormGroup label="Belt tier">
          <ButtonGroup>
            {beltTiers.map(tier => (
              <ToggleButton
                key={tier}
                currentValue={beltTier}
                onClick={setBeltTier}
                label={tier.toString()}
                value={tier}
              />
            ))}
          </ButtonGroup>
        </FormGroup>
        <FormGroup label="Assembler tier">
          <ButtonGroup>
            {assemblerTiers.map(tier => (
              <ToggleButton
                key={tier}
                currentValue={assemblerTier}
                onClick={setAssemblerTier}
                label={tier.toString()}
                value={tier}
              />
            ))}
          </ButtonGroup>
        </FormGroup>
      </Card>
    </Drawer>
  );
};

export default SettingsPanel;
