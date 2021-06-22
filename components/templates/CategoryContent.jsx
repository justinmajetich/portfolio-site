import ContentContainer from 'components/elements/ContentContainer'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectsFilter from 'components/modules/ProjectsFilter'
import ParseTextToParagraphs from 'utils/ParseTextToParagraphs'
import ProjectGallery from 'components/modules/ProjectGallery'

export default function CategoryContent(props) {

    console.log(props)

    return (
        <ContentContainer>
            <h1>{props.content.title}</h1>
            {ParseTextToParagraphs(props.content.summary, StyledParagraph)}
            <ProjectsFilter fitlerTags={props.content.tags} />
            <ProjectGallery projects={props.content.projects} />
        </ContentContainer>
    )
}