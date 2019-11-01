import 'styled-components/macro';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    size: 0 | 1 | 2 | 3 | 4;
  }
}
