---
title: Everything I know about reviewing code
slug: everything-i-know-about-reviewing-code
draft: false
date: 2021-10-23T00:00:00+01:00
category: programming
tags:
- programming

---
I'll try to teach you everything I know about reviewing code for merge requests (MR) and pull requests (PR), both as a submitter and a reviewer.

# ... it depends

This has little to do with code reviews, yet it's one of the best advice you'll ever find around: it depends. Don't take this article, or any other articles out there, for gospel.

# When you are looking for a review

## Do your homework

Do no submit code for reviewing before you reviewed it yourself. It's **annoying**. It shouldn't be the reviewer job to tell you to remove print statements, write tests, etc.

I usually review the code before every commit, but when I'm almost ready to submit my code for a review I give it a once-over to make sure it's ready.

Make sure the tests pass, you didn't leave TODOs, you are even accomplishing what you set out to, etc.

If you aren't sure about your code then don't ask for a code review, ask for an opinion, help, or pair programming. Never submit code you are not sure it's correct for a code review.

The [Swiss cheese model](https://en.wikipedia.org/wiki/Swiss_cheese_model) refers to a security model, but applies to so much more, including code quality and code review. The less confident you are about your code, the bigger the holes in your slice of cheese.

## Make sure the reviewer is happy before progressing

Whatever the process in your company/project/team, make sure the reviewer is happy to proceed before you move forward. Don't go resolving all the issues they raised and click merge.

# When you are reviewing

## It takes time

To review code it takes approximately 1/10 of the time it took to write it. Take your time, it's not a race, and it's important.

# Tailor your review to your audience

When you know your colleagues you'll start to be able to conduct yourself differently, depending on their strengths and weakness. I know a developer who is thorough, writes tests, etc. I reviewed thousands and thousands of lines of their code, and all I ever found was maybe a forgotten print statement. So now whenever I review their code I sit back, scroll a bit faster, and maybe even focus on learning from them. When I review other people's code I need to check every coma, insist good code style is maintained, etc.

## You are dealing with people

"This is wrong".....`CTRL+A DEL` "Have you considered...."

There will be times that you'll be technically correct. The best kind of correct.

![You are technically correct. The best kind of correct.](https://comb.io/LxbJyb.gif "Technically correct")

But how should you express yourself?

Let's be honest, people skills are not rampant in this industry. Computers don't care how you express your thoughts to them, but people do, and software development is a team sport. Whenever you find something that's not quite right, please, try to express your thoughts politely.

Sometimes niceties run short, and you may have to tell people that what they are doing is not good, but being right is not a good reason for being nasty.

## It's not time for debates

Tabs or spaces? Code reviews are not the right venue to establish it! In part because it's obviously spaces, but also because your opinion doesn't matter at code review time.

There should be relatively specific code styles for your company/project/team. Hopefully they are up for debate.

You prefer double quotes to single ones? One for the committee, not for a merge/pull request.

See this [insightful talk](https://www.youtube.com/watch?v=wf-BqAjZb8M) from Raymond Hettinger on PEP8, which dictates the style guide for Python.

## Start from understanding what needs to be done

One thing is to scan some code to find bugs, but you also need to make sure that the code is achieving the right thing. Start from the ticket, or wherever else the code came from, to make sure it's doing what it should.

## Perfect is the enemy of good

My friend James is a ninja 🥷 hacker 👨‍💻, yet he's not going to pester you to make your code perfect. Why? Because when work needs to be done, good is good enough.

Be like James.

# Other general advice

## Double tap

Not sure? Ask for more people to review! If either party feels unsure, then it's fair to say you'd benefit from having someone else reviewing the same code.

I already mentioned the [Swiss cheese model](https://en.wikipedia.org/wiki/Swiss_cheese_model). Here you are adding more slices to catch more problems.