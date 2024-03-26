import styled from 'styled-components';

export const StyledEcosystem = styled.div`
    height: 100vh;
    padding: 8rem 0;
    position: relative;

    .background {
        font-size: 10rem;
        text-transform: uppercase;
        color: ${(props) => props.theme.primaryTextColor};
        position: relative;

        color: #e0dfdb;
        /* border-top: 1px solid #dcdbd6; */
        border-bottom: 1px solid #dcdbd6;
        padding: 0 8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        div {
        }

        .stroke {
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 2px;
            /* margin: 2rem 0; */
        }

        .heading-1 {
            position: relative;

            span {
                position: absolute;
                transform: rotate(-90deg);
                font-size: 8rem;
                color: ${(props) => props.theme.primaryTextColor};
                bottom: 25%;
                left: 28%;
            }
        }

        .heading-2 {
            position: relative;

            span {
                position: absolute;
                /* transform: rotate(-90deg); */
                font-size: 8rem;
                color: ${(props) => props.theme.primaryTextColor};
                top: 10%;
                left: 50%;
            }
        }
    }

    .capsules-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        /* grid-template-columns: repeat(3, 1fr); */
        left: 50%;
        width: 100%;
        height: 60%;
        transform: translate(-50%, -50%);
        top: 51.5%;
        gap: 2rem;
    }

    .capsules-container-1 {
        position: absolute;
        bottom: 0;
        /* width: 100%; */
        /* padding-right: 16rem; */
    }

    .capsules-container-2 {
        position: absolute;
        bottom: 30%;
        left: 20%;
    }

    .capsules-container-3 {
        position: absolute;
        bottom: 70%;
        left: 30%;
    }
`;
