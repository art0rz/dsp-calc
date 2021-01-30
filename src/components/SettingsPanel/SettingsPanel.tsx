import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Drawer,
  FormGroup,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import { $enum } from 'ts-enum-util';
import ToggleButton from '../ToggleButton';
import {
  BuildingCategory,
  getBuildingsForCategory,
} from '../../data/buildings';
import {
  getBuildingCategoryName,
  getBuildingName,
  getItemName,
  getRecipeName,
} from '../../data/copy';
import { getRecipesForItem } from '../../data/recipes';
import { Item } from '../../data/item';
import './SettingsPanel.scss';
import { BeltIcon, BuildingIcons, RecipeIcons } from '../../data/icons';
import { Belt } from '../../data/belts';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  return (
    <Drawer isOpen={isOpen} className="bp3-dark drawer">
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Settings</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={'right'}>
          <Button icon={'cross'} onClick={onClose} />
        </NavbarGroup>
      </Navbar>
      <div className={'drawer'}>
        <Card>
          <h5 className={'bp3-heading'}>Preferred belt level</h5>
          <FormGroup>
            <ButtonGroup>
              {$enum(Belt).map((b, _k, _e, i) => (
                <ToggleButton
                  buttonProps={{
                    icon: <img src={BeltIcon[b]} className={'icon'} />,
                  }}
                  key={b}
                  currentValue={null}
                  onClick={() => undefined}
                  label={(i + 1).toString()}
                  value={b}
                />
              ))}
            </ButtonGroup>
          </FormGroup>
        </Card>
        <Card>
          <h5 className={'bp3-heading'}>Preferred buildings</h5>
          {$enum(BuildingCategory)
            .getValues()
            .map(category => {
              const buildings = getBuildingsForCategory(category);

              if (buildings.length > 1) {
                return (
                  <FormGroup
                    label={getBuildingCategoryName(category)}
                    key={category}
                  >
                    <ButtonGroup>
                      {buildings.map(b => (
                        <ToggleButton
                          buttonProps={{
                            icon: (
                              <img
                                src={BuildingIcons[b.id]}
                                className={'icon'}
                              />
                            ),
                          }}
                          key={b.id}
                          currentValue={null}
                          onClick={() => undefined}
                          label={getBuildingName(b.id)}
                          value={b.id}
                        />
                      ))}
                    </ButtonGroup>
                  </FormGroup>
                );
              }

              return null;
            })}
        </Card>
        <Card>
          <h5 className={'bp3-heading'}>Preferred recipes</h5>
          {$enum(Item)
            .getValues()
            .map(item => {
              const recipes = getRecipesForItem(item);

              if (recipes.length > 1) {
                return (
                  <FormGroup label={getItemName(item)} key={item}>
                    <ButtonGroup>
                      {recipes.map(b => (
                        <ToggleButton
                          key={b.id}
                          buttonProps={{
                            icon: (
                              <img src={RecipeIcons[b.id]} className={'icon'} />
                            ),
                          }}
                          currentValue={null}
                          onClick={() => undefined}
                          label={getRecipeName(b.id)}
                          value={b.id}
                        />
                      ))}
                    </ButtonGroup>
                  </FormGroup>
                );
              }

              return null;
            })}
        </Card>
      </div>
    </Drawer>
  );
};

export default SettingsPanel;
