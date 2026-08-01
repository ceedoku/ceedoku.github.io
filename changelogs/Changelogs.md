- ### Version 5.2.0
  > #### Changes:
  >> ##### Added:
  >>> - A feedback button (or is it a link to u guys) - IDK what to call it... whatever, it exists
- ### Version 5.1.1
  > #### Changes:
  >> ##### Fixed:
  >>> - A bug where setting starting hints to 0 would prevent the hint cooldown from starting.
- ### Version 5.1.0
  > #### Changes:
  >> ##### Fixed:
  >>> - The game UI not being vertically centered on mobile.
  >>> - Confetti not showing at all.
  >>> - Scrollbars appearing where they shouldn't.
  >> ##### Added:
  >>> - A Godlike difficulty. It is the same as Impossible difficulty, but hints, undo, redo, pencil mode, and erase mode cannot be used, and auto-correction is disabled.
  >> ##### Improved:
  >>> - The styling of the history buttons when tapped on a mobile device.
  >>> - Animations so that everything should now smoothly fade when changing themes.
- ### Version 5.0.2
  > #### Changes:
  >> ##### Fixed:
  >>> - The close settings menu button not appearing correctly in browsers other than Firefox.
  >>> - The settings menu being too tall on smaller desktop displays.
  >>> - Haptics not working at all.
  >>> - The hint cooldown type setting not having correctly aligned text on mobile.
  >> ##### Improved:
  >>> - The font size of the headings in the settings menu on mobile, making them more in line with the size of the settings themselves.
- ### Version 5.0.1
  > #### Changes:
  >> ##### Fixed:
  >>> - Crashing bug on click of any button in the windows app.
- ### Version 5.0.0
  > #### Changes:
  >> ##### Added:
  >>> - A loading screen.
  >>> - Sound effects throughout the game.
  >>> - A new settings menu.
  >>> - Hint cooldowns, with Move and Time cooldown types. Hint cooldowns are disabled by default.
  >>> - Confetti to the win screen.
  >> ##### Fixed:
  >>> - A bug where pressing certain keys on the main menu could cause the game to crash.
  >>> - A bug where deleting a save and going back to the main menu after creating a new game would prevent the save stats menu from being opened.
  >> ##### Improved:
  >>> - The crash detector. When a crash is detected, the page title now changes to "Ceedoku - Crashed" in addition to displaying the crash screen.
  >>> - The Fullscreen button's active state so that the button moves down by one pixel when clicked.
  >>> - The color of the logo on the main menu in light mode to be less... jarring? It is now dark grey instead of black.
- ### Version 4.1.1
  > #### Changes:
  >> ##### Changed:
  >>> - The timer to display hours when needed instead of continuing to append minutes.
  >>> - The card info boxes to fit correctly in Impossible difficulty.
  >> ##### Added:
  >>> - Scrolling to the difficulty selection menu on the main game board in mobile mode, allowing all difficulties to remain accessible.
  >> ##### Fixed:
  >>> - An issue where the Ceedoku logo was positioned too close to the edge of the game box in landscape mode.
- ### Version 4.1.0
  > #### Changes:
  >> ##### Added:
  >>> - Difficulty preference saving.
- ### Version 4.0.1
  > #### Changes:
  >> ##### Fixed:
  >>> - The Main Menu button in the pause menu being positioned outside of the pause menu card.
  >>> - Difficulty menus incorrectly displaying previously selected difficulties.
- ### Version 4.0.0
  > #### Changes:
  >> ##### Added:
  >>> - A Master difficulty.
  >>> - An Extreme difficulty.
  >>> - An Impossible difficulty.
- ### Version 3.0.0
  > #### Changes:
  >> ##### Added:
  >>> - A difficulty selection screen to the main menu.
  >> ##### Fixed:
  >>> - New Game button hover states on mobile.
  >>> - Cancel button hover states.
- ### Version 2.4.3
  > #### Changes:
  >> ##### Fixed:
  >>> - A bug where a missing element ID caused the game to crash when creating or continuing a game.
- ### Version 2.4.2
  > #### Changes:
  >> ##### Added:
  >>> - ARIA labels to the pause menu, win menu, continue menu, deletion confirmation menu, and main menu.
- ### Version 2.4.1
  > #### Changes:
  >> ##### Added:
  >>> - Hover tooltips for the remaining buttons.
  >>> - ARIA labels to those same buttons for accessibility.
- ### Version 2.4.0
  > #### Changes:
  >> ##### Added:
  >>> - Hover tooltips for difficulty buttons.
  >>> - ARIA labels to those same difficulty buttons for accessibility.
- ### Version 2.3.4
  > #### Changes:
  >> ##### Added:
  >>> - Holes after the number of holes for clarity. (Example: 44 becomes 44 Holes.)
