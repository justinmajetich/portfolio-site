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

export default function ImageGallery(props) {
    return (
        <StyledContainer>
            {props.images.map( (image, i) => {
                return (
                    <StyledImageWrapper key={i}>
                        <Image
                            src={image.src}
                            alt={image.description ? image.description : 'Image'}
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