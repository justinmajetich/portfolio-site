import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react'

const grow = keyframes`
    {
        0% { transform: scale(1); }
        50% { transform: scale(0.9); }
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
    padding: 0 10px;

    border-radius: 5px;
    background: ${props => props.theme[props.categoryID]};
    opacity: ${props => props.isSelected ? '0.8' : '0.5'};
    
    ${props => props.isSelected ? growInterpolation : ''};

    cursor: pointer;
`

const StyledText = styled.p`
    font-size: 0.8em;
    font-weight: ${props => props.isSelected ? '500' : '400'};
    color: black;
    margin: 0;
`

export default function FilterTag(props) {

    const [isSelected, setIsSelected] = useState(false)

    function handleClick() {
        setIsSelected(!isSelected)
        props.setFilterTagActivity(props.tag, !isSelected)
    }

    return (
        <StyledBackground
            onClick={handleClick}
            isSelected={isSelected}
            categoryID={props.categoryID}
        >
            <StyledText
                isSelected={isSelected}
            >
                {props.tag.name}
            </StyledText>
        </StyledBackground>
    )
}