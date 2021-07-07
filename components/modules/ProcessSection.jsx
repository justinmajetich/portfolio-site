import styled from 'styled-components'
import StyledParagraph from 'components/elements/StyledParagraph'
import Image from 'next/image'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'

const StyledContainer = styled.div`
    width: 100%;
    margin: 20px 0;
`

const StyledImageWrapper = styled.div`
    margin: 20px 0;
`

export default function ProcessSection({ content }) {
    return (
        <StyledContainer>
            <h2>{content.header}</h2>
            {ParseTextToParagraphs(content.summary, StyledParagraph)}
            {content.media_single ?
                <StyledImageWrapper>
                    <Image
                        src={content.media_single.url}
                        alt={content.media_single.alternativeText}
                        width={content.media_single.width}
                        height={content.media_single.height}
                    />
                </StyledImageWrapper>         
                : null
            }
        </StyledContainer>
    )
}