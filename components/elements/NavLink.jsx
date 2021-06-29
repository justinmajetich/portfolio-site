import styled from 'styled-components'
import Link from 'next/link'

const StyledNavText = styled.p`
    font-size: 1.5em;
    white-space: nowrap;
    cursor: pointer;
`

export default function NavLink(props) {
    return (
        <Link
            href={props.href}
        >
            <StyledNavText>
                {props.text}
            </StyledNavText>
        </Link>
    )
}