import styled from 'styled-components'
import ContentContainer from "components/elements/ContentContainer";
import ProjectCoverImage from "components/elements/ProjectCoverImage";
import ProjectDescription from "components/modules/ProjectDescription";
import MediaGallery from 'components/modules/MediaGallery';

const StyledContainer = styled.div`
    /* This margin conpensates for the banner.
     * It should always be equal to banner + header height.
     **/
    margin-top: 30vh;
`

export default function ProjectContent(props) {
    return (
        <StyledContainer>
            <ProjectCoverImage />
            <ContentContainer>
                <ProjectDescription />
                <h1>Gallery</h1>
                <MediaGallery 
                    images={[
                        {src: '/images/vr-wheelchair.jpg', description: 'VR Wheelchair Logo'},
                        {src: '/images/resume.png', description: 'Resume'},
                        {src: '/images/rest-for-the-wicked.png', description: 'REST for the Wicked - Main Interface'},
                        {src: '/images/cards/heaven-sq-300px.png', description: 'Album Cover'},
                        {src: '/images/vr-wheelchair-demo.gif'}
                    ]}
                />
            </ContentContainer>
        </StyledContainer>
    )
}