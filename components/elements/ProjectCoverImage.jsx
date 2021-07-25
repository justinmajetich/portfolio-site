import Image from 'next/image'
import styled from 'styled-components'

const StyledBannerWrapper = styled.div`
    position: relative;
    top: 0px;

    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    
    overflow: hidden;
`

export default function ProjectCoverImage(props) {
    return (
        <StyledBannerWrapper>
            <Image
                src={props.coverImage.url}
                alt={props.coverImage.alternativeText}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center center'}
            />
        </StyledBannerWrapper>
    )
}