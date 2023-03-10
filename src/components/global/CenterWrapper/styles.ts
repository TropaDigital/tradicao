import styled from "styled-components";

export const ContentWrapper = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;

.content{
    width: clamp(300px, 100%, 1140px);
}

`