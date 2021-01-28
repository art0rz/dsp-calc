import { ItemRenderer, Select } from '@blueprintjs/select';
import { Button, MenuItem } from '@blueprintjs/core';
import React, { useCallback } from 'react';

interface ListType<T> {
  value: T;
  label: string;
  icon: string;
}

interface ItemSelectProps<T> {
  placeholder: string;
  selectedItem?: T;
  list: Array<T>;
  getTranslation: (id: T) => string;
  getIcon: (id: T) => string;
  onItemSelect: (id: T) => void;
}

const ItemSelect = <T extends unknown>(props: ItemSelectProps<T>) => {
  const ItemSelectComponent = Select.ofType<ListType<T>>();
  const renderSelectOption: ItemRenderer<ListType<T>> = (
    { value, label, icon },
    { handleClick, query }
  ) => {
    if (query && label.toLowerCase().includes(query.toLowerCase()) === false) {
      return null;
    }

    return (
      <MenuItem
        text={label}
        icon={<img width={'18'} src={icon} />}
        onClick={handleClick}
      />
    );
  };

  const onItemSelect = useCallback((item: ListType<T>) => {
    props.onItemSelect(item.value);
  }, []);

  const itemsList = props.list.map(item => ({
    value: item,
    label: props.getTranslation(item),
    icon: props.getIcon(item),
  }));

  return (
    <ItemSelectComponent
      popoverProps={{
        minimal: true,
      }}
      itemRenderer={renderSelectOption}
      items={itemsList}
      onItemSelect={onItemSelect}
      activeItem={
        props.selectedItem
          ? itemsList.find(item => item.value === props.selectedItem)
          : undefined
      }
      itemsEqual={(item1: ListType<T>, item2: ListType<T>) =>
        item1.value === item2.value
      }
      itemListPredicate={(query: string, items) =>
        items.filter(item =>
          item.label.toLowerCase().includes(query.toLowerCase())
        )
      }
    >
      <Button
        text={
          props.selectedItem
            ? props.getTranslation(props.selectedItem)
            : props.placeholder
        }
        alignText={'left'}
        rightIcon="double-caret-vertical"
        icon={
          props.selectedItem ? (
            <img width={'18'} src={props.getIcon(props.selectedItem)} />
          ) : null
        }
      />
    </ItemSelectComponent>
  );
};

export default ItemSelect;
