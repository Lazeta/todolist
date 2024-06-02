

import { Meta } from '@storybook/react/*';
import Accordion from './Accordion';
import { useState } from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}

export default meta

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} onChange={() => {}}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false} onChange={() => {}}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Accordion titleValue={'Accordion'} collapsed={collapsed} onChange={() => {
        setCollapsed(!collapsed)
    }}/>
}