import styled from 'styled-components'
import ContentContainer from "components/elements/ContentContainer"
import ProjectCoverImage from "components/elements/ProjectCoverImage"
import ProjectDescription from "components/modules/ProjectDescription"
import MediaGallery from 'components/modules/MediaGallery'
import ProcessSection from 'components/modules/ProcessSection'
import ProjectFeaturedMedia from 'components/modules/ProjectFeaturedMedia'
import Icon from 'components/elements/Icon'

const StyledContainer = styled.div`
    /* This margin conpensates for the banner.
     * It should always be equal to banner + header height.
     **/
    margin-top: 25vh;
`

const StyledHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledIconWrapper = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 10px;
`

export default function ProjectContent({ content }) {
    return (
        <StyledContainer>
            <ProjectCoverImage
                coverImage={content.cover_image}
            />
            <ContentContainer>
                <ProjectDescription
                    title={content.title}
                    summary={content.summary}
                    details={content.details}
                    links={content.links}
                />
                <ProjectFeaturedMedia media={content.featured_media}/>
                {content.process_sections.map(section => <ProcessSection key={section.id} content={section} />)}
                <StyledHeadingWrapper>
                    <StyledIconWrapper><Icon type={'gallery'}/></StyledIconWrapper>
                    <h3>Gallery</h3>
                </StyledHeadingWrapper>
                <MediaGallery
                    media={content.gallery_media}
                />
            </ContentContainer>
        </StyledContainer>
    )
}