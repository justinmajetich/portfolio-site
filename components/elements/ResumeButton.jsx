import styled from 'styled-components'
import Link from 'next/link'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 50px;
    border: 3px solid black;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color .25s;

    :hover {
        h3 { color: white; }
        background-color: black;
    }
`

const StyledText = styled.h3`
    font-size: 1.1em;
    transition: color .25s;
`

export default function ResumeButton() {
    return (
        <Link href={'https://drive.google.com/file/d/1MhHnNHhJvHDzx_naAs0UDFv1VWfvCItK/view?usp=sharing'}>
            <StyledContainer>
                <StyledText>{'View Resume'}</StyledText>
            </StyledContainer>
        </Link>
    )
}