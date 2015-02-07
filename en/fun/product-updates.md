***

<br />

# <a href="2015" name="2015">2015</a>
***

## <a href="February-2015" name="February-2015">February 2015</a>
***
### <a href="#February-4-2015" name="February-4-2015">February 4, 2015</a>
- Increase upload limit from 10MB to 25MB
- Fix [rich paste support](/articles/en/general/long-messages) for plain text message
- Fix mentions for names such as `A@B`
- Replaces Organization with Team in Audit Log messages
- Set the "email me when someone joins my Kato team" to off by default
- In invite emails, all links now point to the invitation target
- Uncheck the [Claim domain](https://kato.im/articles/en/teams/claiming-domains) option during signup by default
- Fix: [CircleCi integration](/articles/en/power-users/integrations#wordpress) crashes for empty commits
- Fix: [GitHub integration](/articles/en/power-users/integrations#github) crashes when actions have empty label names
- Fix: [HockeyApp integration](/articles/en/power-users/integrations#hockeyapp) crashes when `reason` is empty
- Fix: [JIRA integration](/articles/en/power-users/integrations#jira) crashes priority is undefined
- Enterprise: replace (None) with **Kato Teams** in _Domain_ dropdown

## <a href="January-2015" name="January-2015">January 2015</a>
***

### <a href="#January-30-2015" name="January-30-2015">January 30, 2015</a>
- New, [GitHub-based](https://github.com/kato-im/articles) [kato.im/articles](/articles). **Contributions welcome!**
- Security fix: options to disable support rooms, invitation by non-admins and creating unrestricted rooms were ignored in some cases
- Show [profile cards](/articles/en/general/profile-cards) on click instead of hover.
- Show the list of users that have access to a restricted room in the room hamburger menu  instead of a red line in the roster
- Organizations are now Teams
- Change `Shift+o` [keyboard control](/articles/en/power-users/keyboard-control) shortcut to `Shift+t` for quick access to the Teams section
- Allow users without cameras to initiate and join calls
- Improve roster performance for teams with thousands for users and rooms
- Mark the Kato support room as such in weekly usage report emails 
- Add service name and room id to integrations crash info message
- Preview for monosnap
- Mark hidden messages as such in downloaded room history
- Fix mention autocomplete for user/room names with spaces
- Fix some options in profile cards that weren't working
- Fix jumpiness in Google Drive integration warning
- Fix issues with Cyrillic in [Wordpress integration](/articles/en/power-users/integrations#wordpress)
- Better crash messages for [TeamCity integration](/articles/en/power-users/integration#teamcity)
- Fix issues with browser resize when Global Search is open
- Fix crash in the [IFTTT integration](/articles/en/power-users/integrations#ifttt) when robot name is too long
- Fix for the extra `)` in [Bitbucket](/articles/en/power-users/integrations#bitbucket) and [GitLab](/articles/en/power-users/integrations#gitlab) integrations (this took way too long, sorry about that)
- Unrestricted rooms appeared as restricted in [Audit Log](/articles/en/teams/security-audit-log)
- Fix crash on empty description in the [Balanced](/articles/en/power-users/integrations#balanced) integration
- Do not intercept `Shift+Esc` in Chrome on Linux and Windows. This way the task manager can still be opened.
- Add `[beta]` suffix for the [Kato beta site](https://beta-app.kato.im)

### <a href="#January-9-2015" name="January-9-2015">January 9, 2015</a>
- Admins of teams active two weeks in a row now get weekly email reports
- Updated Source Sans Pro, now with Cyrillic support
- Fixed a bug preventing hook script downloads for Git and Perforce
- Show Grooveshark thumbnails instead of previews, because of autoplay
- New integration! HockeyApp
- Support BCC in email integration
- Fix crash in Mandrill integration
- Add "push tag" event to GitLab integration
- Fix links in GitHub integration

## <a href="#December-2014" name="December-2014">December 2014</a>
***

### <a href="#December-15-2014" name="December-15-2014">December 15, 2014</a>
- Added support for pasting images from clipboard in Firefox
- Enabled rich previews, e.g. Google Docs, Rdio, Spotify, SoundCloud, New York Times
- Fixed "Create New Organization" button
- Fixed incorrect UTF-8 symbols in the 'From' field for some emails
- Fixed a typo in the "Text, Voice and Video" section of the Product page
- Updated some error messages
- Updated welcome text to clarify that entire team can see support room

### <a href="#December-12-2014" name="December-12-2014">December 12, 2014</a>
- Security fix: admin without access to room no longer sees it in global search results (thanks, Bernie!)
- New design for sign in / sign up page! 
- Fix account deletion confirmation popup
- Onboarding Wizard updates and fixes

### <a href="#December-8-2014" name="December-8-2014">December 8, 2014</a>
- Fix presence indicator for new member
- Onboarding Wizard updates and fixes
- `Ctrl+[` is an alias for `Esc` in [Keyboard Control](https://kato.im/articles/en/power-users/keyboard-control) mode
- [Keyboard Control] When pasting with `Ctrl+v` or `Command+v`, switch to insert mode
- [Keyboard Control] `Enter` will open the first link when focus is on a message
- [Keyboard Control] New, better last message edit functionality (`u`)
- New home page headline
- Update "Congrats" page after a user creates a Kato Teams account

## <a href="#November-2014" name="November-2014">November 2014</a>
***

### <a href="#November-29-2014" name="November-29-2014">November 29, 2014</a>
- Google drive integration: share file with write access instead of read-only

### <a href="#November-25-2014" name="November-25-2014">November 25, 2014</a>
- Make initial text in empty rooms much more informative

### <a href="#November-24-2014" name="November-24-2014">November 24, 2014</a>
- Fix discrepancy with bg color in HTTP POST integration
- Fix for "Open web app" link not working on iPhone Chrome and Safari

### <a href="#November-22-2014" name="November-22-2014">November 22, 2014</a>
- Fix Travis crash (undefined repo URL) (thanks, Chris!)

### <a href="#November-20-2014" name="November-20-2014">November 20, 2014</a>
- Remove Kato Roll :(
- Fix issue with people colors changing when creating another Kato team 

### <a href="#November-19-2014" name="November-19-2014">November 19, 2014</a>
- Fix 'since' time for mobile presence tooltips

### <a href="#November-17-2014" name="November-17-2014">November 17, 2014</a>
- Fix a Chrome-on-Windows problem with "more" button
- Show previews for tweets

### <a href="#November-14-2014" name="November-14-2014">November 14, 2014</a>
- Fix for the [Sprintly integration](https://kato.im/articles/en/power-users/integrations/#sprintly) (thanks, Jason!)
- Fix utf8 handling in [Jira integration](https://kato.im/articles/en/power-users/integrations/#jira) (thanks, geiger!)
- Fix scary server bug
- Add label names [GitHub integration](https://kato.im/articles/en/power-users/integrations/#github) (thanks, Craig!)
- Add colors to [OpsGenie integration](https://kato.im/articles/en/power-users/integrations/#opsgenie) (thanks, Andrew!)
- When 1-1s are disabled, don't make them enabled via a security loophole (thanks, Rachel & Aliciah!)
- New logo for Box integration (thanks, Sanjay!)
- Fix [Stripe integration](https://kato.im/articles/en/power-users/integrations/#stripe) (thanks, Roger!)
- Update the [Kato Hubot adapter](https://github.com/kato-im/hubot-kato)

### <a href="#November-12-2014" name="November-12-2014">November 12, 2014</a>
- Fixed a number of stability issues in the [Android app](https://play.google.com/store/apps/details?id=im.kato)
- New integration: [UberConference](https://kato.im/articles/en/power-users/uberconference-integration/)! (Thanks, Hugo!)

## <a href="#October-2014" name="October-2014">October 2014</a>
***

### <a href="#October-29-2014" name="October-29-2014">October 29, 2014</a>
- New integration: [Doorbell](https://kato.im/articles/en/power-users/integrations/#doorbell)
- Android app v 1.2.93 released [link](https://play.google.com/store/apps/details?id=im.kato)

### <a href="#October-23-2014" name="October-23-2014">October 23, 2014</a>
- Bye-bye, hover crazytown
- Hello, [message cards](cheatsheet#message-cards)!

![clip.png](https://in.kato.im/21c0c392b1074f2aa79859429ee4bac14b614e65ea71d06340d53406e51359f/clip.png)

### <a href="#October-21-2014" name="October-21-2014">October 21, 2014</a>
- Extra! Extra! Introducing [gifv](http://imgur.com/blog/2014/10/09/introducing-gifv/) support
- New organization-level policy: disable [off-the-record](https://kato.im/articles/en/general/cheatsheet/#off-the-record) for non-admins. [URL to new setting](https://app.kato.im/#/membership/_/policy/off-the-record)
- Send "has joined" emails only regarding email-based signups (vs. URL) and automatic signups based on domain
- Improve [Stash integration](https://kato.im/articles/en/power-users/integrations/#stash)

### <a href="#October-16-2014" name="October-16-2014">October 16, 2014</a>
- v1.2.66 of iOS app is available

### <a href="#October-13-2014" name="October-13-2014">October 13, 2014</a>
- New feature: [Kato channel on IFTTT!](https://ifttt.com/kato) [Learn more](https://kato.im/articles/en/fun/ifttt-integration)

### <a href="#October-7-2014" name="October-7-2014">October 7, 2014</a>
- Do not allow anchor outline in links when part of message content
- Properly handle hiding of modals

### <a href="#October-6-2014" name="October-6-2014">October 6, 2014</a>
- New feature: add a link to open room post-creation
- Fix awful bug in [HTTP POST integration](https://kato.im/articles/en/power-users/integrations/#http_post) instructions
- Make video icons same size
- Fix room border issue

### <a href="#October-5-2014" name="October-5-2014">October 5, 2014</a>
- Further updates to [global integrations view](https://app.kato.im/#/integrations)
- Fix bug in [Trello integration](https://kato.im/articles/en/power-users/integrations/#trello)

### <a href="#October-4-2014" name="October-4-2014">October 4, 2014</a>
- Update [Visual Studio Online integration](https://kato.im/articles/en/power-users/integrations/#vso) copy

### <a href="#October-3-2014" name="October-3-2014">October 3, 2014</a>
- Don't show Kato Roll to users who don't have access to Kato Roll
- Improvements to [global integrations UI](https://app.kato.im/#/integrations)
- New feature: Box.com file picker
- [Codeship integration](https://kato.im/articles/en/power-users/integrations/#codeship) formatting updates

### <a href="#October-2-2014" name="October-2-2014">October 2, 2014</a>
- Adjust colors (tone them _way_ down) for [noise controls](https://kato.im/articles/en/notifications/noise-control/)
- Adjust spacing of g+ icon (used for GDocs integration, of course)
- Update verbiage in policy tab of organization settings
- Fix tooltip wrap issue in Firefox
- Don't show Kato Roll when Kato Roll is not available

### <a href="#October-1-2014" name="October-1-2014">October 1, 2014</a>
- Improvements in fixes in global integrations view - [https://app.kato.im/#/integrations](https://app.kato.im/#/integrations)

## <a href="#September-2014" name="September-2014">September 2014</a>
***

### <a href="#September-30-2014" name="September-30-2014">September 30, 2014</a>
- Improve in-app URL routing
- CEO drawing

![clip.png](https://s3.amazonaws.com/kato-share/85e82d6b396b06a693e133b57f4308fdf69e1cf06759e3821c7c80a44bcd839a/clip.png)

### <a href="#September-29-2014" name="September-29-2014">September 29, 2014</a>
- New integration: [Codeship](https://kato.im/articles/en/power-users/integrations/#codeship)

### <a href="#September-23-2014" name="September-23-2014">September 23, 2014</a>
- Improve Google Hangouts menu
- Introduce onboarding wizard
- Don't show photo snapshot option in browsers that don't support this (Safari, hi)

### <a href="#September-22-2014" name="September-22-2014">September 22, 2014</a>
- Improve formatting in help modal for [Keyboard Control](https://kato.im/articles/en/power-users/keyboard-control)
- Fix various in-app URL routing issues

### <a href="#September-21-2014" name="September-21-2014">September 21, 2014</a>
- Fix instructions in [Visual Studio Online integration](https://kato.im/articles/en/power-users/integrations/#vso)

### <a href="#September-20-2014" name="September-20-2014">September 20, 2014</a>
- New icon for [Intercom integration](https://kato.im/articles/en/power-users/integrations/#intercom)

### <a href="#September-18-2014" name="September-18-2014">September 18, 2014</a>
- Fix beeps in MacGap when using [Keyboard Control](https://kato.im/articles/en/power-users/keyboard-control)

### <a href="#September-17-2014" name="September-17-2014">September 17, 2014</a>
- Introduce global integrations view: [https://app.kato.im/#/integrations](https://app.kato.im/#/integrations)

### <a href="#September-15-2014" name="September-15-2014">September 15, 2014</a>
- New feature: make it possible to claim a non-generic domain for your company
- Improve charts in weekly stats emails (alpha, WIP)

### <a href="#September-12-2014" name="September-12-2014">September 12, 2014</a>
- New feature: GDrive file picker
- New feature: rich paste support, support Markdown, code, and plain

### <a href="#September-11-2014" name="September-11-2014">September 11, 2014</a>
- Fix markdown formatting
- Fix hiding PEOPLE and ROOMS bars for [restricted members](https://kato.im/articles/en/general/cheatsheet/#restricted-members)
- Show error for invalid emails

### <a href="#September-10-2014" name="September-10-2014">September 10, 2014</a>
- New integration: [OpsGenie](https://kato.im/articles/en/power-users/integrations/#opsgenie)
- Fix font in help menu

### <a href="#September-8-2014" name="September-8-2014">September 8, 2014</a>
- Improve help menu

### <a href="#September-5-2014" name="September-5-2014">September 5, 2014</a>
- Fix display glitch with modal backgrounds
- Add space before pasted link if not preceded by space
- Auto-select lone org in dropdown menus
- Fix Firefox room drag-drop issue
- Hide Kato Roll on mobile

### <a href="#September-4-2014" name="September-4-2014">September 4, 2014</a>
- Move Kato Roll controls to Kato Roll UI
- Show more info in [Intercom integration](https://kato.im/articles/en/power-users/integrations/#intercom) when new user signs up

### <a href="#September-2-2014" name="September-2-2014">September 2, 2014</a>
- Reset file chooser after use

## <a href="#August-2014" name="August-2014">August 2014</a>
***

### <a href="#August-29-2014" name="August-29-2014">August 29, 2014</a>
- New integration: [Intercom](https://kato.im/articles/en/power-users/integrations/#intercom)
- Fix message selection

### <a href="#August-28-2014" name="August-28-2014">August 28, 2014</a>
- Fix issue with Global Search when using Keyboard Control
- Use bar charts instead of pie charts in weekly stats email (alpha)
- CEO drawing

![clip.png](https://s3.amazonaws.com/kato-share/5bafa7624ef7e91f86276c22bbcbfd739a52e12a6b6e893261b5e4865689685a/clip.png)

### <a href="#August-27-2014" name="August-27-2014">August 27, 2014</a>
- New feature: invite unrestricted members via URL
- Improvements to admin modals
- Hide Kato Roll if camera is disabled
- Don't show Kato Roll until camera is authorized
- Adjust verbiage in revoke adminship tab

### <a href="#August-25-2014" name="August-25-2014">August 25, 2014</a>
- Fix issues with room drag-n-drop
- Fix PagerDuty crash
- New feature: Integration with Google Hangouts
- Better weekly reports (Kato org only)

### <a href="#August-22-2014" name="August-22-2014">August 22, 2014</a>
- v1.1.38 of iOS app is available

### <a href="#August-21-2014" name="August-21-2014">August 21, 2014</a>
- Publish new pricing (Kato is free! Wow.)

### <a href="#August-19-2014" name="August-19-2014">August 19, 2014</a>
- Fix timestamp padding in mention emails

### <a href="#August-18-2014" name="August-18-2014">August 18, 2014</a>
- Make Keyboard Control help modal look a little better

### <a href="#August-17-2014" name="August-17-2014">August 17, 2014</a>
- Add Steve to [/about](https://kato.im/about) page

### <a href="#August-16-2014" name="August-16-2014">August 16, 2014</a>
- Fix backend issue with integrations

### <a href="#August-14-2014" name="August-14-2014">August 14, 2014</a>
- Fix "Red marker in roster is not visible for newly added members with access to an open restricted room"

### <a href="#August-13-2014" name="August-13-2014">August 13, 2014</a>
- New feature: profile cards
- Keep error message around in banner (use x to close)

### <a href="#August-12-2014" name="August-12-2014">August 12, 2014</a>
- Fix image aspect ratio
- Create **All** room by default, open it

### <a href="#August-11-2014" name="August-11-2014">August 11, 2014</a>
- New feature (internal)

### <a href="#August-7-2014" name="August-7-2014">August 7, 2014</a>
- Fix for "Chrome on Retina OS X only: After closing the Membership view, histories in all rooms scroll up."
- v1.1.38 of iOS app available 

### <a href="#August-6-2014" name="August-6-2014">August 6, 2014</a>
- Happy birthday Boris!

### <a href="#August-4-2014" name="August-4-2014">August 4, 2014</a>
- Remember room search state when resizing layout
- Remove leading space for pasted links (makes composing `![clip](URL)`-type images in Markdown much easier)
- Second mention in a message is shown as encoding when the message is edited - fix this
- Add organization name to room tooltip for narrow screens
- Fix UI bugs for "Change" buttons

### <a href="#August-3-2014" name="August-3-2014">August 3, 2014</a>
- In-app URL routing: only show orgs where user is an admin
- Fix issue for mentions for people with whom you share several organizations
- More descriptive HTTP status for simple HTTP post integration

### <a href="#August-2-2014" name="August-2-2014">August 2, 2014</a>
- Fix Pingdom integration

## <a href="#July-2014" name="July-2014">July 2014</a>
***

### <a href="#July-31-2014" name="July-31-2014">July 31, 2014</a>
- New feature: drag and drop rooms to reorder

### <a href="#July-30-2014" name="July-30-2014">July 30, 2014</a>
- New feature: email a weekly report with statistics (Kato org only)
- Improve UI for pending messages

### <a href="#July-29-2014" name="July-29-2014">July 29, 2014</a>
- Show "just now" for messages that were just sent (this magically fixes the biggest WTF on Kato)
- Fix issues with file upload UI
- Fix Fast Forward behavior
- Fix Kato Roll presence icon
- Happy birthday Peter!

### <a href="#July-28-2014" name="July-28-2014">July 28, 2014</a>
- Use first organization if none selected
- Fix scrolling on membership page
- `Enter` key handling in forgot password modal
- Fix narrow roster organization item with unread counter
- Make message collapsed after delete/hide
- Upgrade to Font Awesome 4.1
- v1.0.2 of iOS app available
- CEO drawing

![clip.png](https://s3.amazonaws.com/kato-share/7846de8d3537da198c6001cbdf36674bb4998ec61b35297a3470f394f6063f19/clip.png)

### <a href="#July-24-2014" name="July-24-2014">July 24, 2014</a>
- Fix typos

### <a href="#July-23-2014" name="July-23-2014">July 23, 2014</a>
- Continue processing after error in invite modal
- Select uncollapsed organization by default
- Nice fading for long names in room headers instead of ellipsis, so 2009
- Improve edit last message menu
- Fix retry (load history) button
- Fix mentions autocomplete

### <a href="#July-22-2014" name="July-22-2014">July 22, 2014</a>
- Multiple fixes related to Keyboard Control + Global Search
- Fix issue with Kato Roll flashing old photo
- Fix beveled appearance of room input menu
- Fix room footer issues
- Tweak room header centering and Global Search bottom border
- Fix image preview aspect ratio issue


### <a href="#July-21-2014" name="July-21-2014">July 18, 2014</a>
- 1.0.1 of iOS out available

### <a href="#July-18-2014" name="July-18-2014">July 18, 2014</a>
- CSS refactor
- Fix rooms/people filter UX
- Fix crazy brokenness related to meta keys and Keyboard Control
- Decrease the width of the Global Search pane
- Add tooltip to the 1-1 clock icon

### <a href="#July-17-2014" name="July-17-2014">July 17, 2014</a>
- New feature: [Keyboard Control](https://kato.im/articles/en/power-users/keyboard-control/)

### <a href="#July-16-2014" name="July-16-2014">July 16, 2014</a>
- Fix a ton of UI bugs (for new UI)

### <a href="#July-8-2014" name="July-8-2014">July 8, 2014</a>
- Make emails look decent on old Android devices

## <a href="#June-2014" name="June-2014">June 2014</a>
***

### <a href="#June-30-2014" name="June-30-2014">June 30, 2014</a>
- Expand extended routing (add more URLs)

### <a href="#June-26-2014" name="June-26-2014">June 26, 2014</a>
- Rewrite mention autocomplete feature

### <a href="#June-18-2014" name="June-18-2014">June 18, 2014</a>
- Improve password reset UI
- Don't resize rooms when management modal/screen is active
- Fix security hole in invites

### <a href="#June-16-2014" name="June-16-2014">June 16, 2014</a>
- Introduce extended routing, lets us do stuff like https://app.kato.im/#/integrations

### <a href="#June-11-2014" name="June-11-2014">June 11, 2014</a>
- Set min room width to 200px
- Fix layout in settings modal at low screen resolution

### <a href="#June-10-2014" name="June-10-2014">June 10, 2014</a>
- Fix crash in GitHub integration
- Fix message click to select/de-select
- Fix border on message highlight
- CEO drawing

![clip.png](https://s3.amazonaws.com/kato-share/271fa439a0f6c3ba421e43ed8c3f9a9eaf4e711f35a82cef1d891dd73edf4688/clip.png)

### <a href="#June-9-2014" name="June-9-2014">June 9, 2014</a>
- Fix room order in left-docked layout
- Fix multiline code newlines in [Markdown mode](https://kato.im/articles/en/power-users/markdown-syntax/)
- Fix mentions at beginning of new line

### <a href="#June-8-2014" name="June-8-2014">June 8, 2014</a>
- New integration: [WorkingOn](https://kato.im/articles/en/power-users/integrations/#workingon)

### <a href="#June-6-2014" name="June-6-2014">June 6, 2014</a>
- Fix type in organization settings modal
- Fix horizontal scroll issues
- Fix Kato Roll scroll issue
- Don't allow to mention a user who doesn't have access to a [restricted room](https://kato.im/articles/en/general/cheatsheet/#restricted-rooms) in said restricted room
- Fix issue with [unpinned](https://kato.im/articles/en/general/cheatsheet/#pins) rooms being replaced
- Change click area for selecting entire message
- Fix video button layout at narrow room width

### <a href="#June-5-2014" name="June-5-2014">June 5, 2014</a>
- Massive refactoring of UI innards
- Fix collapse issue with [multi-organization membership](https://kato.im/articles/en/general/cheatsheet/#multiple-orgs)
- Hide Kato Roll icon in Safari, because Safari doesn't support amazing things

### <a href="#June-4-2014" name="June-4-2014">June 4, 2014</a>
- Include embed code in public room integration

### <a href="#June-3-2014" name="June-3-2014">June 3, 2014</a>
- Fix code intentation
- Correctly handle Regex special characters in search result highlighting
- Fix drafts
- Fix mentions autocomplete algorithm

### <a href="#June-2-2014" name="June-2-2014">June 2, 2014</a>
- Port mention autocomplete algorithm from mobile core to web

## <a href="#May-2014" name="May-2014">May 2014</a>
***

### <a href="#May-28-2014" name="May-28-2014">May 28, 2014</a>
- Do not create invitation requests for existing accounts

### <a href="#May-26-2014" name="May-26-2014">May 26, 2014</a>
- Delete all sessions on password reset

### <a href="#May-25-2014" name="May-25-2014">May 25, 2014</a>
- Add ability to resend invite emails

### <a href="#May-24-2014" name="May-24-2014">May 24, 2014</a>
- Fix security hole in invitations

### <a href="#May-23-2014" name="May-23-2014">May 23, 2014</a>
- New integration: [Redmine](https://kato.im/articles/en/power-users/integrations/#redmine)

### <a href="#May-22-2014" name="May-22-2014">May 22, 2014</a>
- Url-encode parentheses in filenames to fix markdown links (yes!)

### <a href="#May-19-2014" name="May-19-2014">May 19, 2014</a>
- Fix room header on mobile

### <a href="#May-18-2014" name="May-18-2014">May 18, 2014</a>
- Make collapse button work correctly for video call widget

### <a href="#May-16-2013" name="May-16-2013">May 16, 2013</a>
- Fix issue with layout switching and not saving room state
- Remove cursor pointer from room header
- Fix boolean of roster sorting switch
- Make roster menu match room dropdown appearance
- First message in room had no message control - fix this
- Fix memory leak
- Make default layout to be two

### <a href="#May-14-2013" name="May-14-2013">May 14, 2013</a>
- Fix CSS of room search to match room history

### <a href="#May-13-2013" name="May-13-2013">May 13, 2013</a>
- Allow undo to undo `Esc` key clear
- New feature: [Security Audit Log](https://kato.im/articles/en/teams/security-audit-log/)!

### <a href="#May-12-2014" name="May-12-2014">May 12, 2014</a>
- Introduce signup codes
- Clear rooms search input on `Esc`
- Double meaning for `Esc` in room search to match Global Search

### <a href="#May-11-2014" name="May-11-2014">May 11, 2014</a>
- New integration: [Pingdom](https://kato.im/articles/en/power-users/integrations/#pingdom)
- Show error message if a camera if the user did not allow Kato use of the camera
- Change Kato Roll background color
- CEO drawing:

![clip.png](https://s3.amazonaws.com/kato-share/298f5a78a3dfa899fc1569c984a5d28c4bce5718aaf9ddeed888632cfc206/clip.png)

### <a href="#May-10-2014" name="May-10-2014">May 10, 2014</a>
- Show correct integration type labels in search mode

### <a href="#May-9-2014" name="May-9-2014">May 9, 2014</a>
- Happy Victory Day!
- Fix scrolling issue related to [off-the-record mode](https://kato.im/articles/en/general/cheatsheet/#off-the-record)

### <a href="#May-8-2014" name="May-8-2014">May 8, 2014</a>
- Fix scrolling issues related text input auto-resize
- Fix issue with restoring rooms on Global Search close
- Released [Android app](https://play.google.com/store/apps/details?id=im.kato)!

### <a href="#May-7-2014" name="May-7-2014">May 7, 2014</a>
- Only load rooms when the app starts (fixes major reconnect-related annoyance)
- Disallow Everybody and Everyone as username
- Fix search highlighting in URLs

### <a href="#May-6-2014" name="May-6-2014">May 6, 2014</a>
- Show user's local time in room header when user is offline
- Fix issue with height of input field

### <a href="#May-5-2014" name="May-5-2014">May 5, 2014</a>
- Fix Knockout.js dependency
- New feature: make it possible for the user to configure room layout (max rooms, min room width)
- Make response-via-email prettier

### <a href="#May-4-2014" name="May-4-2014">May 4, 2014</a>
- Fix bug with Trello that requires authorization each time the tab is opened
- New feature: delete account :(
- Scroll history to dead bottom on `Esc`

### <a href="#May-3-2014" name="May-3-2014">May 3, 2014</a>
- Remove space symbol after mention in mention emails
- Separate generic integrations (HTTP, Email) into their own section

### <a href="#May-2-2014" name="May-2-2014">May 2, 2014</a>
- Fix vertical alignment of icons

### <a href="#May-1-2014" name="May-1-2014">May 1, 2014</a>
- Let's get some work done in honor of the ### International Workers' Day!
- Unify rooms / public rooms filedrop code
- Various fixes related to container heights
- Fix history jump when timestamp appears
- Fix gazette (getting started) in 2-layout
- Fix Kato Roll photo margins
- Roll out CEO drawing:

![clip.png](https://s3.amazonaws.com/kato-share/6d20add56b5176453f1eb45c5a4afc73cda3a0e838ef0d9014e5ead57da52903/clip.png)

## <a href="#April-2014" name="April-2014">April 2014</a>
***

### <a href="#April-30-2014" name="April-30-2014">April 30, 2014</a>
- Add ability to manage adhoc keys
- Introduce Kato Roll presence status icon

### <a href="#April-29-2014" name="April-29-2014">April 29, 2014</a>
- Fix `Enter` key behavior in add rooms modal

### <a href="#April-28-2014" name="April-28-2014">April 28, 2014</a>
- Improved screensharing

### <a href="#April-26-2014" name="April-26-2014">April 26, 2014</a>
- Reuses WebRTC instance between logins

### <a href="#April-22-2014" name="April-22-2014">April 22, 2014</a>
- Highlights entire line for mentions
- Fixed icon spacing in file upload UI
- Fixed line breaks in search results for non-Markdown messages
- Fixed inconsistent Markdown indent
- Fixed an issue with multiple indents, limit to 7 (Markdown)
- Permits whitespace between indents (Markdown)


### <a href="#April-19-2014" name="April-19-2014">April 19, 2014</a>
- v1.0.0 of iOS app available

### <a href="#April-18-2014" name="April-18-2014">April 18, 2014</a>
- Fixed memory leak
- Fixed history jumping on mouseover
- Fixed history scroll when image previews are loaded

### <a href="#April-7-2014" name="April-7-2014">April 7, 2014</a>
- Increased Emoji size
- Fixed renderer type in edited message
- Fixed Markdown indents in multi-line mode
- Unified layout of plaintext and Markdown messages
- Turns newlines to spaces in collapse messages

### <a href="#April-5-2014" name="April-5-2014">April 5, 2014</a>
- Formatting in emails with [mentions](https://kato.im/articles/en/general/cheatsheet/#mentions) is closer to what we show in the web app

### <a href="#April-3-2014" name="April-3-2014">April 3, 2014</a>
- Closes full-screen roster is window is too wide
- A ton of other UI fixes

### <a href="#April-1-2014" name="April-1-2014">April 1, 2014</a>
- Allows resize of Kato Roll
- Allows UTF-8 filenames in [uploaded files](https://kato.im/articles/en/general/cheatsheet/#file-sharing) (yay!)

## <a href="#March-2014" name="March-2014">March 2014</a>
***

### <a href="#March-29-2014" name="March-29-2014">March 29, 2014</a>
- Add Lars and Boris to [About page](http://kato.im/about)

### <a href="#March-28-2014" name="March-28-2014">March 28, 2014</a>
- Fixed a ton of small, but important UI issues
- Uses fancy animation for pending messages
- Fixed Global Search display bug
- Added Hugh's photo to [About page](http://kato.im/about)
- Uses single image for all [integrations](https://kato.im/articles/en/power-users/integrations)
- Added support for [GitHub-style emoji](https://kato.im/articles/en/fun/emoji-support/)
- Migrated to [Font Awesome 4](http://fontawesome.io/)

### <a href="#March-24-2014" name="March-24-2014">March 24, 2014</a>

- Roll out CEO drawing:

![clip.png](https://s3.amazonaws.com/kato-share/1734fc3d3fef050189072bb3ee7a9f3e586e4914462c9308e354f781826466d9/clip.png)

### <a href="#March-17-2014" name="March-17-2014">March 17, 2014</a>
- Escapes `#` correctly in JIRA integration

### <a href="#March-15-2014" name="March-15-2014">March 15, 2014</a>
- Fixed file upload issue in [MacGap App](http://download.kato.im/Kato.pkg)

### <a href="#March-10-2014" name="March-10-2014">March 10, 2014</a>
- Allows OneNote as link protocol

## <a href="#February-2014" name="February-2014">February 2014</a>
***

### <a href="#February-25-2014" name="February-25-2014">February 25, 2014</a>
- Fixed ESC to clear room search
- Fixed search highlighting in URLs
- Migrated to Bootstrap 3.1! <- big one

### <a href="#February-20-2014" name="February-20-2014">February 20, 2014</a>
- When clicking on [Markdown](https://kato.im/articles/en/power-users/markdown-syntax/) message, selects the whole message
