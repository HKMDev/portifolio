import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin: 2rem;
  padding: 1.9rem;
  `;

export const CardActionArea = styled.div`
  border-radius: 10px;
  background: #e7e2e2;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.4s;

  &:hover{
    background: #fcf5f5;
  }
  
  img {
    height: 140px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const CardContent = styled.div`

  h2 {
    text-align: center;
  }

  p {
    text-align: justify;
  }
`;
