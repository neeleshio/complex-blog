import styled from 'styled-components';

export const StyledHeader = styled.div`
    padding: 2rem 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-weight: 600;

    .nav-container {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 8rem;
        justify-content: space-between;

        .nav-search {
            display: flex;
            align-items: center;
        }
    }
`;
