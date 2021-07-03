import styled from 'styled-components'
import ContentContainer from 'components/elements/ContentContainer'
import LandingDescription from 'components/modules/LandingDescription'
import CategoryNavButton from 'components/elements/CategoryNavButton'
import { device } from 'utils/media-breakpoints'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    @media ${device.laptop} {
        flex-direction: row;
        margin-top: 5vh;
    }
`

const StyledNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 350px;
    margin-top: 80px;
`

const StlyedIDAnchor = styled.div`
    position: relative;
    top: -50px;
`

export default function LandingContent(props) {

    const navData = [
        {title: 'Code', description: 'Games, XR & web', sectionID: 'code', categoryID: 1},
        {title: 'Art Dept', description: 'Design, direction & styling', sectionID: 'art-dept', categoryID: 2},
        {title: 'Music', description: 'Songwriting, scores & video', sectionID: 'music', categoryID: 3}
    ]

    return (
        <ContentContainer>
            <StyledContainer>
                <LandingDescription />
                <StyledNavContainer>
                    <StlyedIDAnchor id={'work'}/>
                    {navData.map( (nav, i) => {
                        return (
                            <CategoryNavButton
                                key={i}
                                title={nav.title}
                                description={nav.description}
                                sectionID={nav.sectionID}
                                categoryID={nav.categoryID}
                            />
                        )
                    })}
                </StyledNavContainer>
            </StyledContainer>
        </ContentContainer>
    )
}