import Image from 'next/image'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 300px;
    max-width: 400px;
    height: 100%;
    margin-top: 15px;
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