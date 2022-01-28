import React from 'react'
import {
    Container,
    Dropdown,
    Menu,
    Divider
} from 'semantic-ui-react'
import HeaderInstance from './Header'

function BaseLayout(props) {
    return (
        <div>
            
            <HeaderInstance />
            <Container>

                {props.children}

            </Container>

        </div>
    )
}

export default BaseLayout
