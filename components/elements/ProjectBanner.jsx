import Image from 'next/image'
import styled from 'styled-components'

const StyledBannerWrapper = styled.div`
    position: absolute;
    top: 0px;

    width: 100vw;
    height: 200px;

    overflow: hidden;
`

export default function ProjectBanner(props) {
    return (
        <StyledBannerWrapper>
            <Image
                src={'/images/vr-wheelchair.jpg'}
                alt={'VR Wheelchair'}
                width={1440}
                height={1440}
            />
        </StyledBannerWrapper>
    )
}