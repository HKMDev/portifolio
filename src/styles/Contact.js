import styled from "styled-components";

export const ContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
  height: 150px;
  color: #ff8c32;
  margin-top: 35px;
  font-size: 22px;

  .contact {
    margin-top: 45px;
    display: flex;
    gap: 0.5rem;
  }

  svg {
    color: #fba53b;
  }

  img {
    height: 98px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    height: 200px;

    img {
      height: 60px;
    }

    .contact {
      margin-top: 20px;
      flex-direction: column;
      font-size: 16px;
    }
  }
`;
