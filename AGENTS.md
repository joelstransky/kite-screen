# Agent Guidelines

## Build, Lint & Test
- **Type:** Chrome Extension (Manifest V3). No build process/scripts.
- **Testing:** Manual only. Load folder as "unpacked extension" in Chrome developer mode.
- **Linting:** None configured. Inspect code manually.

## Code Style & Conventions
- **Indentation:** 2 spaces.
- **Semicolons:** Required at statement ends.
- **Quotes:** Double quotes (`"`) for strings/selectors; single quotes (`'`) for class names.
- **Variables:** `const` preferred, `let` if reassigned. No `var`.
- **Naming:** camelCase for variables/functions; UPPER_CASE for constants (e.g., `ACTIVE`).
- **Async/Await:** Use `async`/`await` pattern; wrap content scripts in async IIFEs.
- **Error Handling:** Use `try...catch` to handle expected API failures (e.g., PiP requests); silent catch is acceptable for non-critical UI toggles.
- **CSS:** Prefix classes with `jpsks__` to prevent conflicts.
- **Architecture:** `background.js` (Service Worker) handles state/events using `chrome.storage.session`; `create.js` injects UI; `destroy.js` cleans up.
