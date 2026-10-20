# ENSC 251 Study Guide

Every ENSC 251 (SFU) slide set explained in plain English, with step-through
tools, practice problems and a quiz at the end of each chapter. A wrong quiz
answer explains why the option you picked is wrong, then why the right one is
right.

It's a web app you can install on a phone and use offline.

## Put it on your phone

Open the GitHub Pages link for this repo on the phone, then:

- **iPhone (Safari):** tap Share, then **Add to Home Screen**.
- **Android (Chrome):** tap ⋮, then **Install app** (or **Add to Home screen**).

It opens full screen like an app and works without internet after the first
visit. Your progress (chapters done, quiz scores, answers) stays on the phone.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole guide: content, styles and scripts in one file |
| `manifest.webmanifest` | App name, colours and icons for installing |
| `sw.js` | Service worker that keeps a copy on the phone for offline use |
| `icons/` | Home-screen icons |

To update, edit `index.html` and push. Phones pick up the new version the next
time the app is opened with internet (it shows on the launch after that).

The C++ Runner app (`~/projects/cpp-runner`) shows a copy of this guide in its
side tab. After changing `index.html` here, copy it to `cpp-runner/guide/index.html`.
