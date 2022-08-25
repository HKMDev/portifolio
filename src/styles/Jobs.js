import styled from "styled-components";

export const JobContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    h3{
        font-weight: 700;
        text-align: center;
        padding: 2.3rem;
    }

    h6{
        font-style: italic;
        font-size: 10px;
    }
    
    .card-text{
        margin-right: auto;
    }

    .carousel-control-next-icon, .carousel-control-prev-icon{
        background-image: none;
    }
`;