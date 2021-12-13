import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react'
import { device } from 'utils/media-breakpoints'

export const selectEffect = keyframes`
    {
        0% { transform: scale(1); }
        50% { transform: scale(0.9); }
        100% { transform: scale(1); }    
    }
`

const selectAnimation = css`
    animation: ${selectEffect} .25s cubic-bezier(0.42, 0.0, 0.58, 1.0) 1;
`

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    min-height: 25px;
    margin: 8px 20px 8px 0px;
    padding: 0 12px;
    cursor: pointer;
        
    @media ${device.tablet} {
        margin: 8px 10px 8px 10px;
    }
`

const StyledBackground = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.violet};
    border-radius: 6px;
    background-color: ${props => props.isSelected ? props.theme.violet : 'white'};
    ${props => props.isSelected ? selectAnimation : ''};
    transition: .25s;
`

const StyledText = styled.p`
    font-family: ${props => props.theme.headerFont}, Helvetica Neue, sans-serif;
    font-size: 1em;
    font-weight: 500;
    color: ${props => props.isSelected ? 'white' : props.theme.violet};
    margin: 5px 5px 5px 5px;
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