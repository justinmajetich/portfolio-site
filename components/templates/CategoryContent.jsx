import { useState } from 'react'
import ContentContainer from 'components/elements/ContentContainer'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectsFilter from 'components/modules/ProjectsFilter'
import parseTextToParagraphs from 'utils/parseTextToParagraphs'
import ProjectGallery from 'components/modules/ProjectGallery'

export default function CategoryContent(props) {

    const [activeFilterTags, setActiveFilterTags] = useState([])

    function setFilterTagActivity(filter, isActive) {
        if (isActive) {
            setActiveFilterTags([...activeFilterTags, filter])
        } else {
            // Remove this filter from the activeFilterTags array.
            activeFilterTags.splice(activeFilterTags.indexOf(filter))
            setActiveFilterTags([...activeFilterTags])
        }
    }

    return (
        <ContentContainer>
            <h1>{props.content.title}</h1>
            {parseTextToParagraphs(props.content.summary, StyledParagraph)}
            <ProjectsFilter
                tags={props.content.tags}
                setFilterTagActivity={setFilterTagActivity}
            />
            <ProjectGallery
                projects={props.content.projects}
                activeFilterTags={activeFilterTags}
                categorySlug={props.content.slug}
            />
        </ContentContainer>
    )
}