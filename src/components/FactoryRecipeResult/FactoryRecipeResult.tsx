import React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { IFactoryResult } from '../../lib/factory';
import FactoryRecipeResultRow from '../FactoryRecipeResultRow';

interface IFactorioRecipeResultProps {
  factoryResults: Array<IFactoryResult>;
}

const FactorioRecipeResult = ({
  factoryResults,
}: IFactorioRecipeResultProps) => {
  return (
    <HTMLTable striped={true}>
      <thead>
        <tr>
          <th></th>
          <th>items</th>
          <th>p/m</th>
          <th>source</th>
        </tr>
      </thead>
      <tbody>
        {factoryResults.map(result => (
          <FactoryRecipeResultRow
            result={result}
            factoryResults={factoryResults}
            key={result.outputItem}
          ></FactoryRecipeResultRow>
        ))}
      </tbody>
    </HTMLTable>
  );
};

export default FactorioRecipeResult;
