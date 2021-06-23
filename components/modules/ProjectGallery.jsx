import ProjectCard from 'components/modules/ProjectCard'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-bottom: 40px;
`

export default function ProjectGallery({ projects, categorySlug }) {
    return (
        <StyledContainer>
            {projects.map( project => {
                return (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        categorySlug={categorySlug}
                    />
                )}
            )}
        </StyledContainer>
    )
}