import styled from "styled-components";

export const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;

  h6 {
    font-style: italic;
    font-size: 10px;
  }

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-image: none;
  }
  .card-text {
    margin-left: auto;
    font-size: 10px;
    font-style: italic;
  }

  .carousel-indicators {
    button {
      background-color: #FF8C32;
    }
  }
`;
