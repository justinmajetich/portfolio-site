import styled from 'styled-components'
import { useState } from 'react'
import { device } from 'utils/media-breakpoints'
import Image from 'next/image'
import ProjectCardOverlay from 'components/elements/ProjectCardOverlay'

const StyledWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 300px;
    height: 300px;
    margin: 20px 0;
    line-height: 0;

    cursor: pointer;

    @media ${device.laptop} {
        margin: 20px ;
    }
`

export default function ProjectCard({ project, categorySlug, categoryID }) {

    const [isHovered, setIsHovered] = useState(false)

    function handleMouseOver(e) {
        setIsHovered(true)
    }

    function handleMouseLeave(e) {
        setIsHovered(false)
    }

    function handleClick(e) {
        e.preventDefault()
        setIsHovered(true)
    }

    return (
        <StyledWrapper
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <Image
                src={project.card_image.url}
                alt={project.card_image.alternativeText}
                layout={'fill'}
                objectFit={'cover'}
            />
            {isHovered ?
                <ProjectCardOverlay
                    title={project.title}
                    slug={project.slug}
                    categorySlug={categorySlug}
                    categoryID={categoryID}
                />
                : null}
        </StyledWrapper>
    )
}