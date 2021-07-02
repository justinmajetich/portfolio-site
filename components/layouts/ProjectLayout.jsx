import { useState } from 'react'
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import ProjectContent from 'components/templates/ProjectContent'

export default function ProjectLayout({ content }) {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <Header
                categoryID={content.categories[0].id}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            {!menuIsActive ?
                <ProjectContent content={content}/>
            : null}
            <Footer />
        </PageContainer>
    )
}