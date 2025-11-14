# Design System Documentation

## Colors

### Primary Colors
- **Primary Blue**: `#8ea9f4` - Main brand color, used for primary CTAs
  - Dark variant: `#6b8ae0`
  - Light variant: `#b0c4f8`
- **Dark Blue**: `#112250` - Used for logos, secondary buttons, and headings
  - Light variant: `#1a3a7a`
- **Pink Accent**: `#f7c7db` - Accent color for highlights
  - Light variant: `#fce4ed`
  - Dark variant: `#f0a8c4`

### Text Colors
- Primary: `#112250`
- Secondary: `#4a5568`
- Light: `#718096`
- White: `#ffffff`

### Background Colors
- White: `#ffffff`
- Light: `#f7fafc`
- Gray: `#f1f5f9`

## Typography

All font sizes are responsive using `clamp()` for fluid scaling:
- **xs**: `clamp(0.75rem, 0.6vw + 0.6rem, 0.875rem)`
- **sm**: `clamp(0.875rem, 0.7vw + 0.7rem, 1rem)`
- **base**: `clamp(1rem, 0.8vw + 0.8rem, 1.125rem)`
- **lg**: `clamp(1.125rem, 0.9vw + 0.9rem, 1.25rem)`
- **xl**: `clamp(1.25rem, 1vw + 1rem, 1.5rem)`
- **2xl**: `clamp(1.5rem, 1.2vw + 1.2rem, 2rem)`
- **3xl**: `clamp(1.875rem, 1.5vw + 1.5rem, 2.5rem)`
- **4xl**: `clamp(2.25rem, 1.8vw + 1.8rem, 3rem)`
- **5xl**: `clamp(3rem, 2.4vw + 2.4rem, 4rem)`

### Font Weights
- Normal: `400`
- Medium: `500`
- Semibold: `600`
- Bold: `700`

## Spacing

All spacing values are responsive:
- **xs**: `clamp(0.25rem, 0.2vw + 0.2rem, 0.375rem)`
- **sm**: `clamp(0.5rem, 0.4vw + 0.4rem, 0.75rem)`
- **md**: `clamp(1rem, 0.8vw + 0.8rem, 1.5rem)`
- **lg**: `clamp(1.5rem, 1.2vw + 1.2rem, 2.25rem)`
- **xl**: `clamp(2rem, 1.6vw + 1.6rem, 3rem)`
- **2xl**: `clamp(3rem, 2.4vw + 2.4rem, 4.5rem)`
- **3xl**: `clamp(4rem, 3.2vw + 3.2rem, 6rem)`

## Border Radius

- **sm**: `0.5rem`
- **md**: `1rem`
- **lg**: `1.5rem`
- **xl**: `2rem`
- **pill**: `9999px` (fully rounded, pill-shaped)

## Button Styles

### Primary Button
```tsx
<button className="btn btn-primary">Objednat &gt;</button>
```
- Background: Primary blue (`#8ea9f4`)
- Text: White
- Shape: Pill-shaped
- Hover: Darker blue with shadow

### Secondary Button
```tsx
<button className="btn btn-secondary">Naše služby &gt;</button>
```
- Background: Dark blue (`#112250`)
- Text: White
- Shape: Pill-shaped
- Hover: Lighter dark blue with shadow

### Accent Button
```tsx
<button className="btn btn-accent">Objednat online &gt;</button>
```
- Background: Pink accent (`#f7c7db`)
- Text: Dark blue
- Shape: Pill-shaped

### Button Sizes
- Small: `btn btn-primary btn-sm`
- Default: `btn btn-primary`
- Large: `btn btn-primary btn-lg`

## Liquid Glass Effect

### Standard Liquid Glass
```tsx
<div className="liquid-glass">
  Content here
</div>
```

### Dark Liquid Glass
```tsx
<div className="liquid-glass-dark">
  Content here
</div>
```

### Liquid Glass Popup (with accent dot)
```tsx
import LiquidGlassPopup from '@/components/LiquidGlassPopup';

<LiquidGlassPopup>
  Nově také nabízíme kosmetologii!!
</LiquidGlassPopup>
```

The liquid glass effect uses:
- Semi-transparent background: `rgba(255, 255, 255, 0.6)`
- Backdrop blur: `20px`
- Border: `rgba(255, 255, 255, 0.3)`
- Pill-shaped border radius
- Subtle shadow for depth

## Usage Examples

### Using Tailwind Classes
```tsx
// Colors
<div className="bg-primary text-text-white">...</div>
<div className="bg-dark text-white">...</div>
<div className="bg-accent text-text-primary">...</div>

// Spacing (responsive)
<div className="p-spacing-lg m-spacing-md">...</div>

// Typography
<h1 className="text-5xl font-bold">...</h1>
<p className="text-base text-text-secondary">...</p>

// Border Radius
<div className="rounded-pill">...</div>
```

### Using CSS Variables
```css
.my-element {
  background-color: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-pill);
  font-size: var(--font-size-xl);
}
```

## Responsive Design

All defaults are responsive by design:
- Font sizes scale fluidly using `clamp()`
- Spacing values scale with viewport width
- Buttons adapt their size on mobile
- Container utilities provide responsive max-widths

## Components

Components are located in:
- `/components` - Reusable UI components
- `/sections` - Page sections
- `/assets` - Images, icons, etc.
- `/styles` - Additional stylesheets if needed

