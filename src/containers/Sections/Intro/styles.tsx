import styled from 'styled-components';

export const StyledIntro = styled.div`
    /* position: absolute; */
    height: 100vh;
    /* padding: 15rem 0; */
    background-color: transparent;
    top: 0;
    width: 100%;

    .intro-details {
        display: flex;
        padding: 0 8rem;
    }

    .basic-details {
        width: 35%;
        color: ${(props) => props.theme.primaryTextColor};
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;

        div {
            transform: rotate(-90deg);
            font-size: 9rem;
            font-weight: bold;
        }
    }

    .position-cont {
        display: flex;
        flex-direction: column;
        width: 65%;

        .banner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 5rem;

            .b-cont {
                max-width: 80%;
            }
        }

        .position {
            color: ${(props) => props.theme.primaryTextColor};
            text-transform: uppercase;
            font-size: 4rem;
            font-weight: bold;
            padding: 0 2.5rem;

            h1 {
                letter-spacing: -0.05ch;
                margin: 1.5rem 0;
            }

            .middle {
                text-align: end;
            }
        }
    }

    .socials-container {
        background-color: #f9f6ef;
        border-top: 1px solid #dcdbd6;
        border-bottom: 1px solid #dcdbd6;
        padding: 2rem 8rem;
    }
`;
