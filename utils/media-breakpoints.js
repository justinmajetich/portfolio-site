import { useMediaQuery } from 'react-responsive'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

  export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: size.laptop})
    return isDesktop ? children : null
  }
  export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: size.tablet, maxWidth: (parseInt(size.laptop) - 1) })
    return isTablet ? children : null
  }
  export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({maxWidth: (parseInt(size.laptop) - 1 )})
    return isMobile ? children : null
  }
  export const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: size.laptop })
    return isNotMobile ? children : null
  }
