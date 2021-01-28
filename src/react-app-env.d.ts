/// <reference types="react-scripts" />

declare module '*.svg' {
  import { ReactElement } from 'react';

  type _default = string;
  type ReactComponent = ReactElement;
  export default _default;
  export const ReactComponent;
}

declare module '*.scss' {
  const exp: { [key: string]: string };

  export default exp;
}
