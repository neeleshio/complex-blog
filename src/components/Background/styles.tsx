import styled from 'styled-components';

export const StyledBackground = styled.div`
    display: flex;
    /* position: absolute; */
    /* top: 50%; */

    div {
        height: 100vh;
        border: 0;
    }

    .one {
        background-color: #f5f2eb;
        flex-grow: 1;
    }
    .two {
        background-color: #faf7f0;
        flex-grow: 1;
    }
    .three {
        background-color: #f5f4ef;
        flex-grow: 4;
    }
    .four {
        background-color: #f2efe8;
        flex-grow: 1;
    }
    .five {
        background-color: #efebe5;
        flex-grow: 1;
    }

    .bg-fabric {
        position: absolute;
        width: 100vw;
        height: 100vh;
        /* z-index: 1000; */

        img {
            width: 100vw;
            height: 100vh;
        }
    }
`;
