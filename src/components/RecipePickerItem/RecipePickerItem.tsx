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
  selectedRecipe: ISelectedRecipe;
  onChange?: (ref: ISelectedRecipe, newValues?: ISelectedRecipe) => void;
  availableItems: Array<Item>;
}

const RecipePickerItem = ({
  selectedRecipe,
  onChange = () => undefined,
}: IRecipePickerItemProps) => {
  const sendChange = useCallback(
    (key: keyof ISelectedRecipe, newValue?: any) => {
      onChange(selectedRecipe, {
        ...selectedRecipe,
        [key]: newValue,
      });
    },
    [selectedRecipe, onChange]
  );

  const onItemsPerSecondChange = useCallback(
    newValue => {
      sendChange('itemsPerSecond', newValue);
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
      sendChange('item', item);
    },
    [sendChange]
  );

  const onRecipeSelect = useCallback(
    recipe => {
      sendChange('recipe', recipe);
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
            list={$enum(Recipe).getValues()}
            getTranslation={getRecipeName}
            getIcon={(item: Recipe) => RecipeIcons[item] || ''}
          />
        )}
      {selectedRecipe && <Button icon={'cross'} onClick={onRemove} />}
    </ControlGroup>
  );
};

export default RecipePickerItem;
