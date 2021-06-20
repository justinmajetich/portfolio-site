import styled from 'styled-components'
import Link from 'next/link'
import SectionButton from 'components/elements/SectionButton'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    margin-top: 10px;
`

export default function SectionNavigation(props) {
    return (
        <StyledContainer>
            <Link
                href='/code'
            >
                <SectionButton text={'Code'}/>
            </Link>
            <SectionButton text={'Art Dept'}/>
            <SectionButton text={'Music'}/>
        </StyledContainer>
    )
}