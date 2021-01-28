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

const ItemSelect = <T extends string | number>({
  onItemSelect,
  list,
  getTranslation,
  getIcon,
  selectedItem,
  placeholder,
}: ItemSelectProps<T>) => {
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
        key={value}
        text={label}
        icon={<img width={'18'} src={icon} />}
        onClick={handleClick}
      />
    );
  };

  const handleItemSelect = useCallback(
    (item: ListType<T>) => {
      onItemSelect(item.value);
    },
    [onItemSelect]
  );

  const itemsList = list.map(item => ({
    value: item,
    label: getTranslation(item),
    icon: getIcon(item),
  }));

  return (
    <ItemSelectComponent
      popoverProps={{
        minimal: true,
      }}
      itemRenderer={renderSelectOption}
      items={itemsList}
      onItemSelect={handleItemSelect}
      activeItem={
        selectedItem !== undefined
          ? itemsList.find(item => item.value === selectedItem)
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
          selectedItem !== undefined
            ? getTranslation(selectedItem)
            : placeholder
        }
        alignText={'left'}
        rightIcon="double-caret-vertical"
        icon={
          selectedItem !== undefined ? (
            <img width={'18'} src={getIcon(selectedItem)} />
          ) : null
        }
      />
    </ItemSelectComponent>
  );
};

export default ItemSelect;
