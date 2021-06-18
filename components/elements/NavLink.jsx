import styled from 'styled-components'

const StyledNavLink = styled.a`
    /* margin-right: 20px; */

    cursor: pointer;
`

const StyledNavText = styled.p`
    font-size: 1.5em;
    white-space: nowrap;
`

export default function NavLink(props) {
    return (
        <StyledNavLink>
            <StyledNavText>
                {props.text ? props.text : 'NavLink'}
            </StyledNavText>
        </StyledNavLink>
    )
}