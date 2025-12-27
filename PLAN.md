# Plan: Navigation System & Mobile Polish

## Goal
Implement a logical "Previous / Next" navigation system for all sub-pages and optimize the mobile experience.

## context
The website consists of 21 sub-pages (static HTML). 
Currently, there is no direct navigation between them; users must return to the homepage to switch topics.
Mobile layout requires refinement for better readability and touch interaction.

## Phases

### Phase 1: Dynamic Navigation (JavaScript)
Instead of hardcoding links in 21 HTML files, we will use `main.js` to dynamically inject navigation controls.

1.  **Define Source of Truth**: Create an array of page objects in `main.js` containing:
    - Path (slug)
    - Title
    - Emoji
    - (Order is preserved from `index.html`)

2.  **Navigation Logic**:
    - Detect current page path.
    - Find index in the array.
    - Determine `prev` and `next` pages (handle first and last page edge cases).

3.  **DOM Injection**:
    - Create a `<nav class="post-navigation">` element.
    - Inject it *before* the site footer.

### Phase 2: Styling & Design System
Integrate the new navigation with the "Silent Luxury / Zen-iOS" aesthetic.

1.  **CSS (`style.css`)**:
    - **Container**: Flexbox layout (Row on Desktop, Column on Mobile).
    - **Buttons**:
        - Appearance: Glassmorphism cards (consistent with `.list-card`).
        - Interaction: Hover lift effects, subtle shadows.
        - Typography: Clear hierarchy (Small "Previous", Large Title).

### Phase 3: Mobile Optimization
Refine existing mobile styles.

1.  **Navigation Adaptation**:
    - Ensure buttons stack vertically on screens < 768px.
    - detailed touch targets.
2.  **General Polish**:
    - Review padding for `.container` on mobile.
    - Ensure text reliability (font sizes).

## Risk Assessment
- **Risk**: `main.js` execution delay might cause layout shift (CLS).
    - *Mitigation*: The simple script should run fast. CSS will reserve minimal space or handle flow gracefully.
- **Risk**: URL matching might fail if trailing slashes vary (`/no-hello` vs `/no-hello/`).
    - *Mitigation*: Normalize paths in JS before matching.

## Page Order (Reference)
1. no-hello
2. xy-problem
3. dont-ask-to-ask
4. it-didnt-work
5. wheatons-law
6. smart-questions
7. no-pointless-politeness
8. cunninghams-law
9. rubber-duck
10. bike-shedding
11. yak-shaving
12. hanlons-razor
13. postels-law
14. three-strikes
15. bluf
16. sturgeons-law
17. greshams-law
18. assume-public
19. echo-chamber
20. online-disinhibition
21. dunning-kruger
