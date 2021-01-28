import { Button, ControlGroup, NumericInput } from '@blueprintjs/core';
import React, { useCallback } from 'react';
import { $enum } from 'ts-enum-util';
import { Item } from '../../data/item';
import { ISelectedRecipe } from '../RecipePicker/RecipePicker';
import ItemSelect from '../ItemSelect/ItemSelect';
import { getItemName, getRecipeName } from '../../data/copy';
import {
  getRecipesForItem,
  ItemIcons,
  Recipe,
  RecipeIcons,
} from '../../data/recipes';

interface IRecipePickerItemProps {
  selectedRecipe: Partial<ISelectedRecipe>;
  onChange?: (
    ref: Partial<ISelectedRecipe>,
    newValues?: Partial<ISelectedRecipe>
  ) => void;
  availableItems: Array<Item>;
}

const RecipePickerItem = ({
  selectedRecipe,
  onChange = () => undefined,
}: IRecipePickerItemProps) => {
  const sendChange = useCallback(
    (changes: Partial<ISelectedRecipe>) => {
      const newObject: Partial<ISelectedRecipe> = {
        ...selectedRecipe,
        ...changes,
      };

      if (newObject.item) {
        if (
          (newObject.recipe !== undefined &&
            getRecipesForItem(newObject.item).find(
              r => r.id === newObject.recipe
            ) === undefined) ||
          (newObject.recipe === undefined &&
            getRecipesForItem(newObject.item).length > 1)
        ) {
          newObject.recipe = undefined;
        }

        if (
          newObject.recipe === undefined &&
          getRecipesForItem(newObject.item).length === 1
        ) {
          newObject.recipe = getRecipesForItem(newObject.item)[0].id;
        }
      } else {
        newObject.recipe = undefined;
      }

      onChange(selectedRecipe, {
        ...selectedRecipe,
        ...newObject,
      });
    },
    [selectedRecipe, onChange]
  );

  const onItemsPerSecondChange = useCallback(
    itemsPerSecond => {
      sendChange({ itemsPerSecond });
    },
    [sendChange]
  );

  const onRemove = useCallback(
    newValue => {
      onChange(selectedRecipe);
    },
    [selectedRecipe, onChange]
  );

  const onItemSelect = useCallback(
    item => {
      sendChange({ item });
    },
    [sendChange]
  );

  const onRecipeSelect = useCallback(
    recipe => {
      sendChange({ recipe });
    },
    [sendChange]
  );

  return (
    <ControlGroup vertical={false}>
      <ItemSelect
        placeholder={'Select item'}
        onItemSelect={onItemSelect}
        selectedItem={selectedRecipe.item}
        list={$enum(Item).getValues()}
        getTranslation={getItemName}
        getIcon={(item: Item) => ItemIcons[item] || ''}
      />
      <NumericInput
        placeholder="Items p/m"
        min={1}
        value={selectedRecipe ? selectedRecipe.itemsPerSecond : 1}
        onValueChange={onItemsPerSecondChange}
      />
      {selectedRecipe.item !== undefined &&
        getRecipesForItem(selectedRecipe.item).length > 1 && (
          <ItemSelect
            placeholder={'Select recipe'}
            onItemSelect={onRecipeSelect}
            selectedItem={selectedRecipe.recipe}
            list={getRecipesForItem(selectedRecipe.item).map(
              recipe => recipe.id
            )}
            getTranslation={getRecipeName}
            getIcon={(item: Recipe) => RecipeIcons[item] || ''}
          />
        )}
      {selectedRecipe && <Button icon={'cross'} onClick={onRemove} />}
    </ControlGroup>
  );
};

export default RecipePickerItem;
