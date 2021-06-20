
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import LandingContent from 'components/templates/LandingContent'

export default function LandingLayout(props) {
    return (
        <PageContainer>
            <Header isLanding={true}/>
            <LandingContent />
        </PageContainer>
    )
}