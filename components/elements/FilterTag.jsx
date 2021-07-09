import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react'

const grow = keyframes`
    {
        0% { transform: scale(1); filter: blur(10px); }
        50% { transform: scale(0.9); filter: blur(9px); }
        100% { transform: scale(1); filter: blur(10px); }    
    }
`

const pulse = keyframes`
    {
        0% { transform: scale(1); filter: blur(10px); }
        50% { transform: scale(1.05); filter: blur(12px); }
        100% { transform: scale(1); filter: blur(10px); }    
    }
`

const pulseInterpolation = css`
    animation: ${grow} .25s ease-out 1, ${pulse} 2s .5s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite;
`

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    height: 25px;

    margin: 8px 10px 8px 10px;
    padding: 0 12px;
    cursor: pointer;
`

const StyledBackground = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: ${props => props.theme[props.categoryID]};
    opacity: ${props => props.isSelected ? '1' : '0.6'};
    
    /* ${props => props.isSelected ? growInterpolation : ''}; */
    filter: blur(10px);

    ${props => props.isSelected ? pulseInterpolation : ''}
    /* animation: ${pulse} 2s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite; */
`

const StyledText = styled.p`
    font-size: 0.8em;
    /* color: ${props => props.theme.darkGray}; */
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
        <StyledContainer
            onClick={handleClick}
        >
            <StyledBackground
                isSelected={isSelected}
                categoryID={props.categoryID}
            />
            <StyledText
                isSelected={isSelected}
            >
                {props.tag.name}
            </StyledText>
        </StyledContainer>
    )
}