---
name: NEXUS PRO
description: Connect marketing, customer service, and conversion in one continuous flow.
colors:
  accent-red: "#e51c33"
  accent-red-deep: "#c61027"
  whatsapp-green: "#20c56a"
  ink: "#09090b"
  ink-soft: "#101013"
  divider: "#29292e"
  paper: "#f7f7f8"
  white: "#ffffff"
typography:
  display:
    fontFamily: '"Manrope", "Segoe UI", sans-serif'
    fontSize: "clamp(2.8rem, 4.7vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 0.99
    letterSpacing: "-0.065em"
  headline:
    fontFamily: '"Manrope", "Segoe UI", sans-serif'
    fontSize: "clamp(1.75rem, 3vw, 2.45rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.055em"
  body:
    fontFamily: '"Manrope", "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Manrope", "Segoe UI", sans-serif'
    fontSize: "0.72rem"
    fontWeight: 800
    letterSpacing: "0.13em"
rounded:
  sm: "8px"
  md: "16px"
  pill: "999px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.35rem"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.35rem"
    height: "48px"
  field:
    backgroundColor: "#0c0c0e"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.8rem"
    height: "46px"
  button-form-submit:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.35rem"
    height: "48px"
  contact-form:
    backgroundColor: "rgba(17, 17, 20, 0.93)"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "clamp(1rem, 2.5vw, 1.5rem)"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    width: "54px"
    height: "54px"
  button-form-submit:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.35rem"
    height: "48px"
  contact-form:
    backgroundColor: "rgba(17, 17, 20, 0.93)"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "clamp(1rem, 2.5vw, 1.5rem)"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    width: "54px"
    height: "54px"
---

# Design System: NEXUS PRO

## Overview

**Creative North Star: "The Connected Signal"**

NEXUS PRO's single-page world makes the connection between acquisition, service, and conversion feel like one clear path. Charcoal surfaces carry the content; vivid red marks the brand, key actions, and directional geometry. Office photography gives the promise a real-world setting, while thin dividers keep each section precise.

One Manrope family supplies every role: compact, tightly tracked heavy headlines lead; readable body copy and small uppercase labels support them. The responsive page preserves that contrast and its clear path to a WhatsApp-composed inquiry.

**Key Characteristics:**
- Charcoal-first surfaces with a concentrated red signal.
- One geometric sans family, differentiated by size and weight.
- Section structure drawn with fine dividers, not ornamental cards.

## Colors

The palette is near-black and off-white, with red as the principal accent and green limited to the floating WhatsApp contact action.

### Primary
- **Signal Red** (`{colors.accent-red}`): Brand mark, headline emphasis, icons, geometry, and the primary CTA.
- **Deep Signal Red** (`{colors.accent-red-deep}`): Primary CTA hover state.

### Neutral
- **Night Ink** (`{colors.ink}`): Main page surface and darkest text-on-light surface.
- **Soft Ink** (`{colors.ink-soft}`): Dark menu/control surface.
- **Divider Charcoal** (`{colors.divider}`): Recurring thin borders and section separators.
- **Soft Paper** (`{colors.paper}`): Default page text and skip-link surface.
- **White** (`{colors.white}`): Button text, navigation emphasis, and bright icon details.

### Tertiary
- **WhatsApp Green** (`{colors.whatsapp-green}`): The floating WhatsApp contact control only; this is a utility signal, not a second general accent.

### Named Rules
**The Red Signal Rule.** Red carries the main brand and conversion emphasis; keep charcoal and light neutrals dominant. Green belongs to the floating WhatsApp contact control, not a second general-purpose accent.

## Typography

**Display Font:** Manrope (with Segoe UI, sans-serif fallback)<br>
**Body Font:** Manrope (with Segoe UI, sans-serif fallback)<br>
**Label/Mono Font:** No separate label or monospace family; labels use Manrope.

