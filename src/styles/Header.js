import styled from "styled-components";
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 40px;

    img{
        width: 150px;
        height: 120px;
    }

    .link{
        display: flex;
        gap: 30px;
    }
    a{
        color: #2A3563;
        font-size: 18px;
        font-weight: 700;
        transition: all 0.4s;
    }
    a:hover{
        color: #506de6;
    }
`;
