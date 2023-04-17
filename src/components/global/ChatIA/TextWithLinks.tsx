import React from 'react';

interface Props {
  text: string;
}

const TextWithLinks: React.FC<Props> = ({ text }) => {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => {
        if (word.match(/^(http|https):\/\//)) {
          return (
            <a
              key={index}
              href={word}
              style={{
                animationDelay: `${index / 50}s`
              }}
              className="btn-link animate__animated animate__fadeIn"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305c1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062" />
                  <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305c-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433" />
                </g>
              </svg>
              Clique aqui
            </a>
          );
        } else {
          return (
            word && (
              <span
                className="text-with animate__animated animate__fadeIn"
                style={{
                  animationDelay: `${index / 50}s`
                }}
                key={index}
              >
                {word.split('[btnWhatsapp]').length > 1 && (
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=8198100172&text="
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="none"
                      />
                      <path
                        fill="currentColor"
                        d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z"
                      />
                    </svg>
                  </a>
                )}
                {word.replace('[btnWhatsapp]', '')}
              </span>
            )
          );
        }
      })}
    </>
  );
};

export default TextWithLinks;
