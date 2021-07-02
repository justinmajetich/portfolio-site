import styled, { keyframes }from 'styled-components'
import Div100vh from 'react-div-100vh'
import StyledParagraph from 'components/elements/StyledParagraph'
import Icon from 'components/elements/Icon'

const arrowBob = keyframes`
    0% { transform: translateY(0px) scaleY(1) }
    50% { transform: translateY(-25px) scaleY(0.9) }
    100% { transform: translateY(0px) scaleY(1) }
`

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

const StyledScrollDirective = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
`

const StyledArrowWrapper = styled.div`
    position: absolute;
    bottom: 70px;
    right: 0;
    display: flex;
    align-items: flex-start;
    width: 13px;
    height: 140px;

    animation: ${arrowBob} 2s ease-in-out infinite;
`

export default function LandingIntroduction(props) {
    return (
        <Div100vh>
            <StyledContainer>
                <h1>Justin Majetich</h1>
                <StyledLandingDescription>I'm a coder and interdisciplinary artist encouraging play and creating spaces for transformation.</StyledLandingDescription>
                <StyledScrollDirective>
                    <StyledArrowWrapper>
                        <Icon type='arrowVertical'/>
                    </StyledArrowWrapper>
                </StyledScrollDirective>
            </StyledContainer>
        </Div100vh>
    )
}