import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import StyledParagraph from 'components/elements/StyledParagraph'
import LandingScrollDirective from 'components/elements/LandingScrollDirective'


const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`

const StyledLandingDescription = styled(StyledParagraph)`
    font-size: 1.5em;
    color: ${props => props.theme.darkGray};
`

export default function LandingIntroduction(props) {
    return (
        <Div100vh>
            <StyledContainer>
                <h1>Justin Majetich</h1>
                <StyledLandingDescription>I'm a coder and interdisciplinary artist encouraging play and creating spaces for transformation.</StyledLandingDescription>
                <LandingScrollDirective />
            </StyledContainer>
        </Div100vh>
    )
}