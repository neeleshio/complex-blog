import styled from 'styled-components';

export const StyledIntroCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .display-pic {
        height: 146px;
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
        object-fit: fill;
    }

    .intro {
        text-transform: uppercase;
        color: ${(props) => props.theme.primaryTextColor};
        font-size: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 3px;
        }

        p {
            margin-top: 1rem;
            font-weight: 700;
        }
    }
`;
