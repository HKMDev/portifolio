import styled from "styled-components";
export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

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
`;
