# Task 6: Rewrite Process Section

**Status:** DONE

**Files modified:**
- `src/components/Process.jsx`

**Summary of changes:**

1. **Header updated:**
   - Eyebrow: "How I work" → "How we'll work together"
   - Heading: "Simple, transparent, and always in the loop." → "No surprises. Just results."
   - Subtitle updated to match new tone

2. **Steps reduced from 6 to 4:**
   - Removed unused icon imports (MessageSquare, Lightbulb, Code2, TestTube, Rocket, HeadphonesIcon)
   - Removed icon rendering from step cards
   - Updated step field names: `headline` → `title`, `time` → `duration`
   - Step number now uses `step.number` instead of `index + 1`
   - Grid layout changed from `lg:grid-cols-3` to `lg:grid-cols-2` for balanced 2×2 layout

3. **New steps content:**
   - Discovery (Free) - client-friendly conversation focus
   - Planning (2-3 days) - transparent pricing/timeline
   - Building (2-6 weeks) - weekly demos
   - Launch & Support (30 days free) - post-launch support

4. **Guarantee strip added:**
   - Three checkmarks: Fixed pricing, Weekly demos, 30-day support included
   - Positioned between process grid and bottom note

**Concerns:**
- ESLint not configured in project (first-time setup prompt) - skipped lint check
- No type checking script available in package.json
- All existing CSS classes, animations, and component structure preserved as required
