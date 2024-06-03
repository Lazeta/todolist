import Accordion from "./Accordion";
import { useState } from "react";
import { action } from '@storybook/addon-actions';

export default {
  component: Accordion
}

// export default meta;
// type Story = StoryObj<typeof Accordion>; Storybook version

// export const FirstStory: Story = {
//   args: {
//     titleValue: "hello",
//     collapsed: true,
//     onChange: () => {},
//   },
// };

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      collapsed={true}
      onChange={onChangeHandler}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      collapsed={false}
      onChange={() => {}}
    />
  );
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Accordion
      titleValue={"Accordion"}
      collapsed={collapsed}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
    />
  );
};
