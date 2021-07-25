import styled from 'styled-components'
import StyledParagraph from 'components/elements/StyledParagraph'
import Image from 'next/image'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 20px 0;
`

const StyledImageWrapper = styled.div`
    align-self: center;
    max-width: 640px;
    margin: 20px 0;
`

export default function ProcessSection({ content }) {

    console.log(content.media)

    return (
        <StyledContainer>
            <h3>{content.header}</h3>
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