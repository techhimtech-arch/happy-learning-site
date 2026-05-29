# 🔧 Troubleshooting Guide

## Issue: Page still shows old loader

**Cause**: Browser cache or old code  
**Solution**:
```bash
# Clear cache and rebuild
npm run build
rm -rf dist/
npm run build
# Hard refresh in browser: Ctrl+Shift+R (Windows)
```

---

## Issue: Data not appearing after optimization

**Cause**: Component not connected to `useSiteContent()`  
**Solution**:
```tsx
// ✅ Make sure you have this
import { useSiteContent } from "@/components/SiteContentProvider";

export const YourSection = () => {
  const { content, isLoading } = useSiteContent(); // ← Required
  
  return (
    <section>
      {content.yourData && <div>{content.yourData}</div>}
    </section>
  );
};
```

---

## Issue: Images not loading

**Cause**: Sanity image URL might be null  
**Solution**:
```tsx
// Add fallback
const imageUrl = content.branding.logoUrl || "/default-logo.png";

// Or use optional chaining
<img src={content.gallery?.images?.[0]?.src} alt="Gallery" />
```

---

## Issue: Build is slow or large

**Check bundle size**:
```bash
npm run build
# Check dist/ folder size
```

**Optimize further**:
1. Remove unused components from Radix imports
2. Lazy load heavy components:
   ```tsx
   const VideoPlayer = lazy(() => import("@sanity/video-player"));
   ```

---

## Issue: Sanity connection timeout

**Check**:
```tsx
// src/lib/sanity.ts
console.log(isSanityConfigured); // Should be true

// If false, check environment variables:
// SANITY_STUDIO_PROJECT_ID
// SANITY_STUDIO_DATASET
```

---

## Issue: Section shows skeleton forever

**Cause**: Data might be empty or query failing  
**Solution**:
```tsx
// Add logging
const { content } = useSiteContent();

useEffect(() => {
  console.log("Programs data:", content.programsList);
  console.log("Is data empty?", !content.programsList?.length);
}, [content.programsList]);

// Check Sanity dashboard if data exists
```

---

## Issue: Build fails with errors

**Solution**:
```bash
# Clear cache
rm -rf node_modules
npm install

# Rebuild
npm run build
```

---

## Issue: Dev server not working

```bash
# Kill old process
npm run dev

# If port 8080 taken:
# Change in vite.config.ts port: 8080 → 8081
```

---

## Rollback if needed

If something breaks, revert changes:

```bash
# Git rollback
git log --oneline
git checkout [previous-commit]

# Or manually restore from backups
# The old code is commented out in the files
```

---

## Quick Verification Checklist

- [ ] `npm run build` succeeds ✅
- [ ] `npm run preview` works ✅
- [ ] Navbar shows instantly ✅
- [ ] Hero visible in < 1 second ✅
- [ ] DevTools shows chunk splitting ✅
- [ ] No console errors ✅
- [ ] Sanity data updates appear ✅

---

## Performance Check

**In DevTools (Chrome):**

1. **Network tab**:
   - See separate chunks downloading
   - Vendor.js cached (200 status)
   
2. **Lighthouse**:
   - FCP < 1.5s ✅
   - LCP < 2.5s ✅
   - CLS < 0.1 ✅
   
3. **Performance tab**:
   - Record > Show profile
   - Look for parallel data loading

---

## Common Mistakes to Avoid

❌ **Don't**: Remove `useSiteContent()` context  
✅ **Do**: Keep provider wrapping app

❌ **Don't**: Fetch Sanity data in components  
✅ **Do**: Use context hook instead

❌ **Don't**: Block render on `isLoading` state  
✅ **Do**: Show placeholder/skeleton instead

❌ **Don't**: Import all components at top  
✅ **Do**: Lazy load below-fold sections

❌ **Don't**: Ignore Sanity query errors  
✅ **Do**: Test with Sanity API down

---

## Need More Help?

See these files:
- [OPTIMIZATION_SUMMARY.md](OPTIMIZATION_SUMMARY.md) - Overview
- [OPTIMIZATION_EXAMPLES.tsx](OPTIMIZATION_EXAMPLES.tsx) - Code patterns
- [TECHNICAL_EXPLANATION.md](TECHNICAL_EXPLANATION.md) - Deep dive
- [PERFORMANCE_OPTIMIZATION.md](PERFORMANCE_OPTIMIZATION.md) - Full guide

---

Happy optimizing! 🚀
