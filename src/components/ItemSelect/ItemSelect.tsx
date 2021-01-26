import { ItemRenderer, Select } from '@blueprintjs/select';
import { Button, MenuItem } from '@blueprintjs/core';
import React from 'react';
import { $enum } from 'ts-enum-util';
import { ISelectProps } from '@blueprintjs/select/src/components/select/select';
import { Items } from '../../data/items';
import { getRecipeName } from '../../data/copy';
import { RecipeIcons } from '../../data/recipes';

export const renderSelectOption: ItemRenderer<Items> = (
  item,
  { handleClick, query }
) => {
  if (
    query &&
    getRecipeName(item).toLowerCase().includes(query.toLowerCase()) === false
  ) {
    return null;
  }

  return (
    <MenuItem
      text={getRecipeName(item)}
      key={item}
      icon={<img width={'18'} src={RecipeIcons[item]} />}
      onClick={handleClick}
    />
  );
};

const ItemSelectComponent = Select.ofType<Items>();

interface ItemSelectProps
  extends Omit<ISelectProps<Items>, 'items' | 'itemRenderer'> {
  placeholder: string;
  selectedItem?: Items;
}

const ItemSelect = (props: ItemSelectProps) => {
  return (
    <ItemSelectComponent
      popoverProps={{
        minimal: true,
      }}
      {...props}
      itemRenderer={renderSelectOption}
      items={$enum(Items).getValues()}
    >
      <Button
        text={
          props.selectedItem
            ? getRecipeName(props.selectedItem)
            : props.placeholder
        }
        alignText={'left'}
        rightIcon="double-caret-vertical"
        icon={
          props.selectedItem ? (
            <img width={'18'} src={RecipeIcons[props.selectedItem]} />
          ) : null
        }
      />
    </ItemSelectComponent>
  );
};

export default ItemSelect;
