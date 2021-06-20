import styled from 'styled-components'

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    height: 100%;

    padding: 0 10%;
`

export default function ContentContainer(props) {
    return (
        <StyledContentContainer>
            {props.children}
        </StyledContentContainer>
    )
}