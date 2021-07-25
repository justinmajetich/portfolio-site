import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const StyledTagWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.darkGray};
    border-radius: 4px;
    margin: 0px 8px 0px 0px;
`

const StyledText = styled.p`
    font-size: 0.7em;
    color: ${props => props.theme.darkGray};
    line-height: 110%;
    margin: 1px 3px 2px 3px;
`

export default function ProjectTags({ tags }) {
    return (
        <StyledContainer>
            {tags.map(tag => {
                return (
                    <StyledTagWrapper>
                        <StyledText>{tag.name}</StyledText>
                    </StyledTagWrapper>
                )
            })}
        </StyledContainer>
    )
}