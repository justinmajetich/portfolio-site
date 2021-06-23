import Image from "next/image"
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    width: 100%;
`

const StyledImageWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;

    margin: 20px;
`

export default function MediaGallery({ media }) {
    return (
        <StyledContainer>
            {media.map( media => {
                return (
                    <StyledImageWrapper key={media.id}>
                        <Image
                            src={'http://localhost:1337' + media.url}
                            alt={media.alternativeText}
                            layout={'fill'}
                            objectFit={'contain'}
                            objectPosition={'50% 50%'}
                        />
                    </StyledImageWrapper>
                )
            })}
        </StyledContainer>
    )
}