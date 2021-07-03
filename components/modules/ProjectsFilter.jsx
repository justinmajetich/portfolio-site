import styled from 'styled-components'
import FilterTag from 'components/elements/FilterTag'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const StyledTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin-top: 40px;
`

export default function ProjectsFilter(props) {
    return (
        <StyledContainer>
            <StyledTagsContainer>
                {props.tags.map(tag => {
                    return (
                        <FilterTag
                            key={tag.id}
                            tag={tag}
                            setFilterTagActivity={props.setFilterTagActivity}
                            categoryID={props.categoryID}
                        />
                    )}
                )}
            </StyledTagsContainer>   
        </StyledContainer>
    )
}