import styled from 'styled-components'

const StyledPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    padding-bottom: 50px;
`

export default function PageContainer(props) {
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}