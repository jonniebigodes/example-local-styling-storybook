import React from "react";
import ExampleComponent from "./ExampleComponent";

/* eslint-disable */
export default {
  component: ExampleComponent,
  title: "Example starter local styling",
};

/* eslint-enable */

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
