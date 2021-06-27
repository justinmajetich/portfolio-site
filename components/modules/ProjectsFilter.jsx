import styled from 'styled-components'
import FilterTag from 'components/elements/FilterTag'


const StyledTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export default function ProjectsFilter(props) {
    return (
        <StyledTagsContainer>
            {props.tags.map(tag => {
                return (
                    <FilterTag
                        key={tag.id}
                        tag={tag}
                        setFilterTagActivity={props.setFilterTagActivity}
                    />
                )}
            )}
        </StyledTagsContainer>   
    )
}