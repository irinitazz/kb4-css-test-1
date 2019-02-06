# CSS TEST

## Project setup
clone the provided git repository and ```cd``` into the project repo, then run:
```
npm install
```

### Start Development Server with Hot-loading
```
npm run serve
```

### CSS requirements
*  The default launch size for a course is ```1024x768```, the template should look best (closest to design spec) at this size
*  Font and elements should scale appropriately to```1920x1080```
*  Design elements should scale/break/stack at mobile sizing
*  Knowbe4 courses have a UI and side Menu: 
    *  This test includes a mockup of the the side menu, which is a div that simply represents the space the menu takes up when open. 
    *  The 'Open/Close Menu' button can be left styled as-is, and is not a part of this CSS test. 
    *  The side menu does not need to be styled either
    *  template should look good at various media breakpoints with or without the side menu open.
    *  At mobile sizing, the side menu can be ignored, as it becomes full screen in a typical course

### How to add CSS
1.  Install npm dependencies (see project setup)
2.  Start the development server (see Start Development Server with Hot-loading)
3.  open ```src/Pages/CSSTest.vue```
3.  At the bottom of the file is a ```<script></script>``` tag, within it, you can place your CSS
	*  You can use scss within this tag, or alternatively link an external .scss file, and include it within the project structure
	*  The Html structure for this template is located in the same file, above the script tag
    * This test should not require any editing of the HTML, but feel free to use whatever means you need to replicate the design spec
