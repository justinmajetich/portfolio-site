import styled from 'styled-components'

const StyledContainer = styled.div`
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 25px;

    margin-top: 40px;
`

const StyledCopyright = styled.p`
    font-size: 0.8em;
    color: black;
`

export default function Footer() {
    return (
        <StyledContainer>
            <StyledCopyright>2021 © Justin Majetich</StyledCopyright>
        </StyledContainer>
    )
}