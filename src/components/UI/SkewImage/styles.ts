import styled from "styled-components";

export const Container = styled.div`
    width: 1200px;
    height: 434px;
    transform: skew(-18deg);
    border-radius: 60px;
    overflow: hidden;
    position: absolute;
    left: -345px;

    > div {
        transform: skew(18deg);
        position: absolute;
        right: -55px;
        scale: 1.1;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }
`