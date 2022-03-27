import { useMemo } from 'react'
import { useMediaQuery as useMediaQueryInResponsive } from 'react-responsive'

const useMediaQuery = () => {
  const isBigScreen = useMediaQueryInResponsive({ query: '(min-width: 1410px)' })
  const isTablet = useMediaQueryInResponsive({ query: '(max-width: 1409px)' })
  const isMobile = useMediaQueryInResponsive({ query: '(max-width: 320px)' })
  const isPortrait = useMediaQueryInResponsive({ query: '(orientation: portrait)' })
  const isRetina = useMediaQueryInResponsive({ query: '(min-resolution: 2dpx)' })

  return useMemo(() => {
    return {
      desktop: isBigScreen,
      tablet: isTablet,
      mobile: isMobile,
      retina: isRetina,
      portrait: isPortrait,
      maxWidth: isBigScreen ? 1442 : isTablet ? 1441 : 320,
      minWidth: isBigScreen ? 1442 : isTablet ? 321 : 320,
    } as IMediaQueryData
  }, [isBigScreen, isTablet, isMobile, isRetina, isPortrait])
}

export default useMediaQuery
