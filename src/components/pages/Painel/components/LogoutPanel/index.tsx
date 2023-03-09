import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { ChevronTopIcon, LogoutIcon, PersonIcon } from '@/assets/icons'
import { removeCookies } from 'cookies-next'
import { useRouter } from 'next/navigation'

export default function LogoutPanel() {
  const [modalLogOutOpen, setModalLogOutOpen] = useState<boolean>(false)

  const router = useRouter()

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalLogOutOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <S.Container isOpen={modalLogOutOpen}>
      <button
        className="chevronHandleLogOutVisibility"
        onClick={() => {
          setModalLogOutOpen(!modalLogOutOpen)
        }}
      >
        <div className="avatarPerson">
          <PersonIcon />
        </div>
        <ChevronTopIcon />
      </button>
      <S.ModalLogOut isOpen={modalLogOutOpen} ref={wrapperRef}>
        <button
          onClick={() => {
            removeCookies('AuthorizedConsorcioAdmin')
            router.push('/painel')
          }}
        >
          <LogoutIcon />
          <p className="logoutText">Sair</p>
        </button>
      </S.ModalLogOut>
    </S.Container>
  )
}
