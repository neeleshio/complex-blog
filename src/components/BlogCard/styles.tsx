import styled from 'styled-components';

export const StyledBlogCard = styled.div`
    max-width: 240px;

    .img-container {
        img {
            object-fit: cover;
            filter: grayscale(0.45);
        }
    }

    .title-container {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
        font-size: 1.8rem;
        align-items: center;

        .title {
            width: 70%;
        }

        svg {
            height: 25px;
            width: 25px;
            /* width: 25%; */
        }
    }
`;
