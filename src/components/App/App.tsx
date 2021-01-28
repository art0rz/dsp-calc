import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  HTMLTable,
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
import { getItemName, getRecipeName } from '../../data/copy';
import { getRecipesForItem, ItemIcons, Recipes } from '../../data/recipes';
import { calculateFactoryResults } from '../../lib/factory';

export const App = () => {
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [factoryResults, setFactoryResults] = useState<
    ReturnType<typeof calculateFactoryResults>
  >({});
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

  useEffect(() => {
    setFactoryResults(calculateFactoryResults(recipes));
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
          <HTMLTable striped={true}>
            <thead>
              <tr>
                <th>items</th>
                <th>p/m</th>
                <th>source</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(factoryResults).map(selectedRecipe => {
                if (selectedRecipe === undefined) {
                  return null;
                }
                if (
                  selectedRecipe.item !== undefined &&
                  selectedRecipe.recipe !== undefined
                ) {
                  const recipe = Recipes[selectedRecipe.recipe];
                  return (
                    <>
                      <tr>
                        <td>
                          <img
                            className={'icon'}
                            src={ItemIcons[selectedRecipe.item]}
                          />
                          {getItemName(selectedRecipe.item)}{' '}
                          {getRecipesForItem(selectedRecipe.item).length > 1 ? (
                            <>({getRecipeName(selectedRecipe.recipe)})</>
                          ) : null}
                        </td>
                        <td>{selectedRecipe.itemsPerSecond}</td>
                        <td>
                          {recipe && (
                            <>
                              <img
                                className={'icon'}
                                src={ItemIcons[recipe.factory]}
                              />
                              {getItemName(recipe.factory)}
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                }

                return null;
              })}
            </tbody>
          </HTMLTable>
        </Card>
      )}
    </div>
  );
};

export default App;
