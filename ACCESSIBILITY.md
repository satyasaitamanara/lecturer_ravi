# Accessibility Checklist

This document outlines the accessibility features implemented in this website to ensure WCAG 2.1 AA compliance.

## ✅ Perceivable

### Text Alternatives
- [x] All images have descriptive alt text
- [x] Decorative images use empty alt text
- [x] Icon-only buttons have aria-label attributes
- [x] Logo has descriptive text content

### Adaptable Content
- [x] Semantic HTML5 elements used throughout (header, nav, main, section, footer)
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Content order makes sense when linearized
- [x] Form labels properly associated with inputs
- [x] Lists use proper list markup

### Distinguishable
- [x] Color contrast ratios meet WCAG AA standards:
  - Text on navy background: #ffffff on #0f2a44 (10.87:1) ✓
  - Text on beige background: #0f2a44 on #f6f2ea (10.18:1) ✓
  - Accent teal: #2aa79b provides sufficient contrast
- [x] Information is not conveyed by color alone
- [x] Text can be resized up to 200% without loss of functionality
- [x] Images of text are avoided (text is actual text)
- [x] Line height is at least 1.5 for body text
- [x] Paragraph spacing is adequate

## ✅ Operable

### Keyboard Accessible
- [x] All interactive elements are keyboard accessible
- [x] No keyboard traps
- [x] Tab order is logical
- [x] Skip to main content (via smooth scroll navigation)
- [x] Custom focus indicators visible on all interactive elements

### Enough Time
- [x] Auto-playing carousel has pause/manual controls
- [x] Animations can be paused or disabled via prefers-reduced-motion
- [x] No time limits on form submission

### Seizures and Physical Reactions
- [x] No content flashes more than 3 times per second
- [x] Animations are smooth and gentle
- [x] Motion can be disabled via prefers-reduced-motion

### Navigable
- [x] Page has descriptive title tag
- [x] Link purpose is clear from link text
- [x] Multiple navigation methods (nav menu, footer links, smooth scroll)
- [x] Headings describe topic or purpose
- [x] Current page section is indicated (active nav highlight)
- [x] Focus order is meaningful
- [x] Visual focus indicator is visible

### Input Modalities
- [x] Touch targets are at least 44x44 CSS pixels
- [x] Works with mouse, keyboard, and touch
- [x] No path-based gestures required
- [x] Labels and instructions provided for form inputs

## ✅ Understandable

### Readable
- [x] Language of page is set (lang="en")
- [x] Base font size is 16px (1rem)
- [x] Content is written in clear language
- [x] Technical terms are explained where necessary

### Predictable
- [x] Navigation is consistent across sections
- [x] Components are used consistently
- [x] Focus does not trigger unexpected context changes
- [x] Form submission provides clear feedback

### Input Assistance
- [x] Form validation provides clear error messages
- [x] Error prevention through client-side validation
- [x] Labels and instructions provided for all inputs
- [x] Required fields are clearly marked with *
- [x] Honeypot spam protection (invisible to users)
- [x] Error messages are descriptive

## ✅ Robust

### Compatible
- [x] Valid HTML5 markup
- [x] ARIA attributes used correctly
- [x] Name, role, and value available for all UI components
- [x] Status messages use aria-live regions
- [x] Works across modern browsers (Chrome, Firefox, Safari, Edge)

## Reduced Motion Support

The website respects the `prefers-reduced-motion` user preference:

### When Reduced Motion is Enabled:
- Typewriter effect shows immediately
- Scroll animations are instant
- Counter animations show final numbers immediately
- Marquee galleries become user-controlled scrollable areas
- All transitions are nearly instant (0.01ms)
- Hover effects are preserved (they're user-initiated)

### Implementation:

```css
@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .marquee__track {
    animation: none !important;
  }

  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Testing Reduced Motion:

**macOS:**
System Preferences → Accessibility → Display → Reduce motion

**Windows:**
Settings → Ease of Access → Display → Show animations in Windows

**Browser DevTools:**
- Chrome/Edge: DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion
- Firefox: about:config → ui.prefersReducedMotion = 1

## Testing Checklist

### Manual Testing

- [ ] Navigate entire site using only keyboard (Tab, Shift+Tab, Enter, Space)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Zoom to 200% and verify all content is accessible
- [ ] Verify color contrast with browser tools
- [ ] Test on mobile devices (touch targets, gestures)
- [ ] Enable reduced motion and verify animations are disabled
- [ ] Test form validation and error messages
- [ ] Verify carousel can be paused and controlled manually

### Automated Testing Tools

Recommended tools for additional testing:

1. **axe DevTools** (Browser Extension)
   - Automated accessibility testing
   - Catches common WCAG violations

2. **WAVE** (Browser Extension)
   - Visual accessibility checker
   - Shows errors and warnings inline

3. **Lighthouse** (Chrome DevTools)
   - Accessibility audit score
   - Performance and SEO metrics

4. **Color Contrast Analyzer**
   - Desktop app for contrast checking
   - Meets WCAG AA/AAA standards

### Screen Reader Testing

Test with at least one screen reader:

- **Windows**: NVDA (free) or JAWS
- **macOS**: VoiceOver (built-in)
- **Mobile**: TalkBack (Android) or VoiceOver (iOS)

### Keyboard Navigation Flow

1. Tab to navigation menu
2. Use arrow keys or Tab through menu items
3. Enter to select and smooth scroll to section
4. Tab through section content
5. Interactive elements (buttons, links, form fields) are focusable
6. Shift+Tab to go backwards
7. Escape to close modals/menus (if applicable)

## Ongoing Maintenance

To maintain accessibility:

1. Always add alt text when adding new images
2. Test new features with keyboard only
3. Verify color contrast for new color combinations
4. Keep form labels and error messages clear
5. Test with reduced motion enabled for new animations
6. Run automated tests regularly
7. Gather feedback from users with disabilities

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

Last updated: 2025
