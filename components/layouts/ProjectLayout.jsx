import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import ProjectContent from 'components/templates/ProjectContent'

export default function ProjectLayout(props) {
    return (
        <PageContainer>
            <Header />
            <ProjectContent />
            <Footer />
        </PageContainer>
    )
}