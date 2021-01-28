import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import './App.scss';
import { ReactComponent as Logo } from '../../dsp-logo.svg';
import RecipePicker from '../RecipePicker';
import SettingsPanel from '../SettingsPanel';
import { ISelectedRecipe } from '../RecipePicker/RecipePicker';
import { calculateFactoryResults2 } from '../../lib/factory';
import FactorioRecipeResult from '../FactoryRecipeResult';

export const App = () => {
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [factoryResults, setFactoryResults] = useState<
    ReturnType<typeof calculateFactoryResults2>
  >([]);
  const [recipes, setRecipes] = useState<Array<ISelectedRecipe>>([]);
  const onClickOpenSettings = useCallback(
    () => setShowSettingsDrawer(true),
    []
  );
  const onClickCloseSettings = useCallback(
    () => setShowSettingsDrawer(false),
    []
  );

  const onRecipeSelectionChange = useCallback(newSelection => {
    setRecipes(newSelection);
  }, []);

  const onClickGithub = useCallback(newSelection => {
    window.open('https://github.com/art0rz/dsp-calc/', '_blank');
  }, []);

  useEffect(() => {
    setFactoryResults(calculateFactoryResults2(recipes));
  }, [recipes]);

  return (
    <div className="bp3-dark">
      <Navbar>
        <NavbarGroup>
          <Logo className={'logo'} />
          <NavbarDivider />
          <NavbarHeading>Dyson Sphere Program Calculator</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={'right'}>
          <Button rightIcon={'git-repo'} onClick={onClickGithub}>
            Github
          </Button>
          <NavbarDivider />
          <Button icon={'cog'} onClick={onClickOpenSettings} />
        </NavbarGroup>
      </Navbar>
      <RecipePicker onChange={onRecipeSelectionChange} />

      <SettingsPanel
        isOpen={showSettingsDrawer}
        onClose={onClickCloseSettings}
      />
      {recipes.length > 0 && (
        <Card>
          <h5 className={'bp3-heading'}>Factory</h5>
          <FactorioRecipeResult factoryResults={factoryResults} />
        </Card>
      )}
    </div>
  );
};

export default App;
