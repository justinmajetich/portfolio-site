import { useState } from 'react'
import styled from 'styled-components'
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import AboutContent from 'components/templates/AboutContent'

const StyledPageBackground = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url('/images/backgrounds/about-gradient-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default function AboutLayout({ content }) {
    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <Header
                pageID={4}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            <StyledPageBackground />
            {!menuIsActive ?
                <AboutContent content={content}/>
            : null}
            <Footer />
        </PageContainer>
    )
}