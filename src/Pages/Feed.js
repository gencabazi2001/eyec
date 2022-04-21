import React from 'react'
import StreamCard from '../components/StreamCard'
import { FeedColContainer } from '../components/styled/Container.styled'

function Feed() {
  return (
    <FeedColContainer w="50%">
      <StreamCard/>
      <StreamCard/>
      <StreamCard/>
    
    </FeedColContainer>
  )
}

export default Feed