import styled from 'styled-components'
import ContentContainer from 'components/elements/ContentContainer'
import SectionNavigation from 'components/templates/SectionNavigation'
import LandingIntroduction from 'components/modules/LandingIntroduction'
import SocialsBar from 'components/modules/SocialsBar'

const StyledSocialsBarWrapper = styled.div`
    padding: 30px;
`

export default function LandingContent(props) {
    return (
        <ContentContainer>
            <LandingIntroduction />
            <SectionNavigation />
            <StyledSocialsBarWrapper>
                <SocialsBar />
            </StyledSocialsBarWrapper>
        </ContentContainer>
    )
}