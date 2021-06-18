import styled from 'styled-components'
import Image from 'next/image'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
`

export default function SocialIcon(props) {
    return (
        <StyledWrapper>
            <Image
                src={props.src}
                alt={props.name}
                width={24}
                height={24}
            />
        </StyledWrapper>
    )
}