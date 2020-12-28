import React, { useState, useCallback } from "react";
import { action } from "@storybook/addon-actions";
import Dialogue from ".";
import { P, H2 } from "../Typography";
import Spacer from "../Spacer";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Button from "../Button";
import mdx from "./Dialogue.mdx";

export default {
  title: "Components/Dialogue",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Dialogue
};

const Basic = () => {
  window.addEventListener("load", setup);
  const get = document.getElementById.bind(document);
  const query = document.querySelector.bind(document);

  const [visible, setVisible] = useState(false);
  function setup() {
    let modalRoot = get("modal-overlay");
    let modal = query(".modal-container");

    // handle click to hide menu
    modalRoot.addEventListener("click", rootClick);
    modal.addEventListener("click", modalClick);

    return () => {
      // If menu closed, unregister event listener to prevent memory leaks
      modalRoot.removeEventListener("click", rootClick);
      modal.removeEventListener("click", modalClick);
    };
    function rootClick() {
      setVisible(false);
    }
    function modalClick(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  }
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const confirmAction = action("confirmed");
  const cancelAction = action("cancelled");
  const onConfirm = useCallback(() => {
    if (confirmAction) {
      const result = confirmAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then((r) => {
          if (r) {
            setVisible(false);
          }
        });
      }
    }
    setVisible(false);
  }, [confirmAction, setVisible]);
  const onCancel = useCallback(() => {
    if (cancelAction) {
      const result = cancelAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then((r) => {
          if (r) {
            setVisible(false);
          }
        });
      }
    }
    setVisible(false);
  }, [cancelAction, setVisible]);
  return (
    <>
      <Button
        variant="danger"
        onClick={handleOnButtonClick}
        leftIcon={["fas", "trash"]}
      >
        Delete data
      </Button>
      <Dialogue
        visible={visible}
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        onClose={onClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmText="OK"
        cancelText="Cancel"
      >
        <>
          <P weight="bold" marginBottom="sm">
            This will remove all data from the application.
          </P>
          <P>Do you wish to continue?</P>
        </>
      </Dialogue>
    </>
  );
};
export const basicDialogue = () => <Basic />;
basicDialogue.parameters = {
  docs: {
    source: {
      code: `const [visible, setVisible] = useState(false);
    const handleOnButtonClick = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    const confirmAction = action("confirmed");
    const cancelAction = action("cancelled");
    const onConfirm = useCallback(() => {
      if (confirmAction) {
        const result = confirmAction();
        if (result && result.then) {
          // we have been given a promise
          return result.then(r => {
            if (r) {
              setVisible(false);
            }
          });
        }
      }
      setVisible(false);
    }, [confirmAction, setVisible]);
    const onCancel = useCallback(() => {
      if (cancelAction) {
        const result = cancelAction();
        if (result && result.then) {
          // we have been given a promise
          return result.then(r => {
            if (r) {
              setVisible(false);
            }
          });
        }
      }
      setVisible(false);
    }, [cancelAction, setVisible]);
    useEffect(() => {
      if (!visible) {
        return;
      }
      const handleClicked = () => {
        setVisible(false);
      };

      // handle click outside to close Modal
      document.addEventListener("click", handleClicked);

      return () => {
        // If Modal closed, unregister event listener to prevent memory leaks
        document.removeEventListener("click", handleClicked);
      };
    }, [visible]);
    return (
      <>
        <Button
          variant="danger"
          onClick={handleOnButtonClick}
          leftIcon={["fas", "trash"]}
        >
          Delete data
        </Button>
        <Dialogue
          visible={visible}
          confirmAction={confirmAction}
          cancelAction={cancelAction}
          onClose={onClose}
          onConfirm={onConfirm}
          onCancel={onCancel}
          confirmText="OK"
          cancelText="Cancel"
        >
          <>
            <P weight="bold" marginBottom="sm">
              This will remove all data from the application.
            </P>
            <P>Do you wish to continue?</P>
          </>
        </Dialogue>
      </>
    );
  `
    }
  }
};

