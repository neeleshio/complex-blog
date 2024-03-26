import styled from 'styled-components';

export const StyledBlogCardMain = styled.div`
    color: ${(props) => props.theme.primaryTextColor};
    padding: 5rem 10rem 5rem 0;
    border-right: 1px solid #000000;

    .heading {
        display: flex;
        flex-direction: column;

        &-1 {
            font-size: 5rem;
            font-weight: 500;
            margin-bottom: 0.6rem;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        max-width: 420px;

        .title {
            font-weight: 700;
            font-size: 1.8rem;
        }

        .description {
            font-size: 1.3rem;
            margin: 2rem 0;
        }

        .read-more-container {
            display: flex;
            align-items: center;

            span {
                font-size: 1.4rem;
                font-weight: 700;
                margin-right: 1rem;
            }
        }
    }

    .img {
        margin: 4rem 0 3rem 0;
        img {
            object-fit: cover;
            filter: grayscale(0.3);
        }
    }
`;
