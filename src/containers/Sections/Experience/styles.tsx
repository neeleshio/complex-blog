import styled from 'styled-components';

export const StyledExperience = styled.div`
    width: 100%;
    height: 100vh;
    border-top: 1px solid #dcdbd6;
    border-bottom: 1px solid #dcdbd6;

    .container {
        min-width: 100%;
        padding: 8rem 8rem 0 8rem;
        /* border-bottom: 1px solid #000000; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .heading {
        color: #000000;
        font-size: 7rem;
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tiles-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 5rem 0;

        :nth-child(1) {
            border-right: none;
            border-bottom: none;
        }

        :nth-child(2) {
            border-bottom: none;
            /* padding-left: 4rem; */
        }

        :nth-child(3) {
            border-right: none;
        }
    }
`;
