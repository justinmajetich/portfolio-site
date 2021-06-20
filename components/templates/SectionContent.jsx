import ContentContainer from 'components/elements/ContentContainer'
import SectionHeader from 'components/elements/SectionHeader'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectsFilter from 'components/modules/ProjectsFilter'
import ParseTextToParagraphs from 'utils/ParseTextToParagraphs'
import ProjectGallery from './ProjectGallery'

export default function SectionContent(props) {
    return (
        <ContentContainer>
            <SectionHeader sectionTitle={props.sectionTitle}/>
            {ParseTextToParagraphs(props.sectionDescription, StyledParagraph)}
            {/* <h2>Projects</ h2> */}
            <ProjectsFilter fitlerTags={['web', 'xr', 'mobile']} />
            <ProjectGallery />
        </ContentContainer>
    )
}