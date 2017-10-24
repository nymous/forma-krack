// Import React
import React from "react";
// Import Spectacle Core tags
import { Appear, BlockQuote, Quote, Cite, Deck, Heading, Image, Link, List, ListItem, Slide, Text } from "spectacle";
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
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logoKrack} height={500} margin="0px auto 40px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            L'attaque KRACK
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Les créateurs du Wifi en ont-ils consommé ?
          </Text>
        </Slide>
        <Slide>
          <Appear>
            <BlockQuote>
              <Quote>On dit LE Wifi bordel !</Quote>
              <Cite>Tous les informaticiens</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Qu'est-ce que c'est quoi dis-donc le Wifi en fait ?
          </Heading>
          <List>
            <Appear><ListItem>Technologie de réseau sans fil</ListItem></Appear>
            <Appear><ListItem>Spécifications 802.11 de l'IEEE</ListItem></Appear>
            <Appear><ListItem>SSID, adresse MAC</ListItem></Appear>
            <Appear><ListItem>
              Plusieurs versions :
              <Appear><ListItem>802.11a</ListItem></Appear>
              <Appear><ListItem>802.11b (1999, 2.4GHz, 11Mbps, 35m)</ListItem></Appear>
              <Appear><ListItem>802.11g (2003, 2.4GHz, 54Mbps, 38m)</ListItem></Appear>
              <Appear><ListItem>802.11n (2009, 2.4GHz/5GHz, 600Mbps, 70m)</ListItem></Appear>
              <Appear><ListItem>802.11ac (2013, 5GHz, 3466.8Mbps, 35m)</ListItem></Appear>
              <Appear><ListItem>802.11ad (2012, 60GHz, 6757Mbps, 3.3m)</ListItem></Appear>
            </ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>Le Wifi et la sécurité</Heading>
          <List>
            <Appear><ListItem>Masquer le SSID (inutile en pratique)</ListItem></Appear>
            <Appear><ListItem>WEP (Wired Equivalent Privacy)</ListItem></Appear>
            <Appear><ListItem>WPA (Wi-Fi Protected Access)</ListItem></Appear>
            <Appear><ListItem>WPS (Wi-Fi Protected Setup)</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading>Sources</Heading>
          <List>
            <ListItem>
              Wikipédia
              : <Link href="https://en.wikipedia.org/wiki/Wi-Fi">Wifi</Link>
              , <Link href="https://en.wikipedia.org/wiki/IEEE_802.11">IEEE 802.11</Link>
              , <Link href="https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy">WEP</Link>
              , <Link href="https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access">WPA</Link>
              , <Link href="https://en.wikipedia.org/wiki/KRACK">KRACK attack</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.krackattacks.com/">
                Site officiel
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
