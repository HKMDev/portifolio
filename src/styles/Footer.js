import styled from "styled-components";

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
  font-size: 19px;
  margin: 0 auto;
  background-color: #293462;
  color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media (max-width: 650px) {
    font-size: 10px;
    gap: 0.2rem;
  }
`;
