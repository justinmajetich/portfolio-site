import styled from 'styled-components'

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    
    padding: 20px 10%;

    * ::selection {
        background: ${props => props.categoryID ? props.theme[props.categoryID.toString()] : ''};
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