import styled from "styled-components";

export const Cards = styled.div`

  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1.9rem;

  h2{
    text-align: center;
    margin-bottom: 30px;
  }
  `;

export const CardArea2 = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
  border-radius: 10px;
  background: #e7e2e2;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.4s;
  margin: 10px;

img {
  width: 20%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
}
  
  `;

export const CardArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
  border-radius: 10px;
  background: #e7e2e2;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.4s;
  margin: 10px;
  padding-bottom: 30px;

  &:hover{
    background: #fcf5f5;
  }
  
  img {
    width: 20%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  }


`;

export const CardContainer = styled.div`

text-align: center;
  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  a{
    font-size: 20px;

    &:hover{
      color: black;
    }
  }

  i{
    padding-left: 10px;
  }

`;
