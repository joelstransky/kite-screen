# Kite Screen v1.1 - Chrome Web Store Submission Details

Use the following text to update your store listing and answer the privacy practice questions during submission.

## Store Listing Description

**Short Description:**
Turn any HTML5 video into a Picture-in-Picture floating window with a single click.

**Long Description:**
Kite Screen allows you to force Picture-in-Picture (PiP) mode on any HTML5 video element, even on sites that don't natively support it.

**New in Version 1.1:**
- **Updated for Manifest V3:** Improved security and performance compliance.
- **Smart Toggle:** New "Reel Out / Reel In" button that intelligently positions itself to avoid player controls.
- **Robust Overlay:** Now works reliably on complex video players by ensuring proper container positioning.

**Features:**
- Detects video elements on the current page automatically.
- Adds a simple overlay button to toggle Picture-in-Picture mode.
- Lightweight and privacy-focused: runs only when you click the action.

---

## Privacy & Permission Justifications

When asked why your extension requires specific permissions, use these statements:

## Permission justification
A permission is either one of a list of known strings, such as "activeTab", or a match pattern giving access to one or more hosts.
Remove any permission that is not needed to fulfill the single purpose of your extension. Requesting an unnecessary permission will result in this version being rejected.

### 1. Permission: `activeTab`
**Justification:**
"Kite Screen requires access to the active tab only when the user explicitly clicks the extension icon. This allows the extension to interact with the specific video element the user wants to float, without requiring broad host permissions for all websites."

### 2. Permission: `scripting`
**Justification:**
"The extension uses the scripting API to inject the 'toggle' overlay button (create.js) and associated styles (kitescreen.css) into the web page. This injection only occurs after the user has activated the extension on that specific tab."

### 3. Permission: `storage`
**Justification:**
"Storage is used exclusively to maintain the temporary state (session storage) of the overlay (e.g., whether the 'Reel In' or 'Reel Out' button is currently shown) for the individual tab. No user data or browsing history is permanently stored or tracked."

### 4. Permission: `declarativeContent`
**Justification:**
"This permission is used to efficiently detect if a page contains a `<video>` element and enable the extension's action icon accordingly. This ensures the extension is only clickable on relevant pages."

## Single Purpose Description
**Statement:**
"The sole purpose of Kite Screen is to provide users with a mechanism to toggle Picture-in-Picture (PiP) mode for HTML5 videos on websites that may not offer this functionality natively. All features and permissions are strictly dedicated to identifying video elements and providing the user interface to control this specific viewing mode."
