# ShippingLabelMaker

This project was generated with version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## The App Logic

At the top of the app is the ShippingLabelMaker component, it passes the context object its child component the WizardComponent.  
Each step is a child component of the WizardComponent and they modify the context object as the user goes through the steps.  I used Angular material taps and move the taps with the router to navigate back and forward through the steps. I also injected the step's index and the progress of the
progress bar to the queryParams object and use it to keep track of the steps and navigate the wizard. The state of the context object in maintained
on a variable in the ShippingLabelService.
At the last step the shipping cost is calculated and a label is shown on the view with the user's information the context object now has.
By clicking confirm on the printed label the completed object is emitted back to the wizard and finally the ShippingLabelMaker has the
final object.
