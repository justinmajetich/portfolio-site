import styled from 'styled-components'
import StyledParagraph from 'components/elements/StyledParagraph'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled.h1`
    font-size: 1.6em;

    margin: 10px 0;
`

const StyledLandingDescription = styled(StyledParagraph)`
    color: grey;
`

export default function LandingIntroduction(props) {
    return (
        <StyledContainer>
            <StyledHeader>Justin Majetich</StyledHeader>
            <StyledLandingDescription>I'm a coder and interdisciplinary artist encouraging play and creating spaces for transformation.</StyledLandingDescription>
        </StyledContainer>
    )
}