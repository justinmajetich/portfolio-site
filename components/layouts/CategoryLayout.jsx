import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import CategoryContent from 'components/templates/CategoryContent'


export default function CategoryLayout({ content }) {
    return (
        <PageContainer>
            <Header />
            <CategoryContent
                content={content}
            />
            <Footer />
        </PageContainer>
    )
}