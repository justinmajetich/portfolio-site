import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'components/elements/Icon'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 280px;
`

const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 28px;
    height: 28px;

    cursor: pointer;

    transition: .15s ease;

    :hover {
        transform: scale(1.1);
    }
`

export default function Socials(props) {
    return (
        <StyledContainer>
            <Link href={'https://www.linkedin.com/in/justin-majetich/'}>
                <StyledIconWrapper><Icon type={'linkedinColor'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://twitter.com/JustinMajetich'}>
                <StyledIconWrapper><Icon type={'twitterColor'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://www.instagram.com/majet1c'}>
                <StyledIconWrapper><Icon type={'instagramColor'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://github.com/justinmajetich'}>
                <StyledIconWrapper><Icon type={'githubColor'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://open.spotify.com/artist/16mDEcXlh5afqFU2q5WAqJ?si=BRGeYti3R0yMDE1xfJ3zhA&dl_branch=1'}>
                <StyledIconWrapper><Icon type={'spotifyColor'}/></StyledIconWrapper>
            </Link>
        </StyledContainer>
    )
}