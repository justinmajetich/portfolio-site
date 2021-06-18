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

export default function ProjectGallery(props) {
    return (
        <StyledContainer>
            <ProjectCard
                imageSrc={'/images/cards/vr-wheelchair-sq-300px.png'}
                name={'VR Wheelchair'}
            />
            <ProjectCard
                imageSrc={'/images/cards/heaven-sq-300px.png'}
                name={'As I Once Transformed Myself for You, So I Must Now Transform Myself for Heaven'}
            />
            <ProjectCard
                imageSrc={'/images/cards/vr-wheelchair-sq-300px.png'}
                name={'REST for the Wicked'}
            />
            <ProjectCard
                imageSrc={'/images/vr-wheelchair.jpg'}
                name={'As I Once Transformed Myself for You, So I Must Now Transform Myself for Heaven'}
            />
            <ProjectCard
                imageSrc={'/images/rest-for-the-wicked.png'}
                name={'VR Wheelchair'}
            />
            <ProjectCard
                imageSrc={'/images/cards/heaven-sq-300px.png'}
                name={'As I Once Transformed Myself for You, So I Must Now Transform Myself for Heaven'}
            />
        </StyledContainer>
    )
}