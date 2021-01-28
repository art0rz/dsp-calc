import React, { useCallback, useState } from 'react';
import { Button, Divider, HTMLTable, Icon } from '@blueprintjs/core';
import { IFactoryResult } from '../../lib/factory';
import { getRecipesForItem, ItemIcons } from '../../data/recipes';
import { getItemName, getRecipeName } from '../../data/copy';

interface IFactoryRecipeResultRowProps {
  result: IFactoryResult;
  factoryResults: Array<IFactoryResult>;
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
        <td>{result.itemsPerSecond}</td>
        <td>
          <>
            <img className={'icon'} src={ItemIcons[result.factory]} />{' '}
            {getItemName(result.factory)}
          </>
        </td>
      </tr>
      {collapsed && (
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
                      res.ingredients.find(i => i.item === result.outputItem)
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
      )}
    </>
  );
};

export default FactoryRecipeResultRow;
