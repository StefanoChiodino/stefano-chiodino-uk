# AGENTS.md

> Stefano Chiodino's personal blog — Hugo + PaperMod, deployed to Cloudflare Pages.

## Project Overview

This is a personal website and blog built with [Hugo](https://gohugo.io/) using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. Content is plain Markdown with YAML frontmatter. Deployed to [Cloudflare Pages](https://pages.cloudflare.com/) which builds Hugo directly from the repo on push to master.

### Structure

- `hugo.toml` — Site configuration (theme, menu, params, SEO)
- `content/posts/` — Blog posts (Markdown with YAML frontmatter)
- `content/search.md` — Search page (PaperMod layout)
- `content/archives.md` — Archive page (PaperMod layout)
- `static/images/` — Blog images (referenced as `/images/filename.png`)
- `static/favicon.png` — Site favicon
- `themes/PaperMod/` — Theme (git submodule, do not edit)
- `archetypes/default.md` — Template for new posts
- `Makefile` — Local dev commands

### Hugo Frontmatter

Posts use these fields:

```yaml
---
title: Post title
date: 2024-01-15
draft: false
description: Short description for SEO and social cards
tags:
  - programming
  - today-i-learned
aliases:
  - "/old-url-slug"
ShowToc: true  # optional, for long posts
---
```

- `date` must be `YYYY-MM-DD`
- `tags` is the only taxonomy (no categories)
- `aliases` provides redirects from old URLs
- `ShowToc` overrides the global TOC setting per-post
- `image` can be set for OpenGraph/social card images

## Writing Style

This is critical. The blog has a distinctive voice. Follow these rules strictly.

### Tone

- **Direct and conversational.** First person. Talk to the reader like a colleague over coffee.
- **Dry humour is welcome.** Sarcasm, wit, self-deprecation — but never forced. If it doesn't come naturally to the sentence, don't add it.
- **Opinionated.** State opinions as opinions, not as universal truths, but don't hedge everything into meaninglessness.
- **No corporate speak.** Never say "leverage", "synergy", "ecosystem", "deep dive", "take a step back", or similar. Write like a human.
- **No cringe.** No inspirational quotes. No "let's go!" energy. No motivational speaker tone. No "buckle up". No "in this article, we will...". No "without further ado". No filler phrases.
- **British English.** Colour, organisation, favour, centre.

### Structure

- **Short paragraphs.** 1-3 sentences each. White space is your friend.
- **Punchy headers.** Use headers to break content into scannable sections, not to be clever.
- **Get to the point.** No preamble. No "before we begin" intros. Start with the meat.
- **TIL posts are short.** A paragraph or two, a source link. That's it.
- **Longer posts use personal anecdotes** to ground advice in real experience. "I've done X, here's what I learned" — not "one should consider X".

### What NOT to do

- **Do not invent anecdotes or experiences.** If the content references personal experience, it must be provided by Stefano. Never fabricate stories.
- **Do not add content beyond what is asked for.** If asked to write a TIL post, write a TIL post, not an essay.
- **Do not add emoji** unless the content genuinely calls for it (extremely rare).
- **Do not add meta-commentary** like "Hope this helps!" or "Happy coding!".
- **Do not pad content** to make it longer. Shorter is better. Always.
- **Do not use AI-isms.** Phrases like "it's worth noting that", "it's important to understand", "let's explore", "in conclusion" — these betray AI authorship. Avoid them.

### Examples of the Right Voice

Good (from existing posts):
- "Workers know how, gods know why."
- "In part because it's obviously spaces"
- "If you cringe at the idea of asking for more money, you likely really need to ask for more money."
- "Source: Googling for the reason why maple syrup bottles have a tiny handle."
- "Oh no, imagine if the BBC published an article about my website with a single 11kb page!"

Bad (never write like this):
- "In today's fast-paced tech landscape, code reviews have become an indispensable tool..."
- "Let's dive into the fascinating world of..."
- "As software engineers, we all know that..."

## Commands

- `make serve` — Local dev server with drafts enabled
- `make build` — Production build (outputs to `public/`)
- `make new-post` — Create a new post from the archetype

## Boundaries

### Always OK

- Reading any file in the repo
- Editing markdown content in `content/posts/`
- Fixing typos, broken links, broken image paths
- Updating frontmatter fields
- Running `hugo` commands locally

### Ask First

- Creating new blog posts (Stefano provides the content/topic)
- Changing site configuration in `hugo.toml`
- Adding new images to `static/images/`
- Modifying theme overrides in `layouts/`

### Never

- Invent blog content or personal anecdotes
- Push to master without explicit permission (triggers auto-deploy)
- Modify or delete existing posts without being asked
- Edit anything inside `themes/PaperMod/` (use layout overrides instead)
- Add tracking, analytics scripts, or third-party services
