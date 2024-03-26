import styled from 'styled-components';

export const StyledCapsule = styled.div`
    border: 1px solid #e6e5df;
    display: inline-flex;
    flex-direction: column;
    border-radius: 50%;
    width: 140px;
    height: 140px;
    color: #000000;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    backdrop-filter: blur(4px);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    .svg-container {
        border: 1px solid #cecdc8;
        border-radius: 50%;
        padding: 8px;
        display: flex;
        margin-bottom: 0.8rem;
        margin-top: 2rem;

        svg {
            filter: grayscale(0.4);
        }
    }

    span {
        letter-spacing: -0.1ch;
    }
`;
