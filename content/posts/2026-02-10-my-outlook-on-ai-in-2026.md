---
title: My outlook on AI in 2026
date: 2026-02-10
tags:
  - programming
aliases:
  - "/2026-02-10-my-outlook-on-ai-in-2026"
ShowToc: true
---

<div class="post-summary">

**TL;DR**

- AI won't replace engineers until AGI, and AGI changes everything anyway.
- AI makes the easy parts easier and the hard parts harder — lean into the first, avoid the second.
- Think of it as the next step from assembly to C to Python: now we program in English.
- The real bottleneck was always human willpower, not the computer — AI eases that bottleneck.
- Configure your `agents.md`, plan ahead, and experiment with what you thought was impossible.

</div>

# AI won't replace engineers

I'll start with the elephant in the room. AI is improving at a sustained, impressive pace. During 2025, models went from being a novelty — a "this has potential" curiosity — to being a genuinely powerful tool that I use daily. The improvement in both models and tooling has been remarkable.

That said, I don't think AI will replace software engineers. Not with the current technology, and I doubt it ever will on this trajectory. The day we achieve artificial general intelligence, everything changes — not just software engineering, but *everything*. Until then, what we have is a very capable tool, not a replacement.

I've been doing this job for 15 years. In a real-world scenario — legacy codebases, complex business logic, production systems with years of accumulated context — there is no way the current AI could replace me. And I say this not out of ego, but out of experience watching it try.

# The easy part easier, the hard part harder

There's an excellent article by Blundergoat called [AI Makes the Easy Part Easier and the Hard Part Harder](https://www.blundergoat.com/articles/ai-makes-the-easy-part-easier-and-the-hard-part-harder) that I agree with completely.

Writing code was never the hard part. The hard part is understanding the problem, navigating ambiguity, knowing *why* a particular approach is the right one, and having the judgment to make architectural decisions. AI makes the easy part — boilerplate, first drafts, repetitive tasks — much easier. But it hasn't touched the hard part.

This is exactly why you should lean into AI for the easy parts and stop fighting it on the hard parts. Use it where it shines, go old school where it doesn't.

There are still plenty of times where even the most capable model, across multiple providers, leads me absolutely nowhere and I have to do things the old-fashioned way.

# From assembly to English

Here's how I think about what's happening.

Consider the history of programming: machine code was written for computers, by humans who had to think like computers. Then came C — still close to the metal, but more readable, more expressive. Then came Python, which is built on C, which itself is built on machine code. Each layer made things easier to read, easier to express, easier to reason about.

Now we've added another layer: English.

We've gone from a language designed for computers, to a compromise between computer and human language, to the actual native language of the programmer. AI is giving us a similar leap over high-level languages as high-level languages gave us over assembly.

I started programming in C. I never used assembly. Not because assembly isn't powerful — it is — but because C gave me enough leverage that I didn't need to. I suspect that in time, many developers will feel the same way about high-level languages relative to AI-assisted development.

The humans are still at the centre. They're just equipped with more powerful tools.

# The real bottleneck is human willpower

I've told my colleagues this for years: the limiting factor in programming is not the computer. It's the human. We only have so much willpower to chase down a bug. So much memory to hold a system in our heads. So much patience to set up a test environment, write boilerplate, or untangle someone else's abstractions.

This is why I've always advocated for keeping code simple, not over-optimising, and making things easier for your future self. If you make things easier for future-you, then future-you has more willpower to spend on the actual investigation, the actual problem-solving.

The interface between humans and the power of computers has always been the bottleneck. When higher-level languages were introduced, humans suddenly achieved much more — not because they got smarter, but because the interface got better. The exact same thing is happening now with AI.

# I'm still doing the thinking

I've read people on Hacker News saying they miss "doing the thinking" now that AI is involved. I disagree. I'm still doing the same amount of thinking. Maybe even more, because I can now tackle problems I would have previously shelved as too laborious.

Perhaps those people mean they miss tinkering with lower-level details, which is perfectly valid — I understand the appeal. But I don't feel like AI is doing my thinking for me. It's more like working together: I think, I direct, I review, I decide. The AI helps me execute faster. The thinking is still mine.

# What AI has unlocked for me

Here's where it gets personal. AI has made me roughly 10 times more productive. Side projects that I always wanted to do but never had the time or energy for are now feasible. Investigations that used to be laborious are quicker. Things that were annoying to put together now have shortcuts.

I built several VS Code extensions that I'd wanted for years — small tools to navigate code more effectively. I'm particularly proud of one that lets you navigate to any line of Python code just by having the stack trace in your clipboard. It's not perfect, but it's something I always wanted and never would have built without AI.

I've built machine learning models to predict delinquency for invoices at Yelp. I trained a model to recognise my black cat compared to other black cats. Small things, silly things, practical things — all of them now within reach.

And I'm writing a book. This is something I've always wanted to do, but it always seemed like too much — too many words, too much structure, too much effort on top of a full-time job. AI has unlocked this for me. I'm still working on it, and I genuinely enjoy it, but if it hadn't been for AI, I don't think I would have ever managed.

# Practical advice

## AI is great for greenfield, less so for production

Accept this and work with it. For new projects, AI is extraordinary. For complex, established codebases with years of accumulated decisions, it struggles. That's fine — use it where it's strong.

## Plan ahead and explain well

If you express something in as few words as possible and hit enter, you'll get something back that isn't quite right. Then you'll review it, redo it, and start losing patience.

Instead: explain things well, once. Do some planning together with the AI before you start. Then execute your plan. The upfront investment pays for itself immediately.

## agents.md is the most important thing you should configure

Whatever the current iteration is called — `agents.md`, `CLAUDE.md`, system instructions — this is probably the single most powerful leverage point you have, and I don't see it being said enough.

You need one for each repository. It needs to explain how you want to work, what the project is about, what the AI is expected to do, and what to do in edge cases that aren't obvious. Every single time you open a new chat, it's as if you're talking to a brand new engineer on their first day. There is absolutely no reason not to invest time in writing, optimising, and cherishing these files.

## Use AI to use AI

I use AI as a meta tool to help me use AI better. I ask it what prompt would work best, whether syntax and grammar matter for a given task, whether the order of instructions makes a difference. If there's a disagreement and I think the AI should have known better, I ask it why it thinks the disagreement originated and how we can prevent it. More often than not, I end up having AI update my `agents.md` file to avoid the same issue next time. I review everything, of course, but I largely use AI to improve my use of AI.

## Experiment more

Think about all the things you couldn't do before. Just try asking AI to do something — anything — just to see if it's capable of it. If it's not, see how far you can push it. You might be surprised.

# Case in point: this post

This post you're reading right now is AI-generated. But the difference between a low-quality AI post and a high-quality one is the same as the difference between low-quality and high-quality code. I carefully selected what to say. I let AI help me write it. Then I checked everything and made sure it was what I would have written even without the tool.

The result remains the same. It is the speed to production that has changed.

Of course, it can go the other way too. This same relatively cheap tool can be used to scam people, produce fake content, or forge images. It's like the old analogy I make about guns: they can prevent crimes or they can help commit them. It is a tool, and how you use it — and how we as a society let others use it — is up to us.
