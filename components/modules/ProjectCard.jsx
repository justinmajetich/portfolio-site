import styled from 'styled-components'
import { useState } from 'react'
import Image from 'next/image'
import { device } from 'utils/media-breakpoints'
import ProjectCardOverlay from 'components/elements/ProjectCardOverlay'

const StyledWrapper = styled.div`
    overflow: hidden;

    position: relative;
    margin: 20px 0;
    line-height: 0;

    cursor: pointer;
`

export default function ProjectCard(props) {

    const [isHovered, setIsHovered] = useState(false)

    function handleMouseEnter() {
        setIsHovered(true)
    }

    function handleMouseLeave() {
        setIsHovered(false)
    }

    return (
        <StyledWrapper
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={props.imageSrc}
                alt={props.name}
                width={300}
                height={300}
            />
            {isHovered ? <ProjectCardOverlay name={props.name}/> : null}
        </StyledWrapper>
    )
}