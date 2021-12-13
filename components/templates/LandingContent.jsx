import styled from 'styled-components'
import ContentContainer from 'components/elements/ContentContainer'
import LandingDescription from 'components/modules/LandingDescription'
import { device } from 'utils/media-breakpoints'
import FeaturedProject from 'components/modules/FeaturedProject'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
`

const StyledProjectsContainer = styled.div`
`

export default function LandingContent({ content }) {
    return (
        <ContentContainer>
            <StyledContainer>
                <LandingDescription content={content}/>
                <StyledProjectsContainer>
                    {content.projects.map( (project, i) => {
                        return (
                            <FeaturedProject
                                key={i}
                                project={project}
                            />
                        )
                    })}
                </StyledProjectsContainer>
            </StyledContainer>
        </ContentContainer>
    )
}