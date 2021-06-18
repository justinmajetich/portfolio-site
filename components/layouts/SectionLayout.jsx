import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import SectionContent from 'components/templates/SectionContent'


export default function SectionLayout(props) {
    return (
        <PageContainer>
            <Header />
            <SectionContent
                sectionTitle={'Code'}
                sectionDescription={'I code for the joy of building new worlds and the satisfaction of designing elegant, scalable systems.\nAs a full-stack software engineering graduate from Holberton School, my experience ranges from low-level memory management in C to web development using some of the most modern tools and frameworks. My focus, however, is game development. At Holberton, I specialized in C#/Unity for both XR and flat-screen experiences.'}
            />
            <Footer />
        </PageContainer>
    )
}