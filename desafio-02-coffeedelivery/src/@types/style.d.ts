import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  // ao importar o modulo styled-components e declarar dessa forma, posso adicionar novas coisas, se eu não importasse, iria sobrescrever
  export interface DefaultTheme extends ThemeType {}
}
