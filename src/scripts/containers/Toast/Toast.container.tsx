import React, { useCallback, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useTimeoutFn } from 'react-use'
import { RootState, useAppDispatch, useAppSelector } from 'scripts/stores/reducers'
import { _TOAST_SET_NEXT, _TOAST_SHIFT_ARRAY } from 'scripts/stores/toast'
import Style from './Toast.container.style'

export default function ToastContainer() {
  const dispatch = useAppDispatch()
  const { isShow, currentToast } = useAppSelector((state: RootState) => state.toast)

  const [, cancelToastShowTimer, resetToastShowTimer] = useTimeoutFn(() => {
    dispatch(_TOAST_SHIFT_ARRAY())
  }, 3000)

  useEffect(() => {
    cancelToastShowTimer()
  }, [cancelToastShowTimer])

  const handleClickClose = useCallback(() => {
    cancelToastShowTimer()
    dispatch(_TOAST_SHIFT_ARRAY())
  }, [cancelToastShowTimer, dispatch])

  return (
    <CSSTransition
      in={isShow}
      timeout={300}
      classNames="toast"
      unmountOnExit
      onEnter={() => {
        resetToastShowTimer()
      }}
      onExited={() => {
        dispatch(_TOAST_SET_NEXT())
      }}
    >
      <Style.Container>
        {currentToast}
        <button onClick={handleClickClose}>close</button>
      </Style.Container>
    </CSSTransition>
  )
}
