export interface propsPage {
  name: string;
  path: string;
  subpages?: propsPage[]
}

export interface propsPanel {
  pages: Array<propsPage>;
}
