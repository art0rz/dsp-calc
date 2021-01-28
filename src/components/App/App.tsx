import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Divider,
  HTMLTable,
  Icon,
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
import { getRecipesForItem, ItemIcons } from '../../data/recipes';
import { calculateFactoryResults2 } from '../../lib/factory';

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
          <Button rightIcon={'git-repo'} onClick={onClickOpenSettings}>
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
          <HTMLTable striped={true}>
            <thead>
              <tr>
                <th>items</th>
                <th>p/m</th>
                <th>source</th>
              </tr>
            </thead>
            <tbody>
              {factoryResults.map(result => (
                <React.Fragment key={result.outputItem}>
                  <tr>
                    <td>
                      <Button minimal={true} icon={'chevron-right'} />
                    </td>
                    <td>
                      <img
                        className={'icon'}
                        src={ItemIcons[result.outputItem]}
                      />{' '}
                      {getItemName(result.outputItem)}{' '}
                      {getRecipesForItem(result.outputItem).length > 1 ? (
                        <>({getRecipeName(result.recipe)})</>
                      ) : null}
                    </td>
                    <td>{result.itemsPerSecond}</td>
                    <td>
                      <>
                        <img
                          className={'icon'}
                          src={ItemIcons[result.factory]}
                        />{' '}
                        {getItemName(result.factory)}
                      </>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <HTMLTable striped={true}>
                        <tbody>
                          {result.ingredients.map(ingredient => (
                            <React.Fragment key={ingredient.item}>
                              <tr>
                                <td>
                                  <img
                                    className={'icon'}
                                    src={ItemIcons[ingredient.item]}
                                  />{' '}
                                  <Icon icon={'arrow-right'} />{' '}
                                  <img
                                    className={'icon'}
                                    src={ItemIcons[result.outputItem]}
                                  />
                                </td>
                                <td>{ingredient.itemsPerSecond}</td>
                                <td>
                                  <img
                                    className={'icon'}
                                    src={ItemIcons[ingredient.factory]}
                                  />
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </HTMLTable>
                      <Divider />

                      <HTMLTable striped={true}>
                        <tbody>
                          <tr>
                            {factoryResults
                              .filter(res =>
                                res.ingredients.find(
                                  i => i.item === result.outputItem
                                )
                              )
                              .map(f => (
                                <React.Fragment key={f.outputItem}>
                                  <td>
                                    <img
                                      className={'icon'}
                                      src={ItemIcons[result.outputItem]}
                                    />{' '}
                                    <Icon icon={'arrow-right'} />{' '}
                                    <img
                                      className={'icon'}
                                      src={ItemIcons[f.outputItem]}
                                    />
                                  </td>
                                  <td>{f.itemsPerSecond}</td>
                                </React.Fragment>
                              ))}
                          </tr>
                        </tbody>
                      </HTMLTable>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </HTMLTable>
        </Card>
      )}
    </div>
  );
};

export default App;
