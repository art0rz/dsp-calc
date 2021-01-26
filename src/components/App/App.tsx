import React, { useCallback, useState } from 'react';
import './App.scss';
import {
  Button,
  Card,
  HTMLTable,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import { ReactComponent as Logo } from '../../dsp-logo.svg';
import RecipePicker from '../RecipePicker';
import SettingsPanel from '../SettingsPanel';

export const App = () => {
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const onClickOpenSettings = useCallback(
    () => setShowSettingsDrawer(true),
    []
  );
  const onClickCloseSettings = useCallback(
    () => setShowSettingsDrawer(false),
    []
  );
  return (
    <div className="bp3-dark">
      <Navbar>
        <NavbarGroup>
          <Logo className={'logo'} />
          <NavbarDivider />
          <NavbarHeading>Dyson Sphere Program Calculator</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={'right'}>
          <Button icon={'cog'} onClick={onClickOpenSettings} />
        </NavbarGroup>
      </Navbar>
      <RecipePicker />

      <SettingsPanel
        isOpen={showSettingsDrawer}
        onClose={onClickCloseSettings}
      />
      <Card>
        <h5 className={'bp3-heading'}>Factory</h5>
        <HTMLTable striped={true}>
          <thead>
            <tr>
              <th>items</th>
              <th>p/m</th>
              <th>source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iron ingot</td>
              <td>5</td>
              <td>Foo</td>
            </tr>
            <tr>
              <td>Iron ingot</td>
              <td>5</td>
              <td>Foo</td>
            </tr>
          </tbody>
        </HTMLTable>
      </Card>
    </div>
  );
};

export default App;
