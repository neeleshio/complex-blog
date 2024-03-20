import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    border: 1px solid #24232f;
    display: flex;
    border-radius: 4px;
    align-items: center;
    padding: 0 1.2rem;
    margin-left: 8rem;

    input {
        outline: none;
        border: 0;
        background-color: transparent;
        padding: 1rem 0;
        padding-right: 1rem;
        width: 30rem;
        font-size: 1.1rem;
        font-family: 'Tomorrow', sans-serif;
    }

    .key-shortcut {
        font-size: 1rem;
        color: ${(props) => props.theme.secondaryTextColor};
    }
`;
