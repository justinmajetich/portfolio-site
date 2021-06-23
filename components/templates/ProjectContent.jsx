import styled from 'styled-components'
import ContentContainer from "components/elements/ContentContainer";
import ProjectCoverImage from "components/elements/ProjectCoverImage";
import ProjectDescription from "components/modules/ProjectDescription";
import MediaGallery from 'components/modules/MediaGallery';
import ProcessSection from 'components/modules/ProcessSection';

const StyledContainer = styled.div`
    /* This margin conpensates for the banner.
     * It should always be equal to banner + header height.
     **/
    margin-top: 25vh;
`

export default function ProjectContent({ content }) {
    return (
        <StyledContainer>
            <ProjectCoverImage
                coverImage={content.cover}
            />
            <ContentContainer>
                <ProjectDescription
                    title={content.title}
                    summary={content.summary}
                    details={content.details}
                    links={content.links}
                />
                
                {content.process_sections.map(section => <ProcessSection key={section.id} content={section} />)}
                <h1>Gallery</h1>
                <MediaGallery
                    media={content.media_gallery.media}
                />
            </ContentContainer>
        </StyledContainer>
    )
}