
import { useState } from 'react'
import PageContainer from 'components/elements/PageContainer'
import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'
import LandingContent from 'components/templates/LandingContent'

export default function LandingLayout() {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <PageContainer>
            <Header
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            {!menuIsActive ?
                <LandingContent />
            : null}
            <Footer />
        </PageContainer>
    )
}