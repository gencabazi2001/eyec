import React from "react";
import { ColContainer, RowContainer } from "./styled/Container.styled";
import StreamCard from "./StreamCard";
function MyFeed() {
  return (
    <ColContainer w="60%">
    <StreamCard/>
    </ColContainer>
  );
}

export default MyFeed;
