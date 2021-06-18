import styled, { keyframes } from 'styled-components'

const StyledButtonContainer = styled.div`
    position: relative;

    width: 80%;
    max-width: 280px;

    margin: 20px;
`

export const StyledButtonBackground = styled.div`
    width: 100%;
    height: 75px;

    border: 1px solid black;
    border-radius: 10px;

    background: lightgray;
`

export const StyledButton = styled.button`
    position: absolute;
    top: -8px;
    left: -8px;

    width: 100%;
    height: 75px;

    border: 1px solid black;
    border-radius: 10px;

    background: white;
    cursor: pointer;

    transition: top .05s, left .05s;

    /* :hover {
        top: -2px;
        left: -2px;
    }

    :active {
        top: 0px;
        left: 0px;
    } */
`

export default function Button(props) {
    return (
        <StyledButtonContainer>
            <StyledButtonBackground/>
            <StyledButton>{props.text ? props.text : 'Button'}</StyledButton>
        </StyledButtonContainer>
    )
}