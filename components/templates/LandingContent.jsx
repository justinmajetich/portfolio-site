import styled from 'styled-components'
import { device } from 'utils/media-breakpoints'
import ContentContainer from 'components/elements/ContentContainer'
import LandingDescription from 'components/modules/LandingDescription'
import CategoryNavButton from 'components/elements/CategoryNavButton'


const StyledNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 80px;
`

const StlyedIDAnchor = styled.div`
    position: relative;
    top: -50px;
`

export default function LandingContent(props) {
    return (
        <ContentContainer>
            <LandingDescription />
            <StyledNavContainer>
                <StlyedIDAnchor id={'work'}/>
                <CategoryNavButton
                    title={'Code'}
                    description={'Games, XR & web'}
                    sectionID={'code'}
                    categoryID={1}
                />
                <CategoryNavButton
                    title={'Art Dept'}
                    description={'Design, direction & styling'}
                    sectionID={'art-dept'}
                    categoryID={2}
                />
                <CategoryNavButton
                    title={'Music'}
                    description={'Songwriting, scores & video'}
                    sectionID={'music'}  
                    categoryID={3}  
                />
            </StyledNavContainer>
        </ContentContainer>
    )
}