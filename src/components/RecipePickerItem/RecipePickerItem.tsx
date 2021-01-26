import {Button, ControlGroup, HTMLSelect, NumericInput} from "@blueprintjs/core";
import {Items} from "../../data/items";
import React, {useCallback} from "react";
import {ISelectedRecipe} from "../RecipePicker/RecipePicker";
import {ItemSelect} from "../ItemSelect/ItemSelect";


interface IRecipePickerItemProps {
    selectedRecipe: ISelectedRecipe;
    onChange?: (ref: ISelectedRecipe, newValues?: ISelectedRecipe) => void;
    availableItems: Array<Items>;
}

export const RecipePickerItem = ({
                                     availableItems,
                                     selectedRecipe,
                                     onChange = () => undefined
                                 }: IRecipePickerItemProps) => {
    const sendChange = useCallback((key: keyof ISelectedRecipe, newValue?: any) => {
        onChange(selectedRecipe, {
            ...selectedRecipe,
            [key]: newValue
        });
    }, [selectedRecipe, onChange]);

    const onItemsPerSecondChange = useCallback((newValue) => {
        sendChange('itemsPerSecond', newValue);
    }, [selectedRecipe]);

    const onRemove = useCallback((newValue) => {
        onChange(selectedRecipe);
    }, [selectedRecipe]);

    const onItemSelect = useCallback((item) => {
        sendChange('item', item);
    }, []);

    return <ControlGroup vertical={false}>
        <ItemSelect placeholder={'Select recipe'} onItemSelect={onItemSelect} selectedItem={selectedRecipe.item} />
        <NumericInput
            placeholder="Items p/m"
            min={1}
            value={selectedRecipe ? selectedRecipe.itemsPerSecond : 1}
            onValueChange={onItemsPerSecondChange}
        />
        {selectedRecipe && <Button icon={'cross'} onClick={onRemove}/>}
    </ControlGroup>;
}
