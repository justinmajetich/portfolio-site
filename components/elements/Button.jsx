import styled from 'styled-components'
import Link from 'next/link'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 70px;
    margin-bottom: 10px;
    border: 3px solid ${props => props.theme.violet};
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .25s;

    :hover {
        h3 { color: white; }
        background-color: ${props => props.theme.violet};
    }
`

const StyledText = styled.h3`
    font-size: 1.4em;
    font-weight: 600;
    color: ${props => props.theme.violet};
    transition: color .25s;
    margin: 0px;
`

export default function Button({ url }) {
    return (
        <Link href={url}>
            <StyledContainer>
                <StyledText>{'View Project'}</StyledText>
            </StyledContainer>
        </Link>
    )
}