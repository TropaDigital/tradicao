import styled from 'styled-components';

interface InputProps {
    type?: string;
}

export const Container = styled.label<InputProps>`
    display: block;
    height: 68px;
    position: relative;    
    .title {
        display: block;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        color: var(--primary);
    }
    input {
        width: 100%;
        height: 40px;
        background: var(--white);
        border: 1px solid var(--gray-400);
        outline: none;
        border-radius: 5px;
        color: var(--dark);
        padding: 12px 16px;
        margin-top: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        &:focus-visible {
        }
    }
    &.empty {
        input {
        }
    }
    &.error {
        input {
            border: 1px solid var(--status-danger);
        }
    }
    span {
        position: absolute;
        top: 0;
        right: 2%;
        color: var(--status-danger);
    }
`;