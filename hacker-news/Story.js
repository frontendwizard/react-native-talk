import React from 'react'
import styled, { css } from 'styled-components'
import { TouchableOpacity, Linking } from 'react-native'
import timeago from 'timeago.js'

const Wrapper = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  width: 100%;
`
const Title = styled.Text`
  font-size: 16px;
`
const Subtitle = styled.Text`
  font-size: 12px;
`
const Score = styled.Text`
  font-size: 28px;
  font-weight: bold;
  width: 60px;
  text-align: center;
`
const Section = styled.View`
  padding: 8px;
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
`

export default ({ item: { title, url, timeISO, score, by } }) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Wrapper>
      <Section>
        <Score>{score}</Score>
      </Section>
      <Section flex={1}>
        <Title numberOfLines={2}>{title}</Title>
        <Subtitle>{`by ${by.id} ${timeago(Date.now()).format(timeISO)}`}</Subtitle>
      </Section>
    </Wrapper>
  </TouchableOpacity>
)