- ### Version 2.3.3
  > #### Changes:
  >> ##### Fixed:
  >>> - The blue tap highlight box appearing on mobile.
  >>> - The hint button being positioned incorrectly on mobile.
  >>> - The sidebar not having the correct height on mobile.
  >> ##### Changed:
  >>> - The Cancel button color so it no longer matches the disabled button color, preventing confusion.
- ### Version 2.3.2
  > #### Changes:
  >> ##### Added:
  >>> - A border on the sides of the site controls when in dark mode.
- ### Version 2.3.1
  > #### Changes:
  >> ##### Fixed:
  >>> - The buttons inside the site controls displaying incorrectly on mobile.
- ### Version 2.3.0
  > #### Changes:
  >> ##### Changed:
  >>> - The position of the light/dark mode button to the site controls bar, which was also added in this update.
  >> ##### Added:
  >>> - A fullscreen button.
  >>> - A site controls bar.
  >> ##### Removed:
  >>> - The light/dark mode button from the main menu since it has been replaced.
- ### Version 2.2.0
  > #### Changes:
  >> ##### Changed:
  >>> - The border radius of the main box.
  >>> - The sidebar to correctly set its height.
  >>> - The hint button to attempt to use solving strategies instead of using information the player doesn't have.
- ### Version 2.1.5
  > #### Changes:
  >> ##### Fixed:
  >>> - The remaining active versus hover state issues for some buttons when in touch mode.
  >> ##### Changed:
  >>> - Disabled buttons to no longer have hover or active colors.
  >>> - Disabled buttons to no longer animate when clicked.
- ### Version 2.1.4
  > #### Changes:
  >> ##### Fixed:
  >>> - Active versus hover state issues for some buttons when in touch mode.
- ### Version 2.1.3
  > #### Changes:
  >> ##### Changed:
  >>> - The stylesheet to be located in a separate file.
  >>> - The script to be located in a separate file.
  >>> - Touchscreen detection to use JavaScript-based methods for improved accuracy.
- ### Version 2.1.2
  > #### Changes:
  >> ##### Fixed:
  >>> - Number buttons staying highlighted on mobile.
- ### Version 2.1.1
  > #### Changes:
  >> ##### Changed:
  >>> - The cells to have rounded corners.
  >>> - The hover state of buttons in light mode to look better.
  >> ##### Added:
  >>> - Hover and active states for new buttons.
  >> ##### Fixed:
  >>> - Mistakes appearing on the wrong side of the box.
- ### Version 2.1.0
  > #### Changes:
  >> ##### Added:
  >>> - A save deletion screen.
  >>> - Save deletion console commands.
  >> ##### Removed:
  >>> - Unnecessary lines of code.
  >> ##### Changed:
  >>> - The styling of disabled buttons.
  >> ##### Fixed:
  >>> - Ghost save files.
  >>> - The Continue Save button not turning grey when there is no save.
- ### Version 2.0.11
  > #### Changes:
  >> ##### Fixed:
  >>> - The main menu mode button not having its text centered horizontally.
- ### Version 2.0.10
  > #### Changes:
  >> ##### Fixed:
  >>> - The symbol not updating after switching modes in the main menu mode switcher.
- ### Version 2.0.9
  > #### Changes:
  >> ##### Added:
  >>> - A light/dark mode switcher to the main menu.
- ### Version 2.0.8
  > #### Changes:
  >> ##### Fixed:
  >>> - A bug where some difficulty menus were still displaying incorrectly.
- ### Version 2.0.7
  > #### Changes:
  >> ##### Fixed:
  >>> - A bug involving most of the difficulty menus displaying incorrectly.
- ### Version 2.0.6
  > #### Changes:
  >> ##### Changed:
  >>> - The Version: text to be bold.
- ### Version 2.0.5
  > #### Changes:
  >> ##### Fixed:
  >>> - A bug where the version text was not the correct element type.
  >>> - A bug where the version text wasn't being updated.
  >>> - A bug involving a script overwriting its own text content.
- ### Version 2.0.4
  > #### Changes:
  >> ##### Added:
  >>> - Version: before the version number.
- ### Version 2.0.3
  > #### Changes:
  >> ##### Fixed:
  >>> - The content of the Main Menu not being vertically centered.
  >> ##### Added:
  >>> - Version text.
- ### Version 2.0.2
  > #### Changes:
  >> ##### Tested:
  >>> - A fix for the Main Menu not being vertically centered.
- ### Version 2.0.1
  > #### Changes:
  >> ##### Tested:
  >>> - A fix for the Main Menu not being vertically centered.
- ### Version 2.0.0
  > #### Changes:
  >> ##### Added:
  >>> - A main menu.
