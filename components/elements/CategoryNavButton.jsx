import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const StyledButtonContainer = styled.div`
    position: relative;

    width: 80%;
    max-width: 280px;

    margin: 20px;
`

const StyledButtonBackground = styled.div`
    width: 100%;
    height: 75px;

    border: 1px solid black;
    border-radius: 10px;

    background: lightgray;
`

const StyledButton = styled.button`
    position: absolute;
    top: -8px;
    left: -8px;

    width: 100%;
    height: 75px;

    border: 1px solid black;
    border-radius: 10px;

    background: white;
    cursor: pointer;

    transition: top .05s, left .05s;
`

export default function Button(props) {
    return (
        <Link href={props.sectionID}>
            <StyledButtonContainer>
                <StyledButtonBackground/>
                <StyledButton>
                    {props.name ? props.name : 'Button'}
                </StyledButton>
            </StyledButtonContainer>
        </Link>
    )
}