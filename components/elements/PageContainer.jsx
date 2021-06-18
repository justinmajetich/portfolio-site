import styled from 'styled-components'

const StyledPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    /* height: 100vh; */
`

export default function PageContainer(props) {
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}