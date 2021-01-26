import {ItemRenderer, Select} from "@blueprintjs/select";
import {Button, MenuItem} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {Items} from "../../data/items";
import {$enum} from "ts-enum-util";
import {RecipeNames} from "../../data/copy";
import {RecipeIcons} from "../../data/recipes";
import {ISelectProps} from "@blueprintjs/select/src/components/select/select";

export const renderSelectOption: ItemRenderer<Items> = (item, {handleClick, query}) => {
    if (query && RecipeNames[item].toLowerCase().includes(query.toLowerCase()) === false) {
        return null;
    }

    return <MenuItem
        text={RecipeNames[item]}
        key={item}
        icon={<img width={'18'} src={RecipeIcons[item]}/>}
        onClick={handleClick}
    />
}


const ItemSelectComponent = Select.ofType<Items>();

interface ItemSelectProps extends Omit<ISelectProps<Items>, | 'items' | 'itemRenderer'> {
    placeholder: string;
    selectedItem?: Items;
}

export const ItemSelect = (props: ItemSelectProps) => {
    return <ItemSelectComponent
        popoverProps={{
            minimal: true,
        }}
        {...props}
        itemRenderer={renderSelectOption}
        items={$enum(Items).getValues()}>
        <Button text={props.selectedItem ? RecipeNames[props.selectedItem] : props.placeholder}
                alignText={'left'}
                rightIcon="double-caret-vertical"
                icon={props.selectedItem ? <img width={'18'} src={RecipeIcons[props.selectedItem]}/> : null}/>
    </ItemSelectComponent>
}