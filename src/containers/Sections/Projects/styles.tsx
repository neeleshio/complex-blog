import styled from 'styled-components';

export const StyledProjects = styled.div`
    /* height: 100vh; */
    color: ${(props) => props.theme.primaryTextColor};
    background-color: #f9f7f0;
    border-bottom: 1px solid #000000;

    .slide-container {
        display: flex;
        padding: 10rem 8rem 10rem 5rem;
        border-bottom: 1px solid #000000;
        height: 100%;
    }
`;
