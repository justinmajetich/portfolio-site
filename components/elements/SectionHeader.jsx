import styled from 'styled-components'

const StyledSectionHeader = styled.h1`
    font-size: 2.5em;
    margin: 10px 0;
`

export default function SectionHeader(props) {
    return (
            <StyledSectionHeader>
                {props.sectionTitle}
            </StyledSectionHeader>
    )
}