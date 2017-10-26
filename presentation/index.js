// Import React
import React from "react";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle-theme-nova";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("prismjs/themes/prism-tomorrow.css");
require("prismjs/prism");
require("prismjs/components/prism-jsx");

require("../assets/style.css");

const images = {
  logoKrack: require("../assets/logo-krack.png"),
  fourWayHandshake: require("../assets/4-way-handshake.png"),
  formalProof: require("../assets/formal-proof.png"),
  tweet: require("../assets/tweet1.png")
};

const presentationUrl = "https://nymous.github.io/forma-krack";

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme} contentHeight={800} contentWidth={1300}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logoKrack} height={400} margin="0px auto 40px"/>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            L'attaque KRACK
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Les créateurs du Wifi en ont-ils consommé ?
          </Text>
          <Link margin="30px 0 0" href={presentationUrl} textColor="purple">{presentationUrl}</Link>
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
            <Appear><ListItem>AP identifié par un SSID et adresse MAC</ListItem></Appear>
            <Appear><ListItem>
              Plusieurs versions :
              <List>
                <Appear><ListItem>802.11a</ListItem></Appear>
                <Appear><ListItem>802.11b (1999, 2.4GHz, 11Mbps, 35m)</ListItem></Appear>
                <Appear><ListItem>802.11g (2003, 2.4GHz, 54Mbps, 38m)</ListItem></Appear>
                <Appear><ListItem>802.11n (2009, 2.4GHz/5GHz, 600Mbps, 70m)</ListItem></Appear>
                <Appear><ListItem>802.11ac (2013, 5GHz, 3466.8Mbps, 35m)</ListItem></Appear>
                <Appear><ListItem>802.11ad (2012, 60GHz, 6757Mbps, 3.3m)</ListItem></Appear>
              </List>
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
          <Heading size={1} fit caps lineHeight={1}>Focus sur le IEEE 802.11i-2004</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            (ou WPA pour les intimes)
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} fit>Fonctionnement du WPA</Heading>
          <Text textColor="tertiary" size={2} bold>Le « Four-way handshake »</Text>
          <Appear><Text>Objectif : Le client et l'AP doivent se prouver qu'ils connaissent tous les deux la clé,
            sans la transférer</Text></Appear>
          <Layout>
            <Appear>
              <Fill>
                <Image src={images.fourWayHandshake} width="500px" margin="0 40px"/>
              </Fill>
            </Appear>
            <Fill>
              <List ordered margin="0 40px">
                <Appear><ListItem><Text>L'AP envoie un <i>nonce</i> au client</Text></ListItem></Appear>
                <Appear><ListItem><Text>Le client dérive la clé utilisée, et répond avec son <i>nonce</i> et les données
                  d'authentification</Text></ListItem></Appear>
                <Appear><ListItem><Text>L'AP dérive à son tour la clé, et envoie une clé de broadcast au
                  client</Text></ListItem></Appear>
                <Appear><ListItem><Text>ACK du client</Text></ListItem></Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={1} fit>Alors où est la faille ?</Heading>
          <List>
            <Appear>
              <ListItem><Text>Le chiffrement utilisé est sécurisé, <i>si et seulement si</i> la clé change à chaque
                paquet, et
                n'est jamais réutilisée.</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem><Text>Ce prérequis est assuré par un <i>vecteur d'initialisation</i> incrémenté à chaque
                échange, et
                initialisé par le nonce.</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem><Text>Problème : il est possible de bloquer <i>l'ACK du message 3</i> envoyé par le client à
                l'AP, ce qui
                la forçait à renvoyer le message 3.</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem><Text>Conséquence : le vecteur d'initialisation est remis à zéro ➡ réutilisation d'une clé ➡
                déchiffrement
                de messages possible</Text></ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit>L'attaque KRACK proprement dite<br/>(ou Key Reinstallation AttaCK)</Heading>
          <Appear>
            <div>
              <Text>Annoncée publiquement le 16 octobre 2017</Text>
              <Image src={images.tweet}/>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={1} fit>L'attaque KRACK proprement dite<br/>(ou Key Reinstallation AttaCK)</Heading>
          <Text textColor="tertiary" size={2} bold>Conséquences</Text>
          <Appear><Text>Problème dans la spécification du protocole ➡ toutes les implémentations sont touchées</Text></Appear>
          <List>
            <Appear><ListItem>Injection de paquets</ListItem></Appear>
            <Appear><ListItem>Déchiffrement du trafic (surtout Linux & Android > 6)</ListItem></Appear>
            <Appear><ListItem>Modification de paquets (ex : SSL stripping)</ListItem></Appear>
            <Appear><ListItem>Modification de paquets (ex : SSL stripping)</ListItem></Appear>
            <Appear><ListItem>On n'obtient PAS le mot de passe du Wi-fi</ListItem></Appear>
          </List>
          <Link href="https://youtu.be/Oh4WURZoR98">Démo (YouTube)</Link>
        </Slide>
        <Slide>
          <Heading size={1} fit>Mais dis moi Nymous...</Heading>
          <Appear>
            <Text>
              J'ai lu que ce protocole a été prouvé formellement, avec des mathématiques compliquées de cryptographe.
            </Text>
          </Appear>
          <Appear>
            <Image src={images.formalProof}/>
          </Appear>
          <Appear>
            <Text>Comment a-t-on pu trouver une faille ? Et pourquoi seulement 13 ans après "l'invention" du WPA
              ?</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading>Sources</Heading>
          <List>
            <ListItem>
              <Link href="https://www.krackattacks.com/">
                Site officiel
              </Link>
            </ListItem>
            <ListItem>
              Wikipédia
              : <Link href="https://en.wikipedia.org/wiki/Wi-Fi">Wifi</Link>
              , <Link href="https://en.wikipedia.org/wiki/IEEE_802.11">IEEE 802.11</Link>
              , <Link href="https://en.wikipedia.org/wiki/Wired_Equivalent_Privacy">WEP</Link>
              , <Link href="https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access">WPA</Link>
              , <Link href="https://en.wikipedia.org/wiki/KRACK">KRACK attack</Link>
              , <Link href="https://en.wikipedia.org/wiki/IEEE_802.11i-2004">protocole WPA</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/kristate/krackinfo">Liste des fabricants touchés et des mises à jour</Link>
            </ListItem>
            <ListItem>
              <Link href="https://blog.cryptographyengineering.com/2017/10/16/falling-through-the-kracks/">Article
                expliquant pourquoi la faille a été découverte si tard</Link>
            </ListItem>
          </List>
          <Link margin="30px 0 0" href={presentationUrl} textColor="purple">{presentationUrl}</Link>
        </Slide>
      </Deck>
    );
  }
}
