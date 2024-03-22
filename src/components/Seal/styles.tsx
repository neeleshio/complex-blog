import styled from 'styled-components';

export const StyledSeal = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    display: flex;
    justify-content: center;

    .arrow-down {
        text-transform: none;
        color: ${(props) => props.theme.primaryTextColor};
        display: inline;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
    }
`;
