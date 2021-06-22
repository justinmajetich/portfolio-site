import FilterTag from 'components/elements/FilterTag'
import styled from 'styled-components'


const StyledTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export default function ProjectsFilter(props) {
    return (
        <StyledTagsContainer>
            {props.fitlerTags.map((tag, i) => <FilterTag key={i}>{tag.name}</FilterTag>)}
        </StyledTagsContainer>   
    )
}