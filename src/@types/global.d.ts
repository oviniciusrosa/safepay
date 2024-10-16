import theme from "../theme";
export declare global {
  type VoidCallback = () => void;
  type FontVariation = keyof (typeof theme)["fonts"];
}
