import ContentContainer from 'components/elements/ContentContainer'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectsFilter from 'components/modules/ProjectsFilter'
import parseTextToParagraphs from 'utils/parseTextToParagraphs'
import ProjectGallery from 'components/modules/ProjectGallery'

export default function CategoryContent(props) {
    return (
        <ContentContainer>
            <h1>{props.content.title}</h1>
            {parseTextToParagraphs(props.content.summary, StyledParagraph)}
            <ProjectsFilter fitlerTags={props.content.tags} />
            <ProjectGallery
                projects={props.content.projects}
                categorySlug={props.content.slug}
            />
        </ContentContainer>
    )
}