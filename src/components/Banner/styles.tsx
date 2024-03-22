import styled from 'styled-components';

export const StyledBanner = styled.div`
    background-color: #f6f5f1;
    padding: 2rem;
    color: ${(props) => props.theme.primaryTextColor};
    display: flex;
    align-items: center;
    gap: 1rem;
    letter-spacing: -0.1ch;
    font-size: 3rem;
    text-transform: lowercase;
    font-weight: 500;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    margin: 2rem 0;
    border-radius: 10px;
    max-width: 100%;

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
