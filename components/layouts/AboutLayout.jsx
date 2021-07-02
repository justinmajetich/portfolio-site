import { useState } from 'react'
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'

export default function AboutLayout(props) {
    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <Header
                pageID={4}
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            {!menuIsActive ?
                <p>About me!</p>
            : null}
            <Footer />
        </PageContainer>
    )
}