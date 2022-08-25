import styled from "styled-components";
export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 650px){
    justify-content: space-around;
    padding: 10px;
  }

  img {
    width: 85px;
    height: 65px;
  }

  .link {
    display: flex;
    gap: 30px;
    margin-right: 2rem;

  }
  a {
    color: #2a3563;
    font-size: 18px;
    font-weight: 700;
    transition: all 0.4s;
  }
  a:hover {
    color: #1a8cd8;
  }

  @media (max-width: 650px) {
    img{
      display: none;
    }

    .link{
      margin-right: 0;
    }
  }
`;
