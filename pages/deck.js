import Head from 'next/head'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import GetGoogleFontsURL from 'utils/getGoogleFontsURL'
import ContentContainer from 'components/elements/ContentContainer'
import Image from 'next/image'
import { fadeIn } from 'utils/animations'
import ReactPlayer from 'react-player'
import { device } from 'utils/media-breakpoints'

const StyledSpacer = styled.div`
    margin: 25px;

    @media ${device.laptop} {
        margin: 50px;
    }
`
const MediaRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-content: center;

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: center;
    }
`
const MediaRowImage = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`
const MediaCaption = styled.div`
    width: 100%;
    max-width: 320px;
    margin: 0px 10px;
    display: flex;
    color: gray;
    padding: 10px 0;
    justify-content: center;
    text-align: center;

    @media ${device.laptop} {
        max-width: 720px;
    }
`
const VideoWrapper = styled.div`
    width: 100%;

    @media ${device.laptop} {
        width: 720px;
    }
`
const VideoWrapperSmall = styled.div`
    width: 360px;
`
const StyledPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    min-height: 100vh;

    padding-bottom: 350px;

    animation: ${fadeIn} 0.25s;
`
const StyledContentContainer = styled.div`
    width: 100%;
    height: 100%;
`
const Divider = styled.div`
    width: 80px;
    border-top: 1px solid lightgray;
