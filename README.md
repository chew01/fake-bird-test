# Flipper

**This project was a mock-up of Twitter for me to test out the functionalities of React and Firebase.**

Having learnt the basics of React, I wanted to up the ante and explore more functionalities with Firebase APIs to advance my proficiency in web apps.

At this point in time, I was still writing my own CSS instead of using templates like Bootstrap to train my proficiency, though I did take reference from the height/width dimensions used in the actual Twitter website.

## Frameworks/Libraries/Tools used

- **React (primarily React Hooks)**
  - React Router V6 (Routing, Auth Redirects, Modal Overlays)
  - Styled Components (CSS for React Components)
- **Firebase**
  - Authentication (Email & Password user authentication)
  - Firestore Database (Storing user and tweet information)
  - Storage (Storing images)
- UUID (Generating keys for each tweet within a feed)

## Core features

- **Authentication** (Users should be able to sign up/log in)
  - Authentication-based Redirect (If logged out, user should be directed to main page/shown a prompt to sign up/log in)
  - Populating user info (If logged in, sections such as sidebar and user status should become available)
- **Tweet creation** (Users should be able to create tweets)
  - Tweet metadata (Tweets contain information about their time of creation and will be updated as such)
  - Image upload (Users should be able to include an image in their tweets)
- **Feed** (Feeds should be populated with posts based on certain criteria, such as tweets by followed users)
- **User Profile** (Users should be able to edit their name and display photo)
- **Follow functionality** (Users should be able to follow/unfollow other users)

## Planned features (if I do come back to test new skills out)

- App needs to be smoother (listeners to be added).
- I may eventually return to try some other things in the future.

## Lessons learnt

- In retrospect I should have learnt more about semantic html tags and used them more instead of div spam!
- I really overused Styled Components here. Instead of styling each div, I should have made templates.
- I was little confused about svgs, but I should've used them inline instead of img tags.
- Could've used things like forms, input placeholders instead of trying to create them myself!
