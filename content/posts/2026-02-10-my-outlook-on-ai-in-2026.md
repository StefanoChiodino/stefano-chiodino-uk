---
title: My outlook on AI in 2026
date: 2026-02-10
tags:
  - programming
aliases:
  - "/2026-02-10-my-outlook-on-ai-in-2026"
ShowToc: true
tldr:
  - "AI won't replace engineers until AGI, and AGI changes everything anyway."
  - "AI makes the easy parts easier and the hard parts harder — lean into the first, avoid the second."
  - "Think of it as the next step from assembly to C to Python: now we program in English."
  - "The real bottleneck was always human willpower, not the computer — AI eases that bottleneck."
  - "Configure your `agents.md`, plan ahead, and experiment with what you thought was impossible."
---

# LLMs won't replace engineers

AI is improving at a sustained, impressive pace. During 2025, models went from being a novelty with potential to being a genuinely useful tool that I use daily. The improvement in both models and tooling has been remarkable.

That said, I'm still not convinced that LLMs will replace software engineers. It will just make engineers more productive and reduce the pressure on the workforce of this industry. The day we achieve artificial general intelligence everything will change, then it won't just be the software engineers job that we should be worried about. Until then, what we have is a very capable tool, a leverage that landed quicker than probably any other before it.

I've been doing this job for 15 years. It is obviously impossible to tell where the LLM's capabilities will land, however my gut feeling is that there is only so much that we can squeeze out it. Based on my current conversation with Opus 4.6, which I consider to be the best of the best at the moment, it is incredibly capable but it is no senior software engineer. It is like dealing with a smart junior engineer that works at 100 times the speed.

# The easy part easier, the hard part harder

There's an excellent article by Blundergoat called [AI Makes the Easy Part Easier and the Hard Part Harder](https://www.blundergoat.com/articles/ai-makes-the-easy-part-easier-and-the-hard-part-harder) that I agree with completely.

Writing code was never the hard part. It's writing code well. It is understanding the problem, navigating ambiguity, knowing *why* a particular approach is the right one, and having the judgment to make architectural decisions.

This is exactly why you should lean into AI for the easy parts and stop fighting it on the hard parts. Use it where it shines, go old school where it doesn't.

There are still plenty of times where even the most capable model, across multiple providers, leads me absolutely nowhere and I have to do things the old-fashioned way. In the previous year, I invested a significant amount of my time into experimenting with the capabilities of AIs and I've started to understand what it is good at and what it is not good at. And so, being able to speed up my work when I'm quite confident that LLM will do well and not waste my time where I am not confident that it will, is what I think is the trick that a lot of people are missing out on.

# From assembly to English

Here's how I see the current landscape.

Consider the history of programming: machine code was written for computers, by humans who had to think like computers. Then came C, relatively close to the metal, but more readable, more expressive. Then Python built on top of it, abstracting further. Each layer made things easier to read, easier to express, easier to reason about. The human brain is capable of infinite wisdom and capacity of understanding, however, in our day-to-day, this amount is actually very finite. For example, Python allows us for our thoughts to go much further because they are abstracted much more than C and assembly were capable of.

Now we've added another layer: English.

We've gone from a language designed for computers, to a compromise between computer and human language (at varying degrees), to the actual native language of the programmer. AI is giving us a similar leap over high-level languages as high-level languages gave us over assembly.

However, here I should also address another concern of mine, and that is that our natural language is actually not as perfect as we usually like to think. When you express a concept to somebody, you may have to go into a certain level of detail that varies depending on shared context and how much you think your interlocutor is going to understand from what you're saying. And so, in real time, you adapt and express more or less, depending on the situation. You will certainly be familiar with how sometimes the thoughts that you have expressed in your native language may have not landed in the way that you thought they should have.

# The real bottleneck is human willpower

I've been saying this for years: the limiting factor in programming is not the computer or the language. It's the human brain, but in particular, not even necessarily our intelligence. We only have so much willpower to chase down a bug. So much memory to hold a system in our heads. So much patience to set up a test environment, write boilerplate, or untangle someone else's abstractions.

This is why I've always advocated for keeping code simple, not over-optimising, and making things easier for your future self. If you make things easier for future-you, then future-you will have more willpower to spend on the actual investigation, planning, etc.

The interface between humans and the power of computers has always been the bottleneck. When higher-level languages were introduced, humans suddenly achieved much more — not because they got smarter, but because the interface got better, the friction lower. The exact same thing is happening now with AI.

