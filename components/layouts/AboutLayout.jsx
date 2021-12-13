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
`

export default function AboutLayout({ content }) {
    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <Header
                pageID={2}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            <StyledPageBackground />
            {!menuIsActive ?
                <>
                    <AboutContent content={content}/>
                    <Footer />
                </>
            : null}
        </PageContainer>
    )
}