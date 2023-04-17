import styled from 'styled-components';

export default function ButtonChatIa({
  color,
  onClick
}: {
  color: string;
  onClick(): void;
}) {
  const ContainerButtonChatIa = styled.div`
    display: flex;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 9999999;
    margin: 20px;
    align-items: center;
    button {
      min-width: 54px;
      max-width: 54px;
      width: 54px;
      min-height: 54px;
      max-height: 54px;
      height: 54px;
      background: #fff;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pulseColor 1s linear infinite;
      @keyframes pulseColor {
        0% {
          box-shadow: 0px 0px 0px 0px rgba(${color}, 0.4);
        }
        50% {
          box-shadow: 0px 0px 0px 20px rgba(${color}, 0.4);
        }
        100% {
          box-shadow: 0px 0px 0px 30px rgba(7, 168, 12, 0);
        }
      }
      svg {
        width: 50px;
        height: 50px;
      }
    }
    span {
      background: rgba(0, 0, 0, 0.8);
      padding: 10px;
      border-radius: 100px;
      color: #fff;
      margin-left: -10px;
      transition: all 0.2s;
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      span {
        margin-left: 10px;
        visibility: visible;
        opacity: 1;
      }
    }
  `;
  return (
    <ContainerButtonChatIa onClick={onClick}>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          viewBox="0 0 256 256"
        >
          <rect
            x="0"
            y="0"
            width="256"
            height="256"
            fill="none"
            stroke="none"
          />
          <path
            fill={`rgba(${color}, 1)`}
            d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm8-48.72v.72a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8c13.23 0 24-9 24-20s-10.77-20-24-20s-24 9-24 20v4a8 8 0 0 1-16 0v-4c0-19.85 17.94-36 40-36s40 16.15 40 36c0 17.38-13.76 31.93-32 35.28Z"
          />
        </svg>
      </button>
      <span>Tire suas dúvidas de forma rápida e simples</span>
    </ContainerButtonChatIa>
  );
}
