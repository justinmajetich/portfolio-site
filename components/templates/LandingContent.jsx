import styled from 'styled-components'
import ContentContainer from 'components/elements/ContentContainer'
import LandingDescription from 'components/modules/LandingDescription'
import SocialsBar from 'components/modules/SocialsBar'
import CategoryNavButton from 'components/elements/CategoryNavButton'

const StyledSocialsBarWrapper = styled.div`
    padding: 30px;
`

const StyledNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    margin-top: 10px;
`

export default function LandingContent(props) {
    return (
        <ContentContainer>
            <LandingDescription />
            <StyledNavContainer>
                <CategoryNavButton
                    name={'Code'}
                    sectionID={'code'}
                />
                <CategoryNavButton
                    name={'Art Dept'}
                    sectionID={'art-dept'}
                />
                <CategoryNavButton
                    name={'Music'}
                    sectionID={'music'}    
                />
            </StyledNavContainer>
            <StyledSocialsBarWrapper>
                <SocialsBar />
            </StyledSocialsBarWrapper>
        </ContentContainer>
    )
}