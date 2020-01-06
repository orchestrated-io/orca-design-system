import React from "react";
import { action } from "@storybook/addon-actions";
import Button from ".";
import Icon from "../Icon";
import Layout from "../Layout";

export default {
  title: "Button",
  decorators: [storyFn => <Layout childVerticalSpacing>{storyFn()}</Layout>],
  parameters: {
    component: Button
  }
};

export const defaultButton = () => <Button>Default Button</Button>;
defaultButton.story = {
  name: "Default"
};

export const size = () => (
  <>
    <Button small onClick={action("clicked")}>
      Small button
    </Button>
    <Button large onClick={action("clicked")}>
      Large button
    </Button>
  </>
);
size.story = {
  name: "Size"
};
export const alternateColours = () => (
  <>
    <Button colour="success" onClick={action("clicked")}>
      Success/green button
    </Button>
    <Button colour="danger" onClick={action("clicked")}>
      Danger/red button
    </Button>
  </>
);
alternateColours.story = {
  name: "Alternate colours"
};
export const alternateStyle = () => (
  <>
    <Button small ghost onClick={action("clicked")}>
      Small ghost button
    </Button>
    <Button ghost onClick={action("clicked")}>
      Regular ghost button
    </Button>
    <Button large ghost onClick={action("clicked")}>
      Large ghost button
    </Button>
  </>
);
alternateStyle.story = {
  name: "Ghost style"
};

export const fullWidthButton = () => (
  <Button fullWidth>Full width button</Button>
);
fullWidthButton.story = {
  name: "Full-width"
};

export const disabledButton = () => <Button disabled>Disabled buttons</Button>;
disabledButton.story = {
  name: "Disabled"
};

export const waitingButton = () => (
  <>
    <Button isLoading>Loading...</Button>
    <Button isLoading colour="success">
      Saving...
    </Button>
    <Button isLoading colour="danger">
      Deleting...
    </Button>
  </>
);
waitingButton.story = {
  name: "Waiting state"
};

export const iconButton = () => (
  <>
    <Button iconLeft>
      <Icon icon={["fas", "user-plus"]} />
      Left aligned icon
    </Button>
    <Button iconRight>
      Right aligned icon
      <Icon icon={["fas", "download"]} />
    </Button>
  </>
);
iconButton.story = {
  name: "With Icons"
};

export const iconOnlyButton = () => (
  <>
    <Button small iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
    <Button large iconOnly>
      <Icon icon={["far", "calendar-alt"]} />
    </Button>
  </>
);
iconOnlyButton.story = {
  name: "Icon Only"
};
