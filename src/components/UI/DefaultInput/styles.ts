import styled from "styled-components";

type Props = {
    icon: any
}

export const Container = styled.div<Props>`
    position: relative;

    input {
        padding: ${({ icon }) => icon ? "13px 16px 13px 50px" : "13px 16px"};
        border: 1px solid var(--gray-300);
        border-radius: 5px;
        font-size: 16px;
        max-width: 100%;

        &::placeholder {
            color: var(--gray-300);
            text-overflow: ellipsis;
        }
    }

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 19px;
    }
`