This popover component is intended to be used to supplement buttons (or other elements) that require some helper text. It supports customisation of direction and width. This is so that you can ensure that the popover doesn't run off the screen, and that the width suits the amount of text in the popover. 

If you don't specify a width, 200px is the default, but as a general guide try and keep widths somewhere between 150-250 if you are modifying. Make sure if setting width you include the unit you want it to use, e.g. pixels, %.

```js

<Layout padding childChildHorizontalSpacing>

  <Flex wrap="true">
  
    <Popover direction="right" text="Text description of what this button does">
      <Button>Hover me</Button>
    </Popover>
    
    <Popover direction="left"  text="Text description of what this button does">
      <Button>Hover me</Button>
    </Popover>

    <Popover direction="bottom" text="Centered description of what this button does" textAlign="center">
      <Button>Hover me</Button>
    </Popover>

    <Popover direction="top" text="Text description of what this button does">
      <Button>Hover me</Button>
    </Popover>

  </Flex>

</Layout>
``` 