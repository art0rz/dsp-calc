import React, {useState} from 'react';
import './App.scss';
import {Card, HTMLTable, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";
import {ReactComponent as Logo} from "./dsp-logo.svg";
import {IRecipe} from "./data/recipes";
import RecipePicker from "./components/RecipePicker";


const App = () => {
    const [selectedRecipes, setSelectedRecipes] = useState<Array<IRecipe>>([]);

    return (
        <div className="bp3-dark">
            <Navbar>
                <NavbarGroup>
                    <Logo className={'logo'}/>
                    <NavbarDivider/>
                    <NavbarHeading>Dyson Sphere Program Calculator</NavbarHeading>
                </NavbarGroup>
            </Navbar>
            <RecipePicker/>
            <Card>
                <h5 className={'bp3-heading'}>Factory</h5>
                <HTMLTable striped={true}>
                    <thead>
                        <tr>
                            <th>items</th>
                            <th>p/m</th>
                            <th>source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Iron ingot
                            </td>
                            <td>
                                5
                            </td>
                            <td>
                                Foo
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Iron ingot
                            </td>
                            <td>
                                5
                            </td>
                            <td>
                                Foo
                            </td>
                        </tr>
                    </tbody>
                </HTMLTable>
            </Card>
        </div>
    );
};

export default App;
