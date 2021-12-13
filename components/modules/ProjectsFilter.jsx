import styled from 'styled-components'
import FilterTag from 'components/elements/FilterTag'
import { device } from 'utils/media-breakpoints'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`

const StyledTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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