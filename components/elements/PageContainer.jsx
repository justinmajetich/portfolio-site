import styled from 'styled-components'
import { fadeIn } from 'utils/animations'

const StyledPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    padding-bottom: 350px;

    animation: ${fadeIn} 0.25s;
`

export default function PageContainer(props) {
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}