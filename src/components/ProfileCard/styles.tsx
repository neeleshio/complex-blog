import styled from 'styled-components';

export const StyledProfileCard = styled.div`
    color: ${(props) => props.theme.primaryTextColor};

    .company {
        color: ${(props) => props.theme.primaryTextColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;

        span {
            font-size: 1.8rem;
            text-transform: uppercase;
        }

        .svg-container {
            border-radius: 50%;
            border: 1px solid ${(props) => props.theme.primaryTextColor};
            padding: 0.3rem;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
        }
    }

    .user-card {
        border-radius: 10px;
        /* height: 100%; */
        /* box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px; */

        .img-container {
            /* width: 50px;
            height: 50px; */
            border-radius: 50px;
            overflow: hidden;
            display: inline-block;
        }

        .name {
            /* text-transform: uppercase; */
            font-size: 10rem;
            font-weight: 700;
            text-align: center;

            .hey {
                font-size: 5rem;
            }
        }
    }
`;
