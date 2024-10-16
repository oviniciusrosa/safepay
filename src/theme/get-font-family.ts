import { Platform } from "react-native";
import { ThemeType } from "styled-components/native";

export function getFontFamily(
  theme: ThemeType,
  mobileVariation: FontVariation,
  webVariation?: string
) {
  const webFontName = webVariation ?? "Poppins";

  return Platform.OS === "web" ? webFontName : theme.fonts[mobileVariation];
}
