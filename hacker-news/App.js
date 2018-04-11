import React from 'react'
import styled from 'styled-components'
import ApolloClient from 'apollo-boost'
import { StatusBar } from 'react-native'
import { ApolloProvider } from 'react-apollo'

import StoriesList from './StoriesList'

console.disableYellowBox = true

const client = new ApolloClient({
  uri: 'https://www.graphqlhub.com/graphql'
})

const Container = styled.SafeAreaView`
  flex: 1;
`

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  padding: 16px;
`

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Container>
          <Title>Hacker News Top Stories</Title>
          <StoriesList />
        </Container>
      </ApolloProvider>
    )
  }
}
