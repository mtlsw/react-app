import React, { useCallback, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import IconButton from 'scripts/components/atoms/IconButton'
import Menu from 'scripts/components/atoms/Menu'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import Select from 'scripts/components/atoms/Select'
import SearchTextField from 'scripts/components/molecule/SearchTextField/SearchTextField'
import useGoogleOAuth from 'scripts/hooks/useGoogleOAuth'
import { useAppSelector } from 'scripts/stores/reducers'
import styled, { css } from 'styled-components'

interface IHeaderContainerProps {
  onClickBack?: () => void
}

export default function HeaderContainer(props: IHeaderContainerProps) {
  const { onClickBack } = props

  const location = useLocation()

  const categoryList = useMemo(() => {
    return [{ label: '자동차', value: 'car' }] as ISelectOption[]
  }, [])

  const googleOAuth = useGoogleOAuth()
  const { userProfile } = useAppSelector((rootStore) => rootStore.auth)

  const [category, setCategory] = useState(categoryList[0])
  const [keyword, setKeyword] = useState('')
  const [isOnAlarm, setIsOnAlarm] = useState(true)

  const handleClickLogin = useCallback(() => {
    googleOAuth.login()
  }, [googleOAuth])

  const handleClickLogout = useCallback(() => {
    googleOAuth.logout()
  }, [googleOAuth])

  const handleClickBack = useCallback(() => {
    console.log('back')
  }, [])

  const renderBackButton = useMemo(() => {
    return location.pathname !== '/'
  }, [location])

  const renderSessionControl = useMemo(() => {
    if (userProfile) {
      return (
        <ProfileThumbnail
          size="m"
          src={userProfile.picture}
          popover={
            <Menu>
              <Menu.MenuItem onClick={handleClickLogout}>로그아웃</Menu.MenuItem>
            </Menu>
          }
        />
      )
    } else {
      return <button onClick={handleClickLogin}>로그인</button>
    }
  }, [userProfile, handleClickLogin])

  return (
    <Style.Container>
      {renderBackButton && (
        <IconButton icon={isOnAlarm ? 'alarmOn' : 'alarmOff'} onClick={handleClickBack} />
      )}
      <Select options={categoryList} value={category} />
      <Style.SearchTextField>
        <SearchTextField onClickSearch={setKeyword} />
      </Style.SearchTextField>
      <IconButton
        icon={isOnAlarm ? 'alarmOn' : 'alarmOff'}
        onClick={() => setIsOnAlarm(!isOnAlarm)}
      />
      {renderSessionControl}
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    display: flex;
    background: ${({ theme }) => theme.color_background_light};
    padding: 8px;
    border-radius: 0 0 5px 5px;
    gap: 8px;
  `,
  SearchTextField: styled.div`
    flex-grow: 1;
  `,
}
