import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin: 2rem;
  padding: 1.9rem;
`;

export const CardActionArea = styled.div`
  background: #f5f5f5;
  border-radius: 10px;

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
    padding: 1rem;
    text-align: justify;
  }
`;
