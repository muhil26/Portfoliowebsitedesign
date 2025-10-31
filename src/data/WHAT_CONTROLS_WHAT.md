# What Controls What - Portfolio Data Mapping

This guide shows you exactly where each piece of data in `/data/portfolio.ts` appears on your website.

---

## 📋 `personalInfo` Object

### `name: "Muhilan"`
**Appears in:**
- 🏠 **Hero Section** - Large glitching name animation
- 🦶 **Footer** - Brand name in footer
- 🦶 **Footer** - Copyright notice

---

### `tagline: "SYSTEM_ENGINEER"`
**Appears in:**
- 👤 **About Section** - Section header above bio text
- 🦶 **Footer** - Subtitle under your name

---

### `email: "muhilan.sr2024@vitstudent.ac.in"`
**Appears in:**
- 📧 **Contact Section** - Email contact card (clickable mailto link)

**Also used in:**
- Backend sends form submissions to this email

---

### `phone: "+91 9487493466"`
**Appears in:**
- 📞 **Contact Section** - Phone contact card (clickable tel link)

---

### `location: "Chennai, Tamil Nadu, India"`
**Appears in:**
- 📍 **Contact Section** - Address contact card

---

### `bio.intro` and `bio.extended`
**Appears in:**
- 👤 **About Section** - Two paragraphs of bio text below your photo

---

### `stats` Array
**Appears in:**
- 👤 **About Section** - Three statistics boxes showing:
  - Number of languages
  - Number of projects
  - Number of PC builds

**Update these** when your numbers change!

---

### `responseMessage`
**Appears in:**
- 📧 **Contact Section** - Info box explaining your response time

---

## 🌐 `socialLinks` Object

### `github`, `linkedin`, `twitter`
**Appears in:**
- 🦶 **Footer** - Three social media icon buttons

**Note:** Replace `#` with actual URLs to make them clickable!

---

## 🎯 `aboutFeatures` Array

**Appears in:**
- 👤 **About Section** - Three feature cards with icons:
  - SOFTWARE_ARCHITECT (Code2 icon)
  - CHIP_DESIGNER (Cpu icon)
  - HARDWARE_ENTHUSIAST (Zap icon)

Each card shows:
- Icon (animated on hover)
- Title
- Description

---

## 💪 `skills` Array

**Appears in:**
- 🎯 **Skills Section** - All skill category cards

Each category creates a card showing:
- Category name (e.g., "PROGRAMMING_CORE")
- Experience duration (e.g., "4+ Years")
- Individual skills with animated progress bars
- Skill levels shown as percentages

**Progress bars animate** when you scroll to the section!

---

## 🚀 `projects` Array

**Appears in:**
- 💼 **Projects Section** - Grid of project cards

Each project creates a card showing:

| Field | Where It Appears |
|-------|------------------|
| `title` | Card title |
| `description` | Card description text |
| `image` | Card background image |
| `tags` | Colored tag badges at bottom |
| `github` | "CODE" button link |
| `demo` | "DEMO" button link |
| `status` | Status badge (top right) with colored indicator |
| `year` | Year badge (top left) |
| `complexity` | Lines of code count below description |

### Status Badge Colors:
- `'PRODUCTION'` → 🟢 Green dot
- `'IN_DEVELOPMENT'` → 🟡 Yellow dot
- `'BETA_TESTING'` → 🔵 Blue dot

---

## 🎨 Visual Elements NOT in Data File

These are hardcoded in components:

- Arc reactor animation (Hero)
- Grid patterns and scanlines (all sections)
- Animated corner brackets
- Glitch effects
- Neon glow effects
- Particle animations
- Section titles (e.g., "SKILL_MATRIX", "PROJECT_DATABASE")
- Navigation menu items

**To change these**, you'd need to edit the component files in `/components/`

---

## 📊 Quick Update Guide

### When you complete a new project:

1. ✅ Add project to `projects` array
2. ✅ Update `stats[1].value` (project count)
3. ✅ Add new tech to `skills` if needed
4. ✅ Update relevant skill levels

### When you learn a new skill:

1. ✅ Add to appropriate category in `skills`
2. ✅ Or create new category if needed
3. ✅ Update `stats[0].value` if it's a new language

### When you change contact info:

1. ✅ Update `personalInfo.email`
2. ✅ Update `personalInfo.phone`
3. ✅ Update `personalInfo.location`

---

## 🔍 Finding Things on the Website

| What You See | Where to Edit It |
|--------------|------------------|
| Name with glitch effect | `personalInfo.name` |
| Bio paragraphs | `personalInfo.bio` |
| Skills with progress bars | `skills` array |
| Project cards | `projects` array |
| Email/phone/address | `personalInfo` contact fields |
| Social media links | `socialLinks` object |
| Statistics boxes | `personalInfo.stats` |
| About feature cards | `aboutFeatures` array |

---

## 💡 Pro Tip

**Use browser search (Ctrl+F / Cmd+F)** on your website to find exactly what you want to change, then search for that text in `/data/portfolio.ts`!

---

**File to Edit**: `/data/portfolio.ts`  
**No Need to Touch**: Any files in `/components/`

---

*Last updated: October 2025*
