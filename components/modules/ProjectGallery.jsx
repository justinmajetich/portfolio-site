import ProjectCard from 'components/modules/ProjectCard'
import styled from 'styled-components'
import compareTags from 'utils/compareTags'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-bottom: 40px;
`

export default function ProjectGallery(props) {
    return (
        <StyledContainer>
            {props.projects.map( project => {
                if (props.activeFilterTags.length <= 0 || compareTags(props.activeFilterTags, project.tags)) {
                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            categorySlug={props.categorySlug}
                        />
                    )
                }
            })}
        </StyledContainer>
    )
}