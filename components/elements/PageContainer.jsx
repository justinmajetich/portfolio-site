import styled from 'styled-components'

const StyledPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    padding-bottom: 50px;

    overflow: hidden;
`

export default function PageContainer(props) {
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}