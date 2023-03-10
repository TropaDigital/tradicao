import styled from "styled-components";

export const ContentWrapper = styled.div`
max-width: 100vw;
display: flex;
align-items: center;
justify-content: center;

@media(max-width: 1180px){
    padding: 0px 20px;
}

.content{
    width: clamp(300px, 100%, 1140px);
}

`