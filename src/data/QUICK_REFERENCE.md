# Quick Reference Cheat Sheet

## 🎯 Most Common Updates

### ✅ Add a New Project (Copy & Paste Ready)

```typescript
{
  title: 'PROJECT_NAME',
  description: 'Project description here.',
  image: 'https://images.unsplash.com/photo-xxx',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com',
  status: 'PRODUCTION', // or 'IN_DEVELOPMENT' or 'BETA_TESTING'
  year: '2025',
  complexity: '5K+ Lines',
},
```

**Where**: Add to the `projects` array in `/data/portfolio.ts`

---

### ✅ Add a New Skill

```typescript
{ name: 'Skill Name', level: 85 },
```

**Where**: Add to any `skills` array inside a category in `/data/portfolio.ts`

---

### ✅ Add a Skill Category

```typescript
{
  category: 'CATEGORY_NAME',
  experience: 'X+ Years',
  skills: [
    { name: 'Skill 1', level: 85 },
    { name: 'Skill 2', level: 90 },
  ],
},
```

**Where**: Add to the main `skills` array in `/data/portfolio.ts`

---

### ✅ Update Contact Info

Edit these fields in the `personalInfo` object:

```typescript
email: "your.email@domain.com",
phone: "+1 234 567 8900",
location: "City, State, Country",
```

---

### ✅ Update Bio Text

Edit these fields in `personalInfo.bio`:

```typescript
bio: {
  intro: "Your intro paragraph here.",
  extended: "Your extended bio here."
},
```

---

### ✅ Update Statistics

Edit the `stats` array in `personalInfo`:

```typescript
stats: [
  { label: 'LANGUAGES', value: '6+' },
  { label: 'PROJECTS', value: '25+' },
  { label: 'PC_BUILDS', value: '7+' },
],
```

---

## 📋 Status Badge Options

Use these EXACTLY as shown:

- `'PRODUCTION'` → Green badge (completed)
- `'IN_DEVELOPMENT'` → Yellow badge (in progress)
- `'BETA_TESTING'` → Blue badge (testing phase)

---

## 🎨 Finding Good Project Images

### Unsplash Search Tips:

1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant terms:
   - "circuit board" - for hardware projects
   - "code screen" - for software projects
   - "computer hardware" - for PC building
   - "microchip processor" - for VLSI projects
3. Right-click image → Copy Image Address
4. Paste the URL in your project's `image` field

---

## 💯 Skill Level Scale

Quick reference for setting skill levels:

```
95-100 ████████████ Master/Expert
85-94  ██████████   Advanced
75-84  ████████     Proficient
65-74  ██████       Intermediate
50-64  ████         Beginner+
<50    ██           Novice
```

---

## 🔗 Link Placeholders

Replace these placeholders:

- `github: '#'` → `github: 'https://github.com/username/repo'`
- `demo: '#'` → `demo: 'https://your-demo-url.com'`

If no link exists, keep the `'#'`

---

## ⚡ Quick Update Checklist

After completing a new project:

- [ ] Add project to `projects` array
- [ ] Add any new technologies to `skills`
- [ ] Update project count in `stats`
- [ ] Update skill levels if you improved
- [ ] Replace `#` with actual GitHub link
- [ ] Find & add a project image

---

## 📂 The Only File You Need

**`/data/portfolio.ts`** - That's it! Edit this file for all content updates.

---

**Pro Tip**: Bookmark this file for quick reference! 🔖
