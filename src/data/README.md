# Portfolio Data Configuration Guide

## 📝 Overview

This folder contains the centralized data configuration for your portfolio website. All content (projects, skills, contact info, etc.) is managed through a single file: **`portfolio.ts`**

## 🎯 Why This Exists

Instead of editing multiple component files scattered throughout your codebase, you can now update ALL your portfolio content in one place. This makes it super easy to:

- ✅ Add new projects when you complete them
- ✅ Update your skills as you learn new technologies
- ✅ Change contact information
- ✅ Modify your bio and personal information
- ✅ Keep everything organized and maintainable

## 🚀 Quick Start

### Adding a New Project

1. Open `/data/portfolio.ts`
2. Scroll to the `projects` array
3. Copy this template:

```typescript
{
  title: 'YOUR_PROJECT_NAME',
  description: 'A brief description of what your project does and the technologies used.',
  image: 'https://images.unsplash.com/photo-...',
  tags: ['Python', 'React', 'AWS'],
  github: 'https://github.com/yourusername/repo',
  demo: 'https://your-demo-url.com',
  status: 'PRODUCTION',
  year: '2025',
  complexity: '5K+ Lines',
},
```

4. Paste it at the beginning of the projects array
5. Update all the fields with your project info
6. Save the file - your website will automatically update!

### Adding a New Skill

1. Open `/data/portfolio.ts`
2. Find an existing skill in the `skills` array
3. Add your new skill:

```typescript
{ name: 'TypeScript', level: 85 },
```

Or add a whole new skill category:

```typescript
{
  category: 'CLOUD_TECHNOLOGIES',
  experience: '2+ Years',
  skills: [
    { name: 'AWS', level: 80 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 75 },
  ],
},
```

### Updating Personal Info

In the `personalInfo` object at the top of `portfolio.ts`, you can update:

- Your name
- Email and phone
- Location
- Bio paragraphs
- Statistics displayed on your site
- Response time message

## 📊 Data Structure Reference

### Project Status Options
- `'PRODUCTION'` - Completed and deployed (green indicator)
- `'IN_DEVELOPMENT'` - Currently working on (yellow indicator)
- `'BETA_TESTING'` - Feature complete, testing (blue indicator)

### Skill Level Guidelines
- **90-100**: Expert level, can teach others
- **80-89**: Advanced, comfortable with complex tasks
- **70-79**: Intermediate, can work independently
- **60-69**: Beginner-Intermediate, still learning
- **Below 60**: Basic familiarity

### Image Tips
- Use high-quality images (minimum 1080px wide)
- [Unsplash](https://unsplash.com) provides great free stock photos
- For project screenshots, host them online and use the direct URL
- Images are automatically optimized and styled by the components

### Tags Best Practices
- Keep tags concise (1-2 words max)
- Use consistent naming (e.g., "C++" not "C plus plus")
- Limit to 4-6 tags per project for best visual display
- Use the same tag names across projects for consistency

## 🔄 Update Workflow

When you learn something new or complete a project:

1. Open `/data/portfolio.ts`
2. Make your changes (add project, update skill level, etc.)
3. Save the file
4. Your portfolio automatically reflects the changes!

That's it - no need to touch any component files! 🎉

## 📁 File Structure

```
/data
├── portfolio.ts       ← YOUR MAIN DATA FILE (edit this!)
└── README.md         ← This guide
```

## 💡 Pro Tips

1. **Keep it updated**: Set a reminder to update your portfolio after completing projects
2. **Be honest with skill levels**: Accurate self-assessment helps set proper expectations
3. **Update GitHub links**: Replace all `#` placeholders with actual repository URLs
4. **Refresh project images**: Use screenshots or relevant images that represent each project
5. **Track your growth**: Watching your skill levels increase over time is motivating!

## ❓ Need Help?

If you want to add new sections or customize the layout beyond what's in this data file, you'll need to edit the component files in `/components`. But for 99% of content updates, this data file is all you need!

## 🎨 What Gets Updated Automatically

When you edit `portfolio.ts`, these sections update automatically:

- ✅ **Hero Section**: Your name
- ✅ **About Section**: Bio, stats, feature cards
- ✅ **Skills Section**: All skill categories and levels with animated progress bars
- ✅ **Projects Section**: All project cards with images, tags, and status badges
- ✅ **Contact Section**: Email, phone, location, and response message

---

**Happy portfolio building! 🚀**

*Last updated: October 2025*
