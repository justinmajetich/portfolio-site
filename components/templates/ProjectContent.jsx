import styled from 'styled-components'
import ContentContainer from "components/elements/ContentContainer"
import ProjectCoverImage from "components/elements/ProjectCoverImage"
import ProjectDescription from "components/modules/ProjectDescription"
import MediaGallery from 'components/modules/MediaGallery'
import ProcessSection from 'components/modules/ProcessSection'
import ProjectFeaturedMedia from 'components/modules/ProjectFeaturedMedia'
import Icon from 'components/elements/Icon'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 720px;
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
                />
                <ProjectFeaturedMedia media={content.featured_media}/>
                {content.process_sections.map(section => <ProcessSection key={section.id} content={section} />)}
                {content.gallery_media.length != 0 ?
                    <>
                        <h2>Gallery</h2>
                        <MediaGallery
                            media={content.gallery_media}
                        />
                    </>
                : null
                }
            </StyledContainer>

        </ContentContainer>
    )
}