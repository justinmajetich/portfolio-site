import styled from 'styled-components'
import StyledParagraph from 'components/elements/StyledParagraph'
import { device } from 'utils/media-breakpoints'
import Image from 'next/image'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const StyledImageWrapper = styled.div`
    align-self: center;
    max-width: 640px;
    font-size: 0;
    margin-top: 30px;
    margin-bottom: 10px;

    @media ${device.tablet} {
        margin-top: 40px;
        margin-bottom: 10px;
    }
`

const StyledHeader = styled.h3`
    margin-top: 30px;

    @media ${device.tablet} {
        margin-top: 40px;
    }
`

const StyledMargin = styled.div`
    margin: 10px;
`

export default function ProcessSection({ content }) {

    return (
        <StyledContainer>
            {content.header ? <StyledHeader>{content.header}</StyledHeader> : <StyledMargin />}
            {ParseTextToParagraphs(content.summary, StyledParagraph)}
            {content.media ?
                <StyledImageWrapper>
                    <Image
                        src={content.media.url}
                        alt={content.media.alternativeText}
                        width={content.media.width}
                        height={content.media.height}
                    />
                </StyledImageWrapper>         
                : null
            }
        </StyledContainer>
    )
}