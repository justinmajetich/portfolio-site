import ProjectCard from 'components/modules/ProjectCard'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;
`

export default function ProjectGallery({ projects }) {
    return (
        <StyledContainer>
            {projects.map( project => {
                return (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                )}
            )}
        </StyledContainer>
    )
}