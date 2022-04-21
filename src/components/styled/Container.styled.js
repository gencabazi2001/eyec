import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${({ bg }) => bg};
  font-family: "Abril Fatface", cursive;
  font-family: "BioRhyme", serif;
  font-size: larger;
  color: ${({ theme }) => theme.colors.darker};
  p {
    cursor: pointer;
    margin: 0;
  }
  width: ${({ w }) => w};
`;

export const RowHomeContainer = styled(RowContainer)`
  margin-top: 64px;
  margin-bottom: 32px;
  width: 80%;
  justify-content: space-between;
`;

export const SideRowContainer = styled(RowContainer)`
  align-items: center;
`;

export const SideRowRegisterContainer = styled(RowContainer)`
  align-items: center;
`;


export const ColContainer = styled.div`
  display: flex;
  padding-right: 32px;
  padding-left: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w};
  background-color: ${({ theme }) => theme.colors.light};
  margin: 16px;
  border-radius: 5px;
  height: ${({ h }) => h};
  hr {
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.2;
    width: 80%;
  }
  font-family: "Abril Fatface", cursive;
  font-family: "BioRhyme", serif;
`;

export const FeedColContainer = styled(ColContainer)`
  background-color: ${({ theme }) => theme.colors.lightBackground};

`

export const HomeColContainer = styled(ColContainer)`
margin-bottom: 0px;

`;


export const MainColContainer = styled(ColContainer)`
  justify-content: start;
  background-color: ${({theme})=>theme.colors.lightBackground};

`;

export const SideColContainer = styled(ColContainer)`
  width: 70%;
  padding-right: 32px;
  padding-left: 32px;
  justify-content: center;
  hr {
    color: ${({ theme }) => theme.colors.dark};
    width: 100%;
    opacity: 0.2;
  }
`;

export const SideSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  hr {
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.2;
    width: 80%;
  }
`;

export const ProfileColContainer = styled(ColContainer)`
  h5,
  h6 {
    margin: 8px;
  }
  h6 {
    opacity: 0.5;
  }
`;
export const NavigatorContainer = styled(ColContainer)`
  border: 1px solid ${({ theme }) => theme.colors.header};
  width: 100%;
`;

export const CardContainer = styled(ColContainer)`
  box-shadow: 1px 1px 5px ${({theme})=>theme.colors.dark};
  width: 100%;
  h5,
  h6 {
    margin: 8px;
  }
  h6 {
    opacity: 0.5;
  }
`;
export const CardRowLeftContainer = styled(RowContainer)`
  align-items: center;
  justify-content: start;
`;


export const CardRowRightContainer = styled(CardRowLeftContainer)`
  align-items: center;
  justify-content: end;
`;

export const CardRowContainer = styled(CardRowLeftContainer)`
  justify-content: center;
`;

export const CardRowBetweenContainer = styled(CardRowContainer)`
  justify-content: space-between;
  h6{
    font-size: ${({fSize})=>fSize};
    &:last-child{
      font-size: small;
    }
  }
`;

export const CardHeaderContainer = styled(CardRowBetweenContainer)`
  justify-content: space-between;
`;
export const CardVideoContainer = styled(ColContainer)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
`;

export const LoginColContainer = styled(ColContainer)`
  margin-top: 0px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
  height:100vh;
`;

export const LoginContainer = styled(ColContainer)`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 15px;
  background-color:${({ theme }) => theme.colors.dark} ;
  h1, h3, a,h2, h4 ,h5{
    color: ${({ theme }) => theme.colors.light} ;
  }
  h1{
    margin-top: 32px;
  }
  h4{
    margin-bottom: 0;
  }
  form{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;
export const CardColLeftContainer = styled(ColContainer)`
  padding-left: 0px;
  margin: 0;
  justify-content: center;
  align-items: start;
  h6{
    margin: 0;
  }

`;

export const RegisterContainer = styled(LoginContainer)`
padding-bottom: 10px;
`;

export const BackgroundImageContainer = styled(ColContainer)`
  height: 100%;
  width: 100%;
  img{
    border-radius: 10px;
  }
  transition: all  300ms;
  :hover{
    height: 95%;
    transition: all  300ms;
  }
`