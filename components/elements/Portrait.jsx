import Image from 'next/image'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 350px;
    height: 100%;
    margin-top: 18px;
`

export default function Portrait({ portrait }) {
    return (
        <StyledWrapper>
            <Image
                src={portrait.formats.large.url}
                alt={portrait.alternativeText}
                width={portrait.formats.large.width}
                height={portrait.formats.large.height}
            />
        </StyledWrapper>
    )
}