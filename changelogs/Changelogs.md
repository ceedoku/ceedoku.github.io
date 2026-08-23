- ### 8.4.2
  > #### Changes:
  >> ##### Fixed:
  >>> - 'Hints Limit' setting name using incorrect wording - it is now 'Hint Limit'
  >>> - 'Hints Limit' setting input box not having it's value set on page load
- ### 8.4.1
  > #### Changes:
  >> ##### Fixed:
  >>> - 'Enable Limited Hints' setting having too high of a gap from the other settings.
- ### 8.4.0
  > #### Changes:
  >> ##### Added:
  >>> - A cancel button inside the export save filename menu so you can cancel exporting your save game.
- ### 8.3.1
  > #### Changes:
  >> ##### Changed:
  >>> - The hover tooltip text for the version number when the script is unable to reach GitHub.
- ### 8.3.0
  > #### Changes:
  >> ##### Added:
  >>> - The ability to click the version number to go the GitHub release for that version.
- ### 8.2.0
  > #### Changes:
  >> ##### Added:
  >>> - The ability to name a save file before exporting it.
- ### 8.1.3
  > #### Changes:
  >> ##### Fixed:
  >>> - New game not working when the new game helper didn't initialise correctly.
  >>> - Print icon not existing on most devices.
- ### 8.1.2
  > #### Changes:
  >> ##### Fixed:
  >>> - The Continue Game menu mistakes and time values not updating after importing a save.
- ### 8.1.1
  > #### Changes:
  >> ##### Fixed:
  >>> - The game crashing whenever a notification was shown.
- ### 8.1.0
  > #### Changes:
  >> ##### Added:
  >>> - Notification thingy at the top.
  >> ##### Fixed:
  >>> - Being able to print with <kbd>Ctrl</kbd> + <kbd>P</kbd> or <kbd>Cmd</kbd> + <kbd>P</kbd> when a game is not running.
- ### 8.0.0
  > #### Changes:
  >> ##### Added:
  >>> - Importing and Exporting.
  >> ##### Fixed:
  >>> - Difficulty badge not updating on continuation of a game.
  >>> - Title not updating on continuation of a game.
- ### 7.1.1
  > #### Changes:
  >> ##### Fixed:
  >>> - Backwards compatibility for browsers without Web Worker support (A Web Worker runs JavaScript in a separate thread).
- ### 7.1.0
  > #### Changes:
  >> ##### Fixed:
  >>> - An issue where higher difficulty levels could fail to generate puzzles reliably (Rebalanced the hole counts).
  >>> - Game lag on creation of a new game.
  >> ##### Added:
  >>> - A spinner that shows on creation of a new game.
- ### 7.0.0
  > #### Changes:
  >> ##### Added:
  >>> - Hint limit settings (you can now set a hint limit and won't be able to use more than that many hints in a game).
  >>> - Support for printing Sudoku games (when printing the website, it will use a custom style designed specifically for printouts).
  >> ##### Fixed:
  >>> - Selected cells being wrong.
  >>> - Disabled color of some boxes being wrong.
  >>> - Selected cells not having a noticeable color difference compared to the other cells when in light mode.
- ### 6.2.0
  > #### Changes:
  >> ##### Added:
  >>> - The ability to customize the amount of hints regained after the hint cooldown.
  >> ##### Fixed:
  >>> - Fade animations not working correctly
- ### 6.1.0
  > #### Changes:
  >> ##### Added:
  >>> - Best time display for the currently selected difficulty.
  >>> - More comments for fun.
- ### 6.0.6
  > #### Changes:
  >> ##### Fixed:
  >>> - Cell selection borders having inconsistent thickness between edges on desktop devices.
  >> ##### Improved:
  >>> - Codebase readability.
- ### 6.0.5
  > #### Changes:
  >> ##### Fixed:
  >>> - New best time text not being centered on mobile.
- ### 6.0.4
  > #### Changes:
  >> ##### Fixed:
  >>> - Pencil mode and erase mode staying enabled on creation of a new game with the difficulty set to Godlike.
  >>> - Icons being low quality on launch.
  >>> - Icons not existing for pwas at all resulting in using the wrong files.
- ### 6.0.3
  > #### Changes:
  >> ##### Improved:
  >>> - Selected cell outline, now removes outlines that shouldnt be visible.
  >> ##### Fixed:
  >>> - Cells that have numbers in them not getting the correction background color for selections.
- ### 6.0.2
  > #### Changes:
  >> ##### Improved:
  >>> - Selected cell outline, it is now slightly out of the cell and just generally looks better.
  >> ##### Fixed:
  >>> - The contents of selected cells being shifted by a bit.
- ### 6.0.1
  > #### Changes:
  >> ##### Fixed:
  >>> - A bug where you could pause/unpause the game after win when in portrait.
  >>> - Feedback link leading to the old form.
  >>> - Some difficulties not being visible in menus in mobile.
- ### Version 6.0.0
  > #### Changes:
  >> ##### Added:
  >>> - Best time system (that's basically done).
  >>> - More bugs for me to be fixing later.
- ### Version 5.2.1
  > #### Changes:
  >> ##### Fixed:
  >>> - Animations not working for some things.
  >>> - Styling of the feedback thingy.
  >>> - Pause button not visible on some mobile devices.
  >>> - Version number and feedback thingy getting cutoff on mobile because most phones have rounded corners on their screen.
- ### Version 5.2.0
  > #### Changes:
  >> ##### Added:
  >>> - A feedback button (or is it a link to u guys) - IDK what to call it... whatever, it exists.
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
  >>> - 'Version:' before the version number.
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
