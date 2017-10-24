// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle-theme-nova";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logoKrack: require("../assets/logo-krack.png"),
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logoKrack} height={500} margin="0px auto 40px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            L'attaque KRACK
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Les créateurs du Wifi en ont-ils consommé ?
          </Text>
        </Slide>
      </Deck>
    );
  }
}
