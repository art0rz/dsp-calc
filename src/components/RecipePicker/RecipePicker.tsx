import { Button, Card } from '@blueprintjs/core';
import React, { useCallback, useState } from 'react';
import { $enum } from 'ts-enum-util';
import RecipePickerItem from '../RecipePickerItem';
import { Item } from '../../data/item';
import { Recipe } from '../../data/recipes';

export interface ISelectedRecipe {
  item: Item;
  recipe: Recipe;
  itemsPerMinute: number;
}

interface IRecipePickerProps {
  onChange: (recipes: Array<ISelectedRecipe>) => void;
}

const RecipePicker = ({ onChange }: IRecipePickerProps) => {
  const [selectedRecipes, setSelectedRecipes] = useState<
    Array<Partial<ISelectedRecipe>>
  >([]);

  const selectedItems = selectedRecipes.map(s => s.item);
  const remainingItems = $enum(Item)
    .getValues()
    .filter(k => selectedItems.includes(k) === false);

  const onRecipePickerChange = useCallback(
    (ref, newValues) => {
      const newSelection = [...selectedRecipes];
      newSelection
        .splice(selectedRecipes.indexOf(ref), 1, newValues)
        .filter(n => n);
      setSelectedRecipes(newSelection.filter(n => n));

      onChange(
        newSelection.filter(
          n =>
            n !== undefined &&
            n.recipe !== undefined &&
            n.item !== undefined &&
            n.itemsPerMinute !== undefined
        ) as Array<ISelectedRecipe>
      );
    },
    [selectedRecipes, onChange]
  );

  const onNewRecipeClick = useCallback(() => {
    setSelectedRecipes([
      ...selectedRecipes,
      {
        item: undefined,
        itemsPerMinute: 1,
      },
    ]);
  }, [selectedRecipes]);

  return (
    <Card>
      <h5 className={'bp3-heading'}>Selected recipes</h5>
      {selectedRecipes.map(selectedRecipe => (
        <RecipePickerItem
          selectedRecipe={selectedRecipe}
          key={selectedRecipe.item}
          onChange={onRecipePickerChange}
          availableItems={remainingItems}
          showRemoveButton={selectedRecipes.length > 1}
        />
      ))}
      <Button icon={'plus'} onClick={onNewRecipeClick}>
        Add new recipe
      </Button>
    </Card>
  );
};

export default RecipePicker;
