import Link from 'next/link'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const bgPulse = props => keyframes`
    0% { transform: translateX(0px); }
    50% { transform: translateX(${props.categoryID % 2 == 0 ? '15px' : '-15px'}); }
    100% { transform: translateX(0px); }
`

const StyledButtonContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 300px;
    height: 120px;

    margin-bottom: 60px;

    cursor: pointer;
`

const StyledButtonBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    border-radius: 60px;

    background-image: linear-gradient(to ${props => props.categoryID % 2 == 0 ? 'right' : 'right'}, ${props => props.theme[props.categoryID]}, 50%, rgba(255, 255, 255, 0) 95%);
    background-size: ${props => props.isHovered ? '160% 200%' : '60% 80%'};
    background-position: ${props => props.categoryID % 2 == 0 ? 'left' : 'left'};
    background-repeat: no-repeat;

    filter: ${props => props.isHovered ? 'blur(45px)' : 'blur(15px)'};

    transition: 0.65s ease-in-out;

    /* animation: ${bgPulse} 2.5s ${props => props.categoryID / 3}s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite; */
`

const StyledButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 30px;
    text-align: ${props => props.categoryID % 2 == 0 ? 'left' : 'left'};

    h2 {
        margin: 0;
    }

    p {
        font-size: 1em;
        margin: 0;
    }
`

export default function CategoryNavButton(props) {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <Link href={props.sectionID}>
            <StyledButtonContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <StyledButtonBackground
                    categoryID={props.categoryID}
                    isHovered={isHovered}
                />
                <StyledButtonContent
                    categoryID={props.categoryID}
                >
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </StyledButtonContent>
            </StyledButtonContainer>
        </Link>
    )
}