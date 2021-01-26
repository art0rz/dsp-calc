import {Button, Card, Divider} from "@blueprintjs/core";
import React, {useCallback, useState} from "react";
import RecipePickerItem from "../RecipePickerItem";
import {Items} from "../../data/items";
import {$enum} from "ts-enum-util";

export interface ISelectedRecipe {
    item?: Items;
    itemsPerSecond: number;
}

export const RecipePicker = () => {
    const [selectedRecipes, setSelectedRecipes] = useState<Array<ISelectedRecipe>>([
        {item: Items.IRON_PLATE, itemsPerSecond: 1}
    ]);

    const selectedItems = selectedRecipes.map(s => s.item);
    const remainingItems = $enum(Items).getValues().filter(k => selectedItems.includes(k) === false);

    const onChange = useCallback((ref, newValues) => {
        const newSelection = [...selectedRecipes];
        newSelection.splice(selectedRecipes.indexOf(ref), 1, newValues)
        setSelectedRecipes(newSelection.filter(n => n));
    }, [selectedRecipes]);

    const onNewRecipeClick = useCallback(() => {
        setSelectedRecipes([
            ...selectedRecipes,
            {
                item: undefined,
                itemsPerSecond: 1
            }
        ])
    }, [selectedRecipes]);

    return <Card>
        <h5 className={'bp3-heading'}>Selected recipes</h5>
        {selectedRecipes.map(selectedRecipe =>
            <RecipePickerItem
                selectedRecipe={selectedRecipe}
                key={selectedRecipe.item}
                onChange={onChange}
                availableItems={remainingItems}/>
        )}
        <Button icon={'plus'} onClick={onNewRecipeClick}>Add new recipe</Button>
    </Card>;
}