import styled from 'styled-components'
import StyledParagraph from 'components/elements/StyledParagraph'

const StyledContainer = styled.div`
    width: 100%;
`

export default function ProcessSection({ content }) {
    return (
        <StyledContainer>
            <h1>{content.header}</h1>
            <StyledParagraph>{content.summary}</StyledParagraph>
        </StyledContainer>
    )
}