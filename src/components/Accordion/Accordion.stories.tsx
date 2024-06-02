

import { Meta } from '@storybook/react/*';
import AccordionExpandDefault from './Accordion';

const meta: Meta<typeof AccordionExpandDefault> = {
    component: AccordionExpandDefault,
}

export default meta

export const CollapsedAccordion = () => {
    return <div>collapsed</div>
}
export const OpenedAccordion = () => {
    return <div>opened</div>
}