# I'm still doing the thinking

I've read people on Hacker News saying they miss "doing the thinking" now that AI is involved. I disagree. I'm still doing the same amount of thinking. Maybe even more, because I can now tackle problems I would have previously shelved as too laborious.

Perhaps those people mean they miss tinkering with lower-level details, which is perfectly valid. I understand the appeal. But I don't feel like AI is doing the thinking for me. It's more like working together: I think, I direct, I review, I decide. The AI helps me execute faster. The thinking is still mine.

The complaint that they miss doing the thinking is the same as saying "I miss setting the registries of the CPU manually now that I have a higher level language that doesn't require me to do it". By all means, you can go and set the registries of the CPU manually, but is that really practical? Aren't there other interesting problems that you can tackle with how much brain power you have freed up?

# What AI has unlocked for me

Now that I feel that I have a good understanding as to where I can leverage AI and the very latest models are generally good, I'd say that **in the best cases** I can achieve the mythical 10x programming. Maybe even more. Side projects that I always wanted to do but never had the time or energy for are now feasible. Investigations that used to be laborious are quicker. Things that were annoying to put together now have shortcuts.

I built a few VS Code extensions that I'd wanted for years — small tools to navigate code more effectively. I'm particularly proud of one that lets you navigate to any line of Python code just by having the stack trace in your clipboard. It's not perfect, but it's something I always wanted and never would have built without AI. Not because I wasn't capable, but because the friction to work in typescript and understand how to write a VScode extension was too high.

I've built machine learning models to predict delinquency for invoices at Yelp. I trained a model to recognise my black cat compared to other black cats. Small things, silly things, practical things — all of them now within reach.

And I'm writing a book. This is something I've always wanted to do, but it always seemed too much — too many words, too much structure, too much effort on top of a full-time job.

# Practical advice

## AI is great for greenfield, less so for production

Accept this and work with it. For new projects, AI is extraordinary. For complex, established codebases with years of accumulated decisions, it struggles. That's fine, leverage the strengths and avoid the weaknesses.

## Plan ahead and explain well

You reap what you sow. If you express something in as few words as possible and hit enter don't complain if the response isn't what you were hoping for. Then you'll review it, redo it, and start losing patience. You may even think that LLMs are a fad, and you would be better off without it.

Instead: explain things well, once. Link the files you refer to. Do some planning together with the AI before you start. Then execute your plan. The upfront investment pays for itself.

## agents.md is the most important thing you should configure

The file `agents.md` is probably the single most powerful leverage point you have, and I don't see this being said enough, or strongly enough.

Every single time you open a new chat, it's as if you're talking to a brand new engineer on their first day. There is absolutely no reason not to invest time in writing, optimising, and tuning these files.

## Use AI to use AI

I use AI to help me use AI better. I ask it what prompt would work best, whether syntax and grammar matter when writing prompts, whether the order of instructions makes a difference. If there's a disagreement and I think the AI should have known better, I ask it why it thinks the disagreement originated and how we can prevent it. More often than not, I end up having the AI update my `agents.md` file to avoid the same issue next time. I review everything, of course.

## Experiment more

Think about all the things you couldn't do before. Just try asking AI to do something, go on, just for the lols. See how far you can push it. You might be surprised.

When making the placeholder website for my book I thought "Now that I have made the cover image I wonder if I can make the book in 3D". The result, after several iterations, [is quite stunning](https://orchidomania.com/).

## LLMs are cheerful but I'm grumpy

LLMs are tuned by companies that want to make money. I imagine that those companies have figured out that making LLMs sound cheerful and overconfident makes users happier. As long as the user is sold then the bottom line is subscriptions. A suppose that a fair, balanced and trustworthy LLM wouldn't sell as much. They are accommodating to a fault. They will compliment your awesome ideas. "Great catch!". "You are absolutely right".

LLMs can't be trusted. I've addressed this in my own `agents.md` by asking them to label their own confidence about their statements, to not sound like cheerleaders, and to flag uncertainty explicitly. You should do the same.

# Case in point: this post

This post you're reading right now is AI-generated. But the difference between a low-quality AI post and a high-quality one is the same as the difference between low-quality and high-quality code. I carefully selected what to say. I let AI help me write it. Then I checked everything, added a little, rewrote some parts, adapted some more. Two passes. I have probably saved some time, and in the meantime I migrated the website from [prose.sh](prose.sh) to Hugo on Cloudflare. Why not.