**Character:** A single family creates a direct, contemporary voice. Large, tightly tracked 800-weight headings contrast with calm, generously led supporting copy and compact labels.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 4.7vw, 3.8rem)`, 0.99 line-height, -0.065em tracking): Hero promise; mobile overrides to `clamp(2.55rem, 11vw, 3.3rem)`.
- **Headline** (800, `clamp(1.75rem, 3vw, 2.45rem)`, 1.1 line-height, -0.055em tracking): Section headings; contact heading has its own larger clamp.
- **Title** (800, 0.9rem, 1.1 line-height): Benefit and process-step titles.
- **Body** (400, 1rem, 1.55 line-height): Default copy; supporting text scales down where the layout requires it.
- **Label** (800, 0.72rem, 0.13em tracking, uppercase): Section eyebrows; small labels stay short and high-contrast.

### Named Rules
**The One Typeface Rule.** Keep brand, navigation, headings, labels, and controls in the same Manrope-led stack; create hierarchy with size, weight, and tracking.

## Layout

The page uses a centered content width capped at 1160px with fluid side gutters (`clamp(1.25rem, 5vw, 4.5rem)`); at widths up to 700px, gutters become 1.25rem. The first view pairs left-aligned promise and actions with a full-bleed image on the right, darkened by a gradient and crossed by a narrow red line. Later sections alternate compact benefit columns, a two-column image-and-copy section, a three-step process, and a contact split.

At 900px, multi-column content begins stacking; at 700px, the navigation becomes a toggle-controlled menu and sections adapt to narrower columns. At 420px, actions and process steps become vertical and the contact form becomes one column. The header remains sticky, section links scroll to anchors, and the footer collapses to a left-aligned stack.

### Named Rules
**The Connected Sections Rule.** Use the page's section sequence to carry the visitor from promise, through the three-step flow, to contact; keep navigation anchored to those sections.

## Elevation & Depth

The system is mostly flat: dark tonal variation, image gradients, and thin borders distinguish regions. Shadows are reserved for the contact form and floating WhatsApp action, rather than applied as a general card style.

### Shadow Vocabulary
- **Contact form** (`0 24px 60px rgba(0, 0, 0, 0.28)`): Separates the inquiry surface from the dark contact backdrop.
- **Floating WhatsApp** (`0 8px 26px rgba(0, 0, 0, 0.38)`): Gives the fixed circular action separation from the page edge.

### Named Rules
**The Flat-By-Default Rule.** Convey section depth with tone and dividers; reserve shadows for the two implemented contact surfaces.

## Shapes

The form language combines pill-shaped CTAs, circular icon controls, softly rounded form fields, and a restrained rounded contact panel. Borders are thin and mostly neutral; the hero's red diagonal and process connectors provide the recurring geometry. Photography is cropped to fill its region and blended into adjacent dark surfaces with gradients.

## Components

### Buttons
- **Character:** Confident, compact actions with a clear primary/secondary contrast.
- **Shape:** Pill-shaped (`999px`); minimum height 48px, with contextual size overrides in the header and process section.
- **Primary:** Red fill, white text, 0.8rem by 1.35rem padding; hover shifts to deep red and lifts 2px.
- **Secondary:** Transparent fill with a light outline; hover changes the border to red and adds a subtle red tint.
- **Focus:** A visible 3px light-red outline with 4px offset.

### Inputs / Fields
- **Style:** Near-black fill, charcoal 1px stroke, 8px corners, 0.7rem by 0.8rem padding, and 46px minimum height.
- **Focus:** Border changes to light red; keyboard focus also receives the shared visible outline.
- **Behavior:** Native text/email input semantics and required validation are used where marked required.

### Cards / Containers
- **Contact form:** Dark translucent surface, 16px corners, responsive interior padding, thin border, and the contact-form shadow described above. Fields use a two-column grid until the narrow layout stacks them.
- **Benefit and process items:** Flat content groups with iconography and fine separators/connectors rather than elevated cards.

### Navigation
- **Desktop:** Sticky charcoal header with a thin translucent lower border, compact Manrope links, and a red underline for the current page.
- **Mobile:** Toggle-controlled full-width dark menu with stacked links and thin row dividers.
- **Footer:** Repeats anchored links and brand lockup, then stacks and left-aligns at mobile widths.

### Signature Contact Actions
- **WhatsApp float:** Fixed circular green control with white icon, thin light border, and restrained shadow; scales slightly on hover.
- **Contact flow:** The native form validates required name/email fields, then composes the values into a WhatsApp message. It does not submit to or store data on a site backend.

## Do's and Don'ts

### Do:
- **Do** keep charcoal as the dominant surface and use red as the main brand/action signal.
- **Do** preserve the single Manrope-led type family and build hierarchy through size, weight, and tracking.
- **Do** use thin dividers and tonal gradients to organize sections before adding elevation.
- **Do** keep the mobile navigation, responsive section stacking, visible focus, and reduced-motion behavior.

### Don't:
- **Don't** promote the WhatsApp green to a general-purpose accent; it identifies the floating contact action.
- **Don't** imply the contact form stores or sends data to a backend; it opens a prefilled WhatsApp conversation.
- **Don't** add a second display typeface or a broad shadow treatment absent from the implementation.
