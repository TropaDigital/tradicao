import 'animate.css';
import axios from 'axios';
import moment from 'moment';
import React, { useCallback, useRef, useState } from 'react';
import { ContainerChatIA } from './ChatIA.styles';
import TextWithLinks from './TextWithLinks';

export interface IPropsChatIA {
  opened: boolean;
  onClose?(): void;
}
interface IMessage {
  type: 'sent' | 'received';
  date: string;
  message: string;
  icon?: React.ReactNode;
}

interface IResponse {
  data: {
    createdAt: Date;
    deletedAt: string | null;
    instanceId: number;
    interactionId: number;
    question: string;
    response: string;
    updatedAt: string;
  };
}

export default function ChatIA({ opened, onClose }: IPropsChatIA) {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>('');

  const myScroll = useRef<any>(null);

  const scrollToBottom = () => {
    myScroll.current.scrollTop = myScroll.current.scrollHeight;
  };

  const handleSubmit = useCallback(
    async (e: any) => {
      try {
        e.preventDefault();

        if (loading) throw 'Aguarde a resposta antes de perguntar novamente.';
        if (!message) throw 'Digite uma pergunta';

        setMessage('');
        messages.push({
          type: 'sent',
          date: moment().format(),
          message
        });
        setMessages([...messages]);

        setTimeout(() => {
          scrollToBottom();
        }, 100);

        setTimeout(() => {
          messages.push({
            date: moment().format(),
            message: '',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="none"
                />
                <circle cx="18" cy="12" r="0" fill="currentColor">
                  <animate
                    attributeName="r"
                    begin=".67"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle cx="12" cy="12" r="0" fill="currentColor">
                  <animate
                    attributeName="r"
                    begin=".33"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle cx="6" cy="12" r="0" fill="currentColor">
                  <animate
                    attributeName="r"
                    begin="0"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
              </svg>
            ),
            type: 'received'
          });
          setMessages([...messages]);
          setTimeout(() => {
            scrollToBottom();
          }, 100);
        }, 500);

        setLoading(true);
        const response: IResponse = await axios.post(
          'https://tropa-ia.backendtropa.com.br/interaction',
          {
            message
          },
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiJ9.Z3VpbGhlcm1lQHRyb3BhLmRpZ2l0YWwkMmIkMTAkV3FvMHJ0Y2hrbFJsY2lVamZRMENQLlNEWXE4OXBpZDR6dGdNT1MvLzRBTUhZWFM2Tng3cjY.xlcyRzJOOzm5F_72GlCSLZzzh6zeME95x5twJfr7zlg'
            }
          }
        );

        messages[messages.length - 1] = {
          date: moment().format(),
          message: response.data.response,
          type: 'received'
        };
        setMessages([...messages]);

        setTimeout(() => {
          scrollToBottom();
        }, 100);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [message]
  );

  return (
    <ContainerChatIA opened={opened}>
      <div className="head">
        <div>
          <h2>Tire suas dúvidas</h2>
          <p>de forma rápida e simples</p>
        </div>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              fill="none"
              stroke="none"
            />
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>
      </div>
      <div className="chat">
        <div className="messages" ref={myScroll}>
          {messages.map((row, key) => (
            <div
              key={key}
              className={`message animate__animated animate__fadeInLeft ${row.type}`}
            >
              <div
                className="photo"
                style={{
                  backgroundImage: 'url(/images/logo-default.png)'
                }}
              ></div>
              <div className="right">
                <div className="text">
                  {row.message && <TextWithLinks text={row.message} />}
                  {row.icon && row.icon}
                </div>
                <div className="date">
                  {moment(row.date).format('DD/MM/YYYY hh:mm')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form className="sent" onSubmit={handleSubmit}>
          <input
            value={message}
            placeholder="Qual a sua dúvida?"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            {loading ? (
              <svg
                className="loading"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="none"
                />
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                  opacity=".5"
                />
                <path
                  fill="currentColor"
                  d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    from="0 12 12"
                    repeatCount="indefinite"
                    to="360 12 12"
                    type="rotate"
                  />
                </path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="none"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </ContainerChatIA>
  );
}
