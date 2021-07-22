import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledIdentityText = styled.h1`
    font-size: 1.6em;
    font-weight: 600;
    margin: 0;

    cursor: pointer;
`

export default function Identity() {
    return (
        <StyledWrapper>
            <StyledIdentityText>JM</StyledIdentityText>
        </StyledWrapper>
    )
}