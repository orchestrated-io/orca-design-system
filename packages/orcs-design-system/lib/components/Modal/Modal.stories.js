import React, { useState } from "react";
import Button from "../Button";
import Modal from ".";
import { H3, P } from "../Typography";
import Spacer from "../Spacer";
import mdx from "./Modal.mdx";

export default {
  title: "Components/Modal",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Modal
};

const Basic = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnClose = () => {
    setVisible(false);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  return (
    <>
      <Button onClick={handleOnButtonClick}>Open Modal</Button>
      <Modal
        visible={visible}
        handleOnConfirm={handleOnConfirm}
        handleOnClose={handleOnClose}
      >
        <Spacer mb="r">
          <H3>Modal Title</H3>
          <P>
            Content of the modal. Modal accepts any child components or content.
          </P>
        </Spacer>
      </Modal>
    </>
  );
};
export const basicModal = () => <Basic />;
basicModal.parameters = {
  docs: {
    source: {
      code: `const [visible, setVisible] = useState(false);
      const handleOnButtonClick = () => {
        setVisible(true);
      };
      const handleOnClose = () => {
        setVisible(false);
      };
      const handleOnConfirm = () => {
        setVisible(false);
      };
      return (
        <>
          <Button onClick={handleOnButtonClick}>Open Modal</Button>
          <Modal
            visible={visible}
            handleOnConfirm={handleOnConfirm}
            handleOnClose={handleOnClose}
          >
            <Spacer mb="r">
              <H3>Modal Title</H3>
              <P>
                Content of the modal. Modal accepts any child components or content.
              </P>
            </Spacer>
          </Modal>
        </>
      );`
    }
  }
};
