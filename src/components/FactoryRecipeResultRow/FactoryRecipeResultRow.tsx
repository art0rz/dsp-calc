import React, { useCallback, useState } from 'react';
import { Button, Divider, HTMLTable, Icon } from '@blueprintjs/core';
import { IFactoryResultFlatGraph } from '../../lib/factory';
import { getRecipesForItem } from '../../data/recipes';
import { getItemName, getRecipeName } from '../../data/copy';
import { BuildingIcons, ItemIcons } from '../../data/icons';
import { getPreferredBuilding } from '../../data/buildings';

interface IFactoryRecipeResultRowProps {
  result: IFactoryResultFlatGraph;
  factoryResults: Array<IFactoryResultFlatGraph>;
}

const FactoryRecipeResultRow = ({
  result,
  factoryResults,
}: IFactoryRecipeResultRowProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapseToggle = useCallback(() => setCollapsed(!collapsed), [
    collapsed,
  ]);

  return (
    <>
      <tr>
        <td>
          <Button
            minimal={true}
            icon={collapsed ? 'chevron-down' : 'chevron-right'}
            onClick={onCollapseToggle}
          />
        </td>
        <td>
          <img className={'icon'} src={ItemIcons[result.outputItem]} />{' '}
          {getItemName(result.outputItem)}{' '}
          {getRecipesForItem(result.outputItem).length > 1 ? (
            <>({getRecipeName(result.recipe)})</>
          ) : null}
        </td>
        <td>{result.itemsPerMinute}</td>
        <td>
          <>
            {result.category && (
              <>
                <img
                  className={'icon'}
                  src={BuildingIcons[getPreferredBuilding(result.category)]}
                />{' '}
                {getPreferredBuilding(result.category)}
              </>
            )}
          </>
        </td>
      </tr>
      {collapsed && (
        <tr>
          <td colSpan={3}>
            <h5 className={'bp3-heading'}>Ingredients</h5>
            <HTMLTable striped={true}>
              <tbody>
                {result.ingredients.map(ingredient => (
                  <React.Fragment key={ingredient.outputItem}>
                    <tr>
                      <td>
                        <img
                          className={'icon'}
                          src={ItemIcons[ingredient.outputItem]}
                        />{' '}
                        <Icon icon={'arrow-right'} />{' '}
                        <img
                          className={'icon'}
                          src={ItemIcons[result.outputItem]}
                        />
                      </td>
                      <td>{ingredient.itemsPerMinute}</td>
                      <td>
                        {ingredient.category && (
                          <img
                            className={'icon'}
                            src={
                              BuildingIcons[
                                getPreferredBuilding(ingredient.category)
                              ]
                            }
                          />
                        )}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </HTMLTable>
            <Divider />

            <h5 className={'bp3-heading'}>Used by</h5>
            <HTMLTable striped={true}>
              <tbody>
                {result.usedFor.map(f => {
                  return (
                    <React.Fragment key={f.outputItem}>
                      <tr>
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
                        <td>{f.itemsPerMinute}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </HTMLTable>
          </td>
        </tr>
      )}
    </>
  );
};

export default FactoryRecipeResultRow;
