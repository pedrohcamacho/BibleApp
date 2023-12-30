import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import {colors, fonts} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export function Devotional() {
  return (
    <View style={styles. container}>
      <SafeAreaView/>
      <Text style={styles.title}>Seja forte e corajoso</Text>
      <ScrollView>
      <View style={{padding:10}}>
        <Text style={styles.verse}>Vocês sabem, lá no fundo do coração e da alma, que nenhuma das boas promessas que o Senhor, o seu Deus, lhes fez deixou de cumprir-se. Todas se cumpriram; nenhuma delas falhou. — Josué 23.14</Text>
      </View>
        <Text style={styles.text}>
        Os cristãos são sábios quando aceitam o que Deus planejou e perseveram em crer nas suas promessas. Elas são confiáveis e permanentes. A própria garantia do Senhor é permanente, como lemos nos Salmos: “Sim, o protetor de Israel não dormirá; ele está sempre alerta!” (Sl 121.4).
Contudo, a razão humana responde: “Isso tudo é muito bom. Até soa agradável. Mas o que estou experimentando é exatamente o oposto. Deus não apenas dorme; ele ronca! Na realidade, não há um Deus que cuida de mim ou zela por mim”.
Jacó estava certo das promessas divinas. Ele sabia que o compromisso de Deus era permanente. Mesmo assim, quando os irmãos de José ficaram irados com ele, Deus não poupou Jacó ou seu filho José. Foi como se eles não tivessem proteção alguma vinda dos santos anjos. Ninguém resistiu à ira dos irmãos de José (Gn 37.12-28). Deus e os anjos permaneceram completamente silenciosos. Até mesmo hoje eles parecem permitir que o Diabo devaste a igreja e os cristãos. Onde está Deus em tudo isso?
Exemplos como esse nos lembram que devemos crer nas promessas de Deus e nunca duvidar das suas palavras. Por Deus não mentir, ele não deixará de zelar por nós, especialmente se crermos em sua promessa. Porque ele é fiel, não pode nos abandonar quando nos apegamos ao que prometeu. Deus pode permitir que sejamos atacados, levados aos limites do inferno e até mortos. É durante esses momentos que precisamos nos lembrar de que Deus prometeu ser o nosso guardião – que nunca cochila nem dorme.
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = {
  container: {
    flex:1,
    backgroundColor:colors.white,
    alignItems:"center"
  },
  title:{
    marginTop:"5%",
    fontFamily:fonts.header,
    fontSize:18,
    color:colors.title
  },
  verse:{
    marginTop:"5%",
    fontFamily:fonts.verse,
    fontSize:14,
    color:colors.title
  },
  text:{
    fontFamily:fonts.text,
    fontSize:14,
    padding:20,
    color:colors.black
  }
}