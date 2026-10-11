# Spec: Dark Mode Toggle

## Goal
Let visitors switch the page between a light and a dark color theme with a
button, and remember their choice across visits.

## Requirements (acceptance criteria)
- A button is visible on the page that toggles between light and dark mode.
- Clicking it immediately changes background/text colors for the whole page.
- The button's label/icon reflects the current mode (combined icon + text,
  e.g. "🌙 Dark mode" / "☀️ Light mode").
- The choice is remembered on reload (stored in the browser).
- Doesn't break the existing heading, graphic, or topics list — they just
  restyle to match the theme.

## Non-goals
- No automatic live-switching if the OS theme changes while the page is open.
- No more than two themes (just light/dark) — no theme picker.

## Approach
- `style.css`: colors defined as CSS variables on `:root` (light defaults),
  overridden under `[data-theme="dark"]`.
- `index.html`: `<button id="theme-toggle">` added near the top of `<main>`.
- `script.js`: click handler flips the `data-theme` attribute on `<html>` and
  updates `localStorage`; on page load, reads any saved preference and
  applies it. Defaults to light mode when nothing is saved.

## Decisions
- Default theme for first-time visitors: **light mode** (no OS-preference
  detection).
- Button label style: **icon + text combined**.

## Status
Implemented on branch `dark-mode-toggle` (commit 872f5fb).
