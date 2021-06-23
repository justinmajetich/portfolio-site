import Image from 'next/image'
import styled from 'styled-components'

const StyledBannerWrapper = styled.div`
    position: absolute;
    top: 0px;

    width: 100vw;
    height: 30vh;
    /* min-height: 200px; */

    overflow: hidden;
`

export default function ProjectBanner(props) {
    return (
        <StyledBannerWrapper>
            <Image
                src={'http://localhost:1337' + props.coverImage.url}
                alt={props.coverImage.alternativeText}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center center'}
            />
        </StyledBannerWrapper>
    )
}