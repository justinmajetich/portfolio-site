import styled from 'styled-components'
import StyledParagraph from 'components/elements/StyledParagraph'
import { device } from 'utils/media-breakpoints'
import Image from 'next/image'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'
import MediaWrapper from 'components/elements/MediaWrapper'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 720px;
`

const StyledImageWrapper = styled.div`
    align-self: center;
    font-size: 0;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;

    @media ${device.tablet} {
        margin-top: 40px;
        margin-bottom: 10px;
    }
`

const StyledHeader = styled.h2`
    margin-top: 30px;

    @media ${device.tablet} {
        margin-top: 40px;
    }
`

const StyledMargin = styled.div`
    margin: 10px;
`

export default function ProcessSection({ content }) {
    // Pass media data in within new media object to meet MediaWrapper requirements.
    const media = { strapi_media: content.strapi_media, other_media: content.other_media }
    
    return (
        <StyledContainer>
            {content.header ? <StyledHeader>{content.header}</StyledHeader> : <StyledMargin />}
            {ParseTextToParagraphs(content.summary, StyledParagraph)}
            {content.strapi_media || content.other_media ?
                <StyledImageWrapper>
                    <MediaWrapper media={media}/>
                    {/* <Image
                        src={content.media.url}
                        alt={content.media.alternativeText}
                        width={content.media.width}
                        height={content.media.height}
                    /> */}
                </StyledImageWrapper>         
                : null
            }
        </StyledContainer>
    )
}