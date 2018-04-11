// Import React
import React from 'react'
import styled, { css } from 'styled-components'
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Image,
  Link,
  Code,
  Quote,
  BlockQuote,
  Cite
} from 'spectacle'
import logo from './getty.png'

// Require CSS
require('normalize.css')

const Row = styled.div`
  display: flex;
  margin: 20px;
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `};
`

const StyledListItem = styled(ListItem)`
  list-style: none;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']}>
        <Slide>
          <Heading fit caps>
            React Native
          </Heading>
          <Text margin="10px 0 0" fit caps bold>
            Porquê e como?
          </Text>
          <Text>by Juliano Rafael</Text>
        </Slide>
        <Slide>
          <Heading>_whoami ></Heading>
          <Row align="center">
            <Image margin="0 20px" width={200} src="https://github.com/julianorafael.png" />
            <List>
              <Appear>
                <StyledListItem>Programador desde outubro de 2014</StyledListItem>
              </Appear>
              <Appear>
                <StyledListItem>Arquiteto Front End na Getty/IO</StyledListItem>
              </Appear>
              <Appear>
                <StyledListItem>
                  Entusiasta de React, styled-components, react-primitives e react-native-*
                </StyledListItem>
              </Appear>
              <Appear>
                <StyledListItem>
                  Outros tópicos de interesse: arquitetura de aplicações, escalabilidade,
                  desenvolvimento de games, indie games, tênis, sci-fi e outras nerdices.
                </StyledListItem>
              </Appear>
            </List>
          </Row>
        </Slide>
        <Slide>
          <Image src={logo} />
          <List>
            <Appear>
              <StyledListItem>
                A Getty/IO é a maior empresa de desenvolvimento de front-end remoto da América do
                Sul, especializada em tecnologias Javascript modernas.
              </StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>
                Estamos presentes nos E.U.A., Brasil, Chile e Bélgica.
              </StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>
                Estamos contratando desenvolvedores front-end! Venha conversar com a gente!
              </StyledListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>Porquê</Heading>
          <Heading fit caps>
            React Native?
          </Heading>
          <Image src="https://media.giphy.com/media/ffJiLLtCk5Am4/giphy.gif" />
        </Slide>
        <Slide>
          <Text>
            Desenvolver apps nativos em linguagem específicas de cada plataforma é muito custoso.
          </Text>
        </Slide>
        <Slide>
          <Text>
            Manter dois apps em linguagens distintas acaba gerando divergencia entre as plataformas.
          </Text>
        </Slide>
        <Slide>
          <Text>O ciclo compila-instala das plataformas nativas é muito lento.</Text>
          <Appear>
            <Image src="https://media.giphy.com/media/3og0INAY5MLmEBubyU/giphy.gif" />
          </Appear>
        </Slide>
        <Slide>
          <Text>Não há compartilhamento de código entre as plataformas.</Text>
        </Slide>
        <Slide>
          <Text>
            React Native torna o desenvolvimento do app muito mais rápido com live reload e code
            sharing.
          </Text>
        </Slide>
        <Slide>
          <Heading>Ok. Mas e performace?</Heading>
        </Slide>
        <Slide>
          <Heading size={5}>
            React Native não é híbrido. Não é um web app renderizado em uma webview. São elementos
            NATIVOS que são criados em tempo real no background via API do React Native.
          </Heading>
        </Slide>
        <Slide>
          <Link
            href="https://www.netguru.co/blog/react-native-vs-swift-performance-development-comparison"
            target="blank"
          >
            We’ve rewritten a Swift app in React Native. Was it worth it? - Case study
          </Link>
          <Text>
            Resumo: Desenvolver um app com RN leva menos tempo do que desenvolver um app para UMA
            plataforma (seja iOS ou Android) e a diferença de performace é praticamente
            indistinguível.
          </Text>
        </Slide>
        <Slide>
          <Heading size={5}>
            A menos que você esteja fazendo um app que precise alguma API que ainda não está
            disponível ou que exista a extrema necessidade de performance (games), não há motivo
            para se desenvolver um app em linguagem nativa hoje.
          </Heading>
        </Slide>
        <Slide>
          <Heading>Quem está usando RN em produção hoje?</Heading>
        </Slide>
        <Slide>
          <Link href="https://facebook.github.io/react-native/showcase.html" target="blank">
            React Native Showcase
          </Link>
          <Row>
            <Appear>
              <Image
                height={100}
                src="https://facebook.github.io/react-native/img/showcase/airbnb.png"
              />
            </Appear>
            <Appear>
              <Image
                height={100}
                src="https://facebook.github.io/react-native/img/showcase/tesla.png"
              />
            </Appear>
            <Appear>
              <Image
                height={100}
                src="https://facebook.github.io/react-native/img/showcase/ubereats.jpg"
              />
            </Appear>
            <Appear>
              <Image
                height={100}
                src="https://facebook.github.io/react-native/img/showcase/wix.jpg"
              />
            </Appear>
          </Row>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote>
              React is such a good idea that we will spend the rest of the decade continuing to
              explore its implications and applications.
            </Quote>
            <Cite>Guillermo Rauch - @rauchg</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src="https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif" />
        </Slide>
        <Slide>
          <Heading size={3}>Ok. Como eu uso?</Heading>
          <Appear>
            <Image src="https://media.giphy.com/media/10yIEN8cMn4i9W/giphy.gif" />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3}>Vamos fazer um app.</Heading>
          <Appear>
            <Heading size={3}>E vamos testar o app ao vivo em seu smartphone!</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Image src="https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif" />
        </Slide>
        <Slide>
          <Heading>Para que isso seja possível, vamos usar</Heading>
          <Text margin="20px 0 0">
            <Code>create-react-native-app</Code>
          </Text>
        </Slide>
        <Slide>
          <Heading>O que vamos construir?</Heading>
          <Text margin="20px 0 0">Hacker News Top Stories</Text>
        </Slide>
        <Slide>
          <Heading size={3}>Instalem o Expo Client.</Heading>
          <Link href="https://expo.io/tools#client" target="blank">
            Expo Client
          </Link>
        </Slide>
        <Slide>
          <Heading size={3}>Live Code time!</Heading>
          <Image src="https://media.giphy.com/media/jXFSAvwo6YcMM/giphy.gif" />
        </Slide>
        <Slide>
          <Heading>Por hoje é só...</Heading>
          <Image src="https://media.giphy.com/media/lD76yTC5zxZPG/giphy.gif" />
        </Slide>
        <Slide>
          <Heading>Obrigado</Heading>
          <List>
            <StyledListItem>Slack devparana/react-brasil: @julianorafael</StyledListItem>
            <StyledListItem>Twitter: @julianorsfarias</StyledListItem>
            <StyledListItem>Github: @julianorafael</StyledListItem>
            <StyledListItem>Email: juliano@getty.io</StyledListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
