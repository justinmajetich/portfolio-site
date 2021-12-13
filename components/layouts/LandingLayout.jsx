import { useState } from 'react'
import styled from 'styled-components'
import { device } from 'utils/media-breakpoints'
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import LandingContent from 'components/templates/LandingContent'

const StyledDescriptionBG = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 520px;
    background: ${props => props.theme.gradient};

    @media ${device.mobileL} {
        height: 370px;
    }

    @media ${device.tablet} {
        height: 430px;
    }

    @media ${device.laptop} {
        height: 620px;
    }
`

export default function LandingLayout({ content }) {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <StyledDescriptionBG />
            <Header
                pageID={0}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
                isLandingPage
            />
            {!menuIsActive ?
                <>
                    <LandingContent content={content}/>
                    <Footer />
                </>
            : null}
        </PageContainer>
    )
}