# Saplings Theme

This is an example subtheme to demonstrate how some integrations can be done like:

- CKEditor 5 stylesheets
- Negative margins in utility classes
- Background gradients

Those integrations cannot be done in the base theme because either not enabled in Bootstrap default compiled CSS or impossible to do in a generic way.

## Usage

You can copy/paste this theme to init your own subtheme.

You will have to change:

- the machine names of files
- the machine names inside those files
- adapt path to the Bootstrap library to recompile assets

## Setup Steps

Follow these steps to set up and customize your subtheme:

1. Run the following command to install the Bootstrap library:

   ```
   fin composer require twbs/bootstrap:5.3.2
   ```

2. Navigate to your theme directory:

   ```
   cd web/themes/custom/your_theme_name
   ```

3. Create all your custom SCSS files under the "assets/scss/custom" directory.

4. Run the following command to compile SCSS files:

   ```
   npm run watch
   ```

   This command watches for changes in your SCSS files and automatically compiles them.

## Policy

There is no backward compatibility policy in this example theme.

Breaking change can happen at any moment.
