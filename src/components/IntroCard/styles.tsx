import styled from 'styled-components';

export const StyledIntroCard = styled.div`
    .dp {
        height: 144px;
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
        object-fit: fill;
    }

    .info {
        text-transform: uppercase;
        color: ${(props) => props.theme.primaryTextColor};
        /* font-size: 2.6rem; */
    }
`;
