import { Button, ControlGroup, NumericInput } from '@blueprintjs/core';
import React, { useCallback } from 'react';
import { Items } from '../../data/items';
import { ISelectedRecipe } from '../RecipePicker/RecipePicker';
import ItemSelect from '../ItemSelect/ItemSelect';

interface IRecipePickerItemProps {
  selectedRecipe: ISelectedRecipe;
  onChange?: (ref: ISelectedRecipe, newValues?: ISelectedRecipe) => void;
  availableItems: Array<Items>;
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

  return (
    <ControlGroup vertical={false}>
      <ItemSelect
        placeholder={'Select recipe'}
        onItemSelect={onItemSelect}
        selectedItem={selectedRecipe.item}
      />
      <NumericInput
        placeholder="Items p/m"
        min={1}
        value={selectedRecipe ? selectedRecipe.itemsPerSecond : 1}
        onValueChange={onItemsPerSecondChange}
      />
      {selectedRecipe && <Button icon={'cross'} onClick={onRemove} />}
    </ControlGroup>
  );
};

export default RecipePickerItem;
