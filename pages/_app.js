import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { device } from 'utils/media-breakpoints'

// My top font choices: Laila, Work Sans, Roboto, Assistant, Lato, Barlow, Source Sans Pro
const theme = {
  1: '#66E1A6',
  2: '#DB9BF1',
  3: '#FFDF72',
  darkGray: '#4F4F4F',
  mediumGray: '#CDCDCD',
  lightGray: '#F0F0F0',
  violet: '#7024FF',
  paleLavender: '#EEE6FF',
  gradient: 'linear-gradient(90deg, rgba(241,235,255,1) 0%, rgba(229,215,255,1) 100%)',
  headerFont: 'Work Sans'
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3 {
    font-family: ${theme.headerFont}, Helvetica Neue, sans-serif;
    font-weight: 600;
  }

  h1 {
    margin: 0px 0px 20px 0px;
    font-size: 2.6em;

    @media ${device.tablet} {
      font-size: 4em;
    }

    @media ${device.laptop} {
      font-size: 5.2em;
    }
  }

  h2 {
    margin: 0px 0px 10px 0px;
    font-size: 1.8em;
    line-height: 120%;

    @media ${device.laptop} {
      font-size: 2.8em;
    }
  }

  h3 {
    margin: 0px 0px 5px 0px;
    font-size: 1.5em;
    line-height: 140%;
  }

  p {
    font-size: 1em;
    line-height: 150%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 8px;
    background-color: ${theme.lightGray};
  }

  *::-webkit-scrollbar-thumb
  {
      background-color: ${theme.mediumGray};
  }
`

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