`

function Spacer({ noDividerLine }) {
    return (
        <StyledSpacer>
            {!noDividerLine && <Divider />}
        </StyledSpacer>
    )
}

function Deck({ content, theme}) {
  return (
    <>
        <Head>
            <title>Justin Majetich</title>
            <meta name="description" content="Justin Majetich" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href={GetGoogleFontsURL(theme.headerFont)}></link>
        </Head>
        <StyledPageContainer>
            <>
                <Header />
                <StyledContentContainer>
                <ContentContainer>
                    <Spacer noDividerLine/>
                    <h2>{'Justin Majetich'}</h2>
                    <h3 style={{color: 'gray'}}>{'Design & Animation'}</h3>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1676063540/Races_Cover_3_K_ad4571e823.jpg'}
                        alt={'Races Cover'}
                        width={720}
                        height={720}
                        />
                    </MediaRowImage>
                    <MediaCaption>{'\"Races\" - cover art for Barrie\'s 5K EP'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Ghost_World_Cover_3_K_4963d123c2.jpg'}
                        alt={'Ghost World Cover'}
                        width={720}
                        height={720}
                        />
                    </MediaRowImage>
                    <MediaCaption>{'\"Ghost World\" - single cover art for Barrie'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1671216646/child_of_saints_dark_square_9a38294ab2.jpg'}
                        alt={'Child of Saints - Main'}
                        width={720}
                        height={720}
                        />
                    </MediaRowImage>
                    <MediaCaption>{'\"Child of Saints\" - 3D character design and sculpt'}</MediaCaption>
                    <Spacer noDividerLine/>

                    <MediaRowWrapper>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1671216646/child_of_saints_dark_clay_square_034327dcb6.jpg'}
                                alt={'Child of Saints - Clay'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1671216649/child_of_saints_head_square_e5ef3fec45.jpg'}
                                alt={'Child of Saints - Head'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1671216647/child_of_saints_hand_square_ef2bad3b46.jpg'}
                                alt={'Child of Saints - Hand'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                    </MediaRowWrapper>
                    <MediaCaption>{'\"Child of Saints\" - clay & details'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Empty_Cover_3_K_babc005073.jpg'}
                        alt={'Empty'}
                        width={720}
                        height={720}
                        />
                    </MediaRowImage>
                    <MediaCaption>{'\"Empty\" - single cover art for Barrie'}</MediaCaption>
                    <Spacer />

                    <MediaRowWrapper>
                        <MediaRowImage>
                            <Image
                            src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Unholy_Appetite_Single_Art_3_K_fde4ab0344.jpg'}
                            alt={'Unholy Appetite Cover'}
                            width={420}
                            height={420}
                            />
                        </MediaRowImage>
                        {/* <MediaCaption>{'\"Unholy Appetite\" - single cover art for Barrie'}</MediaCaption> */}
                        <MediaRowImage>
                            <Image
                            src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Nocturne_Interlude_Cover_3_K_568caa9745.jpg'}
                            alt={'Nocturne Cover'}
                            width={420}
                            height={420}
                            />
                        </MediaRowImage>
                    </MediaRowWrapper>
                    <MediaCaption>{'Companion pieces for Barrie singles \"Unholy Appetite\" & \"Nocturne\" respectively'}</MediaCaption>
                    <Spacer />

                    <MediaRowWrapper>
                        <MediaRowImage>
                            <VideoWrapperSmall>
                                <ReactPlayer
                                    className='react-player'
                                    url={'https://res.cloudinary.com/justinmajetich/video/upload/v1697669021/Timeline_1x1_Copy_01_929702d0e1.mp4'}
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
                            </VideoWrapperSmall>
                        </MediaRowImage>
                        <MediaRowImage>
                            <VideoWrapperSmall>
                                <ReactPlayer
                                    className='react-player'
                                    url={'https://res.cloudinary.com/justinmajetich/video/upload/v1697669021/Timeline_1080x1080_ad28868819.mp4'}
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
                            </VideoWrapperSmall>
                        </MediaRowImage>
                        <MediaRowImage>
                            <VideoWrapperSmall>
                                <ReactPlayer
                                    className='react-player'
                                    url={'https://res.cloudinary.com/justinmajetich/video/upload/v1697669021/Sequence_1080x1080_dc0f8846d8.mp4'}
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
                            </VideoWrapperSmall>
                        </MediaRowImage>
                    </MediaRowWrapper>
                    <MediaRowWrapper>
                    <MediaRowImage>
                            <VideoWrapperSmall>
                                <ReactPlayer
                                    className='react-player'
                                    url={'https://res.cloudinary.com/justinmajetich/video/upload/v1697669021/Timeline_SQ_853ff8b221.mp4'}
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
                            </VideoWrapperSmall>
                        </MediaRowImage>
                        <MediaRowImage>
                            <VideoWrapperSmall>
                                <ReactPlayer
                                    className='react-player'
                                    url={'https://res.cloudinary.com/justinmajetich/video/upload/v1697669021/Timeline_SQ_9d6fce25bf.mp4'}
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
                            </VideoWrapperSmall>
                        </MediaRowImage>
                    </MediaRowWrapper>
                    <MediaCaption>{'Animated album art for Barrie\'s 5K EP'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <VideoWrapper>
                            <ReactPlayer
                                className='react-player'
                                url={'https://res.cloudinary.com/justinmajetich/video/upload/v1697666521/Barrie_SXSW_Anim_3840x3840_1cad7ac140.mp4'}
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
                        </VideoWrapper>
                    </MediaRowImage>
                    <MediaCaption>{'3D character design and animation for Barrie\'s SXSW \'22 promotional media'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1625695153/LITR_BOOK_1000px_8ff8146bd8.gif'}
                        alt={'LUV IN THE RUINS - Book'}
                        width={1000}
                        height={773}
                        />
                    </MediaRowImage>
                    <MediaCaption>{'Text, layout & design for art book accompanying Majetic\'s album LUV IN THE RUINS'}</MediaCaption>
                    <Spacer />

                    <MediaRowWrapper>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1676064225/WSP_048lp_front_mock_d714b64039.jpg'}
                                alt={'5K Vinyl - Cover'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1676064225/WSP_048lp_C2_back_mock_13b3685e48.jpg'}
                                alt={'5K Vinyl - Back Cover'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1676064226/WSP_048_cass_mock_2a1014c916.jpg'}
                                alt={'5K Cassette'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                    </MediaRowWrapper>
                    <MediaCaption>{'Layout & design for Barrie\'s physical 5K releases'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <VideoWrapper>
                            <ReactPlayer
                                className='react-player'
                                url={'https://res.cloudinary.com/justinmajetich/video/upload/v1698161339/slyder_clip_4a3a3abe5c.mp4'}
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
                        </VideoWrapper>
                    </MediaRowImage>
                    <MediaCaption>{'Art, animation & design for 2D game - Frankie, So Long'}</MediaCaption>
                    <Spacer noDividerLine/>
                    
                    <MediaRowWrapper>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1698161338/player_body_sheet_1_K_2c3f3be67c.png'}
                                alt={'Character sprite sheet'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1698162646/player_face_sheet_2_K_ef707b5e9c.png'}
                                alt={'Face sprite sheet'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                        <MediaRowImage>
                            <Image
                                src={'https://res.cloudinary.com/justinmajetich/image/upload/v1698161342/kitchen_prop_sheet_4_K_7191ed5798.png'}
                                alt={'Kitchen sprite sheet'}
                                width={360}
                                height={360}
                            />
                        </MediaRowImage>
                    </MediaRowWrapper>
                    <MediaCaption>{'A few sprite sheets from Frankie, So Long'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1698161333/fish_bowl_dba9dc9ff7.jpg'}
                        alt={'Fishbowl'}
                        width={720}
                        height={720}
                        />
                    </MediaRowImage>
                    <Spacer />

                    <MediaRowImage>
                        <VideoWrapper>
                            <ReactPlayer
                                className='react-player'
                                url={'https://res.cloudinary.com/justinmajetich/video/upload/v1698161335/chicken_loop_f7f651232f.mp4'}
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
                        </VideoWrapper>
                    </MediaRowImage>
                    <Spacer />

                    <MediaRowImage>
                        <Image
                        src={'https://res.cloudinary.com/justinmajetich/image/upload/v1698163281/clay1_dc7c86b08c.png'}
                        alt={'Hedgehog model'}
                        width={720}
                        height={580}
                        />
                    </MediaRowImage>
                    <MediaCaption>{'WIP hedgehog - modeled, rigged & weight-painted'}</MediaCaption>
                    <Spacer />

                    <MediaRowImage>
                        <VideoWrapper>
                            <ReactPlayer
                                className='react-player'
                                url={'https://res.cloudinary.com/justinmajetich/video/upload/v1698161334/curtaindark_test_499617b9e0.mp4'}
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
                        </VideoWrapper>
                    </MediaRowImage>
                    <Spacer noDividerLine/>

                </ContentContainer>
                <Spacer noDividerLine />
                </StyledContentContainer>
                <Footer />
            </>
        </StyledPageContainer>
    </>
  )
}

export default withTheme(Deck)