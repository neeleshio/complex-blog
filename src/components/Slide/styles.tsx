import styled from 'styled-components';

export const StyledSlide = styled.div`
    background: linear-gradient(90deg, rgba(248, 245, 238, 1) 0%, rgba(234, 231, 226, 1) 100%);
    /* max-width: 30rem; */
    flex-grow: 1;
    flex-basis: 0;

    .header {
        border-bottom: 1px solid #000000;
        padding: 2rem;
        text-align: center;
    }

    .content {
        padding: 2rem 4rem 3rem 4rem;

        .title {
            font-size: 2.2rem;
            margin-bottom: 5rem;
            text-transform: uppercase;
            /* min-width: 25rem; */
        }

        .desc {
            padding: 3rem 0;
            /* max-width: 25rem; */
        }

        svg {
            transform: rotate(-90deg);
            width: 4rem;
            height: 4rem;
        }
    }
`;
