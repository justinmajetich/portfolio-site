import ProjectCard from 'components/modules/ProjectCard'
import styled from 'styled-components'
import compareTags from 'utils/compareTags'
import { device } from 'utils/media-breakpoints'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    width: 340px;
    margin: 10px 0px 40px 0px;

    @media ${device.laptop} {
        justify-content: flex-start;
        width: 680px;
        margin: 20px 0px 40px 0px;
    }
`

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default function ProjectGallery(props) {
    return (
        <StyledWrapper>
            <StyledContainer>
                {props.projects.map( project => {
                    if (props.activeFilterTags.length <= 0 || compareTags(props.activeFilterTags, project.tags)) {
                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                categorySlug={props.categorySlug}
                                categoryID={props.categoryID}
                            />
                        )
                    }
                })}
            </StyledContainer>
        </StyledWrapper>
    )
}