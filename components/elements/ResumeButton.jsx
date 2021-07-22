import styled from 'styled-components'
import Link from 'next/link'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 50px;
    border: 2px solid black;
    cursor: pointer;
    transition: background-color .25s;

    :hover {
        h3 { color: white; }
        background-color: black;
    }
`

const StyledText = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    transition: color .25s;
`

export default function ResumeButton({ url }) {
    return (
        <Link href={url}>
            <StyledContainer>
                <StyledText>{'View Resume'}</StyledText>
            </StyledContainer>
        </Link>
    )
}