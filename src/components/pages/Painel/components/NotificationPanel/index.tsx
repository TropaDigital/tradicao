import React, { useEffect, useRef, useState } from "react";
// import { BellIcon } from "../../../Svg";
import * as S from "./styles";

const NotificationPanel = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  const userNotifications = [
    {
      titulo: "Novo pedido para processar",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamminus reprehenderit vitae quae?",
      wasRead: false,
    },
    {
      titulo: "Novo pedido para processar",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamminus reprehenderit vitae quae?",
      wasRead: true,
    },
    {
      titulo: "Novo pedido para processar",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamminus reprehenderit vitae quae?",
      wasRead: true,
    },
  ];

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsNotificationOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <S.Container>
        <div
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        >
          {/* <BellIcon /> */}
        </div>

        <S.NotificationContainer isNotificationPanelOpen={isNotificationOpen} ref={wrapperRef} quantity={userNotifications.length}>
          <div className="notificationHeader">
            <p>Notificações</p>
          </div>
          {userNotifications.map((notification, key) => (
            <S.NotificationWrapper wasRead={notification.wasRead} key={key}>
              <h4>{notification.titulo}</h4>
              <p>{notification.texto}</p>
            </S.NotificationWrapper>
          ))}
        </S.NotificationContainer>
      </S.Container>
    </>
  );
};

export default NotificationPanel;
