import React from "react";
import ToastComponent from "./ToastComponent";

/* eslint-disable */

export default {
  component: ToastComponent,
  title: "Example toast component",
};

/* eslint-enable */

const Template = (args) => <ToastComponent {...args} />;

export const ExampleToast = Template.bind({});

ExampleToast.args = {
  message: "Boop",
};
