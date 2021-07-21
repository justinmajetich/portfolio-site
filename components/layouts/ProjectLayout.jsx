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
                pageID={content.categories[0].id}
                categoryID={content.categories[0].id}
                category={content.categories[0]}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
                isProjectPage
            />
            {!menuIsActive ?
                <ProjectContent content={content}/>
            : null}
            <Footer />
        </PageContainer>
    )
}