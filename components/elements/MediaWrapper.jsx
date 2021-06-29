import Image from 'next/image'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { apiURL } from 'config/apiURL'

const StyledMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledReactPlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
    width: 100%;

    .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }
`

export default function MediaWrapper({ media }) {
    return (
        <StyledMediaWrapper>
            {media.other_media ?
                <StyledReactPlayerWrapper>
                    <ReactPlayer
                        className='react-player'
                        url={media.other_media.url}
                        width={'100%'}
                        height={'100%'}
                        controls
                        playsinline

                        config={{
                            youtube: {
                                playerVars: { 
                                    modestbranding: 1,
                                }
                            }
                        }}
                    />
                </StyledReactPlayerWrapper>
                :
                <Image
                    src={apiURL + media.strapi_media.url}
                    alt={media.strapi_media.alternativeText}
                    width={media.strapi_media.width}
                    height={media.strapi_media.height}
                />
            }
        </StyledMediaWrapper>
    )
}