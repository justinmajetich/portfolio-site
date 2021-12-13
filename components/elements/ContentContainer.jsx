import styled from 'styled-components'

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    * ::selection {
        background: ${props => props.theme.paleLavender};
    }
`

export default function ContentContainer(props) {
    return (
        <StyledContentContainer
            categoryID={props.categoryID}
        >
            {props.children}
        </StyledContentContainer>
    )
}