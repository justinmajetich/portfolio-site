import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import StyledParagraph from "./StyledParagraph"

const StyledContainer = styled.div`
    display: flex;
    cursor: pointer;

    margin: 10px 0;
`

const StyledLinkDescription = styled(StyledParagraph)`
    margin: 0 10px;

    color: blue;
`

export default function ProjectLink(props) {
    return (
        <Link href={'/'}>
            <StyledContainer>
                <Image 
                    src={'/images/icons/github2.svg'}
                    alt={'Project Link'}
                    width={14}
                    height={14}
                />
                <StyledLinkDescription>{props.title}</StyledLinkDescription>
            </StyledContainer>
        </Link>
    )
}