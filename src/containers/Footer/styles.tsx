import styled from 'styled-components';

export const StyledFooter = styled.div`
    margin-top: 8rem;
    border-top: 1px solid #000000;
    color: #000000;
    display: flex;
    flex-direction: column;

    .footer-container {
        padding: 0 7rem;
        display: flex;
        border-bottom: 1px solid #000000;

        .left {
            width: 30%;
            border-right: 1px solid #000000;
            padding: 5rem 2rem 5rem 0;

            .desc {
                padding-top: 2rem;
            }
        }

        .right {
            display: flex;
            width: 70%;
            justify-content: space-evenly;
            padding: 5.5rem 0;

            .contact {
                display: flex;
                flex-direction: column;

                .contact-title {
                    margin-bottom: 1.5rem;
                }

                .mail,
                .phone {
                    text-decoration: underline;
                    margin: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
            }

            .useful-links {
                &-title {
                    display: block;
                    margin-bottom: 1.5rem;
                }
            }

            .connect {
                &-title {
                    display: block;
                    margin-bottom: 1.5rem;
                }

                &-links {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
            }
        }
    }

    .copywrite {
        padding: 2rem 7rem 5rem 7rem;
        text-transform: uppercase;
    }
`;
