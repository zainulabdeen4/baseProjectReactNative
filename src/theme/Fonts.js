import Metrics from "./Metrics";

// const type = {
//   base: "Quicksand-Regular",
//   medium: "Quicksand-Medium",
//   bold: "Quicksand-Bold",
//   seventies: "Seventies"
// };

const type = {
  // base: "ProximaNova-Black",
  // // bold: "ProximaNova-Bold",
  // boldIt: "ProximaNova-BoldIt",
  // condLight: "ProximaNovaCond-Light",
  // condLightIt: "ProximaNovaCond-LightIt",
  // condLightWebfont: "proximanovacond-light-webfont",
  // // regular: "ProximaNovaCond-Regular",
  // regularit: "proximanovacond-regularit-webfont",
  // SemiboldIt: "ProximaNovaCond-SemiboldIt",
  // semibold: "proximanovacond-semibold-webfont",
  // Extrabold: "ProximaNova-Extrabold",
  // // light: "ProximaNova-Light",
  // lightItalic: "ProximaNova-LightItalic",
  // lightWebfont: "proximanova-light-webfont",
  // regularItalicWebfont: "proximanova-regularitalic-webfont",
  // regularWebfont: "proximanova-regular-webfont",
  // semiBoldItalic: "ProximaNova-SemiboldItalic",
  // semiBoldWebfont: "proximanova-semibold-webfont",
  // *****************  NEW Fonts
  bold: "Soleil-Bold",
  book: "Soleil-Book",
  light: "Soleil-Light",
  regular: "Soleil-Regular"
};

const size = {
  xxxSmall: Metrics.generatedFontSize(11),
  xxSmall: Metrics.generatedFontSize(13),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  normal: Metrics.generatedFontSize(16),
  medium: Metrics.generatedFontSize(18),
  large: Metrics.generatedFontSize(20),
  xLarge: Metrics.generatedFontSize(22),
  xxLarge: Metrics.generatedFontSize(28),
  xxxLarge: Metrics.generatedFontSize(50)
};

export default {
  type,
  size
};
