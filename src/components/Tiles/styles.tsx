import styled from 'styled-components';

export const StyledTiles = styled.div`
    color: ${(props) => props.theme.primaryTextColor};
    display: flex;
    flex-direction: column;
    border: 1px solid #000000;
    position: relative;
    padding: 4rem 3rem;

    .position {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    .company {
        -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        font-size: 3rem;
        position: absolute;
        top: -20px;
        left: 20px;
        background-color: #f9f7f0;
        padding: 0 1rem;
    }

    .timeline {
        font-weight: 400;
        font-size: 1.3rem;
    }

    .projects {
        text-transform: uppercase;
        margin: 3rem 0 1rem 0;
        font-size: 1.4rem;

        .head {
            /* -webkit-text-fill-color: #000000; */
            /* Will override color (regardless of order) */
            /* -webkit-text-stroke-width: 1px; */
            margin-right: 1rem;
        }
    }
`;
