import styled from 'styled-components'
import { device } from 'utils/media-breakpoints'
import ContentContainer from "components/elements/ContentContainer"
import ProjectCoverImage from "components/elements/ProjectCoverImage"
import ProjectDescription from "components/modules/ProjectDescription"
import MediaGallery from 'components/modules/MediaGallery'
import ProcessSection from 'components/modules/ProcessSection'
import ProjectFeaturedMedia from 'components/modules/ProjectFeaturedMedia'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-bottom: 40px;
    padding-top: 40px;

    @media ${device.laptop} {
        margin-bottom: 80px;
    }
`

export default function ProjectContent({ content }) {
    return (
        <ContentContainer
            categoryID={content.categories[0].id}
        >
            <StyledContainer>
                <ProjectCoverImage
                    coverImage={content.cover_image}
                />
                <ProjectDescription
                    title={content.title}
                    summary={content.summary}
                    details={content.details}
                    links={content.links}
                    tags={content.tags}
                    categoryID={content.categories[0].id}
                />
                {content.featured_media ? <ProjectFeaturedMedia media={content.featured_media}/> : null}
                {content.process_sections.map(section => <ProcessSection key={section.id} content={section} />)}
                {content.gallery_media.length != 0 ?
                    <MediaGallery
                        media={content.gallery_media}
                    />
                : null
                }
            </StyledContainer>

        </ContentContainer>
    )
}