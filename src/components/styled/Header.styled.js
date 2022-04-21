import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 5px;
`;
export const StyledHomeHeader = styled(StyledHeader)`

`;
export const HeaderEmptyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  cursor: pointer;
  font-family: 'Abril Fatface', cursive;
  font-family: 'BioRhyme', serif;
  font-size: large;
  height: 5vh;
`


export const SearchBox = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
  width: 50vw;

  input {
    height: 40px;
    width: 100%;
    border: 1px solid gray;
    font-size: 18px;
    border-radius: 16px;
    transition: transform 0.5s;
    background-color: white;
    color: #000;
    padding-left: 10px;
    margin-right: 10px;

    &:hover {
      transition: all 200ms;
      transform: scale(1.01);
    }

    &:focus {
      border: 1px solid #00381f;
      outline: none;
    }
  }
`;

export const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({theme})=> theme.colors.light};
`
