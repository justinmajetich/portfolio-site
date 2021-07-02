import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  1: '#66E1A6',
  2: '#DB9BF1',
  3: '#FFE486',
  darkGray: '#606060',
  lightGray: '#F0F0F0'
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

  h1 {
    margin: 0px 0px 20px 0px;
    font-size: 3.5em;
  }

  h2 {
    margin: 20px 0;
    font-size: 2em;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.5em;
  }

  p {
    font-size: 0.9em;
    line-height: 140%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
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
