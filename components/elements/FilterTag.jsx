import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react'

const grow = keyframes`
    {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }    
    }
`

const growInterpolation = css`
    animation: ${grow} .25s 1;
`

const StyledBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 80px;
    height: 25px;

    margin: 6px 16px 6px 0px;

    border-radius: 10px;
    background: lightgreen;
    opacity: ${props => props.isSelected ? '0.8' : '0.5'};
    
    ${props => props.isSelected || props.isDeselected ? growInterpolation : 'animation: none;'};
`

const StyledText = styled.p`
    font-size: 0.8em;
    color: green;
    margin: 0;
`

export default function FilterTag(props) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick() {
        setIsSelected(!isSelected)
    }

    return (
        <StyledBackground
            onClick={handleClick}
            isSelected={isSelected}
        >
            <StyledText>{props.children}</StyledText>
        </StyledBackground>
    )
}