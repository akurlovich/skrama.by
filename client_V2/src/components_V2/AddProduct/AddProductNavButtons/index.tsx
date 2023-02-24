import React, { FC } from 'react';
import { CommandBarButton, IIconProps, initializeIcons } from '@fluentui/react';

initializeIcons();

const addIcon: IIconProps = { iconName: 'Add' };

export interface IShowProps {
  type: boolean, 
  brand: boolean, 
  product: boolean, 
  infoType: boolean
}

interface IProps {
  setShowAddBlock: ({type, brand, product, infoType} : IShowProps) => void,
}

const AddProductNavButtonsInner: FC<IProps> = ({setShowAddBlock}) => {
  return (
    <div className="addproduct__buttons">
      <CommandBarButton
        iconProps={addIcon}
        text="Добавить продукт"
        onClick={() => setShowAddBlock({type: false, brand: false, product: true, infoType: false})}
      />
      <CommandBarButton
        iconProps={addIcon}
        text="Добавить тип"
        onClick={() => setShowAddBlock({type: true, brand: false, product: false, infoType: false})}
      />
      <CommandBarButton
        iconProps={addIcon}
        text="Добавить бренд"
        onClick={() => setShowAddBlock({type: false, brand: true, product: false, infoType: false})}
      />
      <CommandBarButton
        iconProps={addIcon}
        text="Добавить тип характеристики"
        onClick={() => setShowAddBlock({type: false, brand: false, product: false, infoType: true})}
      />
    </div>
  )
}

export const AddProductNavButtons = React.memo(AddProductNavButtonsInner)