import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Story from './Story'

const StoriesList = () => (
  <Query
    query={gql`
      {
        hn {
          topStories {
            id
            title
            timeISO
            url
            score
            by {
              id
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error</Text>
      return <FlatList data={data.hn.topStories} renderItem={Story} />
    }}
  </Query>
)

export default StoriesList
