import styled from 'styled-components';

export const StyledBlog = styled.div`
    display: flex;
    color: ${(props) => props.theme.primaryTextColor};
    /* justify-content: space-between; */
    padding: 0 8rem;
    border-bottom: 1px solid #000000;

    .blogs {
        padding: 5rem 0 3rem 10rem;
    }

    .discover-heading {
        display: flex;
        flex-direction: column;

        .heading-title {
            font-size: 5rem;
            margin-bottom: 0.6rem;
        }
    }

    .discover-blogs {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        align-items: center;
        gap: 5rem 6rem;
        margin: 4rem 0;
    }
`;
