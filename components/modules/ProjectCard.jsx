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

export default function ProjectCard({ project }) {

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
                src={'http://localhost:1337' + project.cover.formats.medium.url}
                alt={project.cover.alternativeText}
                width={project.cover.formats.medium.width}
                height={project.cover.formats.medium.height}
            />
            {isHovered ? <ProjectCardOverlay title={project.title}/> : null}
        </StyledWrapper>
    )
}