import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* margin-bottom: 20px; */
`

const StyledTagWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70px;
    background-color: ${props => props.theme.paleLavender};
    border-radius: 3px;
    margin: 0px 10px 10px 0px;
    padding: 0px 5px;
    opacity: 0.8;
`

const StyledText = styled.p`
    font-size: 1em;
    font-weight: 500;
    color: ${props => props.theme.darkGray};
    line-height: 140%;
    margin: 1px 3px 2px 3px;
`

export default function ProjectTags(props) {
    return (
        <StyledContainer>
            {props.tags.map(tag => {
                return (
                    <StyledTagWrapper key={tag.id}>
                        <StyledText>{tag.name}</StyledText>
                    </StyledTagWrapper>
                )
            })}
        </StyledContainer>
    )
}