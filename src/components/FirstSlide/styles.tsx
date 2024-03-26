import styled from 'styled-components';

export const StyledFirstSlide = styled.div`
    /* border: 1px solid #000000; */
    /* background: rgb(248, 245, 238); */
    background: linear-gradient(90deg, rgba(248, 245, 238, 1) 0%, rgba(234, 231, 226, 1) 100%);
    padding: 0 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;

    svg {
        transform: rotate(-90deg);
        width: 15rem;
        height: 15rem;
    }

    .title {
        display: flex;
        flex-direction: column;
    }

    .featured {
        text-transform: uppercase;
        font-size: 5rem;
    }

    .projects {
        font-size: 5rem;
    }
`;
