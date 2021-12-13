import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { device } from 'utils/media-breakpoints'
import StyledParagraph from 'components/elements/StyledParagraph'
import ProjectTags from 'components/elements/ProjectTags'
import Button from 'components/elements/Button'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 140px 0px;

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const StyledImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media ${device.laptop} {
        width: 40%;
    }
`

const StyledImageWrapper = styled.div`
    width: 100%;
    min-width: 300px;
    margin: 0px 0px 40px 0px;
    cursor: pointer;

    @media ${device.laptop} {
        margin: 0px 80px 0px 0px;
        /* max-width: 450px; */
    }
`

const StyledContextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @media ${device.laptop} {
        width: 60%;
    }
`

const StyledDescriptionText = styled(StyledParagraph)`
    color: ${props => props.theme.darkGray};
    font-size: 1.4em;
    margin-top: 15px;

    @media ${device.laptop} {
        font-size: 2em;
    }
`

const StyledButtonWrapper = styled.div`
    margin-top: 40px;
`

export default function FeaturedProject({ project }) {
    return (
        <StyledContainer>
            <StyledImageContainer>
                <Link href={'/work/' + project.slug}>
                    <StyledImageWrapper>
                        <Image
                            src={project.card_image.url}
                            alt={project.card_image.alternativeText}
                            width={450}
                            height={450}
                            layout={'responsive'}
                        />
                    </StyledImageWrapper>
                </Link>
            </StyledImageContainer>
            <StyledContextContainer>
                <h2>{project.title}</h2>
                <ProjectTags tags={project.tags}/>
                <StyledDescriptionText>{project.short_summary}</StyledDescriptionText>
                <StyledButtonWrapper>
                    <Button url={'/work/' + project.slug}/>
                </StyledButtonWrapper>
            </StyledContextContainer>
        </StyledContainer>
    )
}