const Edit = () => {
  window.addEventListener("load", setup);
  const get = document.getElementById.bind(document);
  const query = document.querySelector.bind(document);

  const [visible, setVisible] = useState(false);
  function setup() {
    let modalRoot = get("modal-overlay");
    let modal = query(".modal-container");

    // handle click to hide menu
    modalRoot.addEventListener("click", rootClick);
    modal.addEventListener("click", modalClick);

    return () => {
      // If menu closed, unregister event listener to prevent memory leaks
      modalRoot.removeEventListener("click", rootClick);
      modal.removeEventListener("click", modalClick);
    };
    function rootClick() {
      setVisible(false);
    }
    function modalClick(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  }
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const confirmAction = action("confirmed");

  const cancelAction = action("cancelled");

  const onConfirm = useCallback(() => {
    if (confirmAction) {
      const result = confirmAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then((r) => {
          if (r) {
            setVisible(false);
          }
        });
      }
    }
    setVisible(false);
  }, [confirmAction, setVisible]);
  const onCancel = useCallback(() => {
    if (cancelAction) {
      const result = cancelAction();
      if (result && result.then) {
        // we have been given a promise
        return result.then((r) => {
          if (r) {
            setVisible(false);
          }
        });
      }
    }
    setVisible(false);
  }, [cancelAction, setVisible]);
  return (
    <>
      <Button onClick={handleOnButtonClick} leftIcon={["fas", "edit"]}>
        Modify Details
      </Button>
      <Dialogue
        visible={visible}
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        onClose={onClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        width="320px"
        confirmText="Save"
        cancelText="Cancel"
        cancelProps={{
          variant: "danger",
          leftIcon: ["fas", "times"]
        }}
        confirmProps={{
          variant: "success",
          leftIcon: ["fas", "save"]
        }}
      >
        <>
          <Spacer mb="r">
            <H2>Modify Details</H2>
            <TextInput
              id="textInput1"
              key="textInput1"
              type="text"
              fullWidth
              label="Name"
              placeholder="E.g. Awesome Project"
            />
            <TextArea id="TextArea01" label="Description" fullWidth />
          </Spacer>
        </>
      </Dialogue>
    </>
  );
};

export const editDialogue = () => <Edit />;
editDialogue.parameters = {
  docs: {
    source: {
      code: `const [visible, setVisible] = useState(false);
        const handleOnButtonClick = () => {
          setVisible(true);
        };
        const onClose = () => {
          setVisible(false);
        };
        const confirmAction = action("confirmed");
        const cancelAction = action("cancelled");
        const onConfirm = useCallback(() => {
          if (confirmAction) {
            const result = confirmAction();
            if (result && result.then) {
              // we have been given a promise
              return result.then(r => {
                if (r) {
                  setVisible(false);
                }
              });
            }
          }
          setVisible(false);
        }, [confirmAction, setVisible]);
        const onCancel = useCallback(() => {
          if (cancelAction) {
            const result = cancelAction();
            if (result && result.then) {
              // we have been given a promise
              return result.then(r => {
                if (r) {
                  setVisible(false);
                }
              });
            }
          }
          setVisible(false);
        }, [cancelAction, setVisible]);
        useEffect(() => {
          if (!visible) {
            return;
          }
          const handleClicked = () => {
            setVisible(false);
          };

          // handle click outside to close Modal
          document.addEventListener("click", handleClicked);

          return () => {
            // If Modal closed, unregister event listener to prevent memory leaks
            document.removeEventListener("click", handleClicked);
          };
        }, [visible]);
        return (
          <>
            <Button onClick={handleOnButtonClick} leftIcon={["fas", "edit"]}>
              Edit Project
            </Button>
            <Dialogue
              visible={visible}
              confirmAction={confirmAction}
              cancelAction={cancelAction}
              onClose={onClose}
              onConfirm={onConfirm}
              onCancel={onCancel}
              width="320px"
              confirmText="Submit"
              cancelText="Cancel"
              cancelProps={{
                variant: "danger",
                small: true,
                leftIcon: ["fas", "times"]
              }}
              confirmProps={{
                variant: "success",
                small: true,
                leftIcon: ["fas", "check"]
              }}
            >
              <>
                <Spacer mb="r">
                  <H2>Editing Project</H2>
                  <TextInput
                    id="textInput1"
                    key="textInput1"
                    type="text"
                    label="Name"
                    placeholder="E.g. Awesome Project"
                  />
                  <TextArea id="TextArea01" label="Description" />
                </Spacer>
              </>
            </Dialogue>
          </>
        );
        `
    }
  }
};
