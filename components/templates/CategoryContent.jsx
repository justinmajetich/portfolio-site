import { useState } from 'react'
import styled from 'styled-components'
import ContentContainer from 'components/elements/ContentContainer'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectsFilter from 'components/modules/ProjectsFilter'
import parseTextToParagraphs from 'utils/parseTextToParagraphs'
import ProjectGallery from 'components/modules/ProjectGallery'
import { device } from 'utils/media-breakpoints'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media ${device.tablet} {
        margin-top: 60px;
    }
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 720px;
`

const StyledSummary = styled(StyledParagraph)`
    font-size: 1.2em;
    color: ${props => props.theme.darkGray};
`

export default function CategoryContent(props) {

    const [activeFilterTags, setActiveFilterTags] = useState([])

    function setFilterTagActivity(filter, isActive) {
        if (isActive) {
            setActiveFilterTags([...activeFilterTags, filter])
        } else {
            // Remove this filter from the activeFilterTags array.
            activeFilterTags.splice(activeFilterTags.indexOf(filter), 1)
            setActiveFilterTags([...activeFilterTags])
        }
    }

    return (
        <ContentContainer
            categoryID={props.content.id}
        >
            <StyledContainer>
                <StyledWrapper>
                    <h1>{props.content.title}</h1>
                    {parseTextToParagraphs(props.content.summary, StyledSummary)}
                    <ProjectsFilter
                        tags={props.content.tags}
                        setFilterTagActivity={setFilterTagActivity}
                        categoryID={props.content.id}
                    />
                </StyledWrapper>
                <ProjectGallery
                    projects={props.content.projects}
                    activeFilterTags={activeFilterTags}
                    categorySlug={props.content.slug}
                    categoryID={props.content.id}
                />
            </StyledContainer>
        </ContentContainer>
    )
}