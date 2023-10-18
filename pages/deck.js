import Head from 'next/head'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import GetGoogleFontsURL from 'utils/getGoogleFontsURL'
import PageContainer from 'components/elements/PageContainer'
import ContentContainer from 'components/elements/ContentContainer'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const StyledPageBackground = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
`
const Spacer = styled.div`
    margin: 50px;
`
const MediaRowWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
const MediaRowImage = styled.div`
    margin: 20px;
`
const MediaCaption = styled.div`
    display: flex;
    width: 100%;
    color: gray;
    padding: 10px 0;
    justify-content: center;
`
const VideoWrapper = styled.div`
    width: 730px;
`
const VideoWrapperSmall = styled.div`
    width: 360px;
`
function Deck({ content, theme}) {
  return (
    <>
        <Head>
            <title>Justin Majetich</title>
            <meta name="description" content="Justin Majetich" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href={GetGoogleFontsURL(theme.headerFont)}></link>
        </Head>
        <PageContainer>
            <StyledPageBackground />
            <>
            <Header />
                <ContentContainer>
                    <Spacer />
                    <h2>{'Justin Majetich - Design & Animation'}</h2>
                    <Spacer />

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1676063540/Races_Cover_3_K_ad4571e823.jpg'}
                    alt={'Races Cover'}
                    width={720}
                    height={720}
                    />
                    <MediaCaption>{'\"Races\" - cover art for Barrie\'s 5K EP'}</MediaCaption>
                    <Spacer />

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Ghost_World_Cover_3_K_4963d123c2.jpg'}
                    alt={'Ghost World Cover'}
                    width={720}
                    height={720}
                    />
                    <MediaCaption>{'\"Ghost World\" - single cover art for Barrie'}</MediaCaption>
                    <Spacer />

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Empty_Cover_3_K_babc005073.jpg'}
                    alt={'Empty'}
                    width={720}
                    height={720}
                    />
                    <MediaCaption>{'\"Empty\" - single cover art for Barrie'}</MediaCaption>
                    <Spacer />

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Unholy_Appetite_Single_Art_3_K_fde4ab0344.jpg'}
                    alt={'Unholy Appetite Cover'}
                    width={720}
                    height={720}
                    />
                    <MediaCaption>{'\"Unholy Appetite\" - single cover art for Barrie'}</MediaCaption>
                    <Spacer />

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1697664740/Nocturne_Interlude_Cover_3_K_568caa9745.jpg'}
                    alt={'Nocturne Cover'}
                    width={720}
                    height={720}
                    />
                    <MediaCaption>{'\"Nocturne\" - single cover art for Barrie'}</MediaCaption>
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
                    <MediaCaption>{'Animations for Barrie\'s 5K'}</MediaCaption>
                    <Spacer />

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
                    <MediaCaption>{'3D character design and animation for Barrie\'s SXSW promotional media'}</MediaCaption>
                    <Spacer />

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1671216646/child_of_saints_dark_square_9a38294ab2.jpg'}
                    alt={'Child of Saints - Main'}
                    width={720}
                    height={720}
                    />
                    <MediaCaption>{'\"Child of Saints\" - 3D character design and sculpt'}</MediaCaption>
                    <Spacer />

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

                    <Image
                    src={'https://res.cloudinary.com/justinmajetich/image/upload/v1625695153/LITR_BOOK_1000px_8ff8146bd8.gif'}
                    alt={'LUV IN THE RUINS - Book'}
                    width={1000}
                    height={773}
                    />
                    <MediaCaption>{'LUV IN THE RUINS art book - text, layout & design'}</MediaCaption>
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

                </ContentContainer>
                <Spacer />
                <Footer />
            </>
        </PageContainer>
    </>
  )
}

export default withTheme(Deck)