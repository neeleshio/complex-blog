import styled from 'styled-components';

export const StyledUser = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    /* width: 100%; */

    .user-name {
        color: ${(props) => props.theme.onlineGreen};
    }

    .details {
        display: flex;
        align-items: center;

        .user-img {
            padding: 0 1.5rem;
        }

        .user-id {
            color: ${(props) => props.theme.primaryTextColor};
            text-transform: lowercase;
        }
    }
`;
