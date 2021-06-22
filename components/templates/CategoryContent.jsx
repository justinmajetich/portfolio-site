import ContentContainer from 'components/elements/ContentContainer'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectsFilter from 'components/modules/ProjectsFilter'
import ParseTextToParagraphs from 'utils/ParseTextToParagraphs'
import ProjectGallery from 'components/modules/ProjectGallery'

export default function CategoryContent(props) {
    return (
        <ContentContainer>
            <h1>{props.sectionTitle}</h1>
            {ParseTextToParagraphs(props.sectionDescription, StyledParagraph)}
            {/* <h2>Projects</ h2> */}
            <ProjectsFilter fitlerTags={['web', 'xr', 'mobile']} />
            <ProjectGallery />
        </ContentContainer>
    )
}