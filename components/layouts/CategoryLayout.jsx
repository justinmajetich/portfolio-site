import { useState } from 'react'
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import CategoryContent from 'components/templates/CategoryContent'


export default function CategoryLayout({ content }) {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <Header
                categoryID={content.id}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            {!menuIsActive ?
                <CategoryContent
                    content={content}
                />
            : null}
            <Footer />
        </PageContainer>
    )
}