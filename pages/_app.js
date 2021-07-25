import { createGlobalStyle, ThemeProvider } from 'styled-components'

// My top font choices: Laila, Work Sans, Roboto, Assistant, Lato, Barlow, Source Sans Pro
const theme = {
  1: '#66E1A6',
  2: '#DB9BF1',
  3: '#FFDF72',
  darkGray: '#606060',
  mediumGray: '#CDCDCD',
  lightGray: '#F0F0F0',
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
    font-family: Helvetica Neue, sans-serif;
    /* font-family: ${theme.headerFont}, Helvetica Neue, sans-serif; */
    font-weight: 600;
    /* line-height: 140%; */
  }

  h1 {
    margin: 0px 0px 20px 0px;
    font-size: 3.5em;
    line-height: 100%;
  }

  h2 {
    margin: 0px 0px 10px 0px;
    font-size: 2em;
    line-height: 120%;
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
