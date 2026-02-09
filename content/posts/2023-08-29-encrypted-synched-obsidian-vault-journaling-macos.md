---
title: Encrypted synched Obsidian vault journaling on MacOS
date: 2023-08-29
tags:
  - writing
aliases:
  - "/2023-08-29-encrypted-synched-obsidian-vault-journaling-macos"
ShowToc: true
---
# The boring prose bit

Journaling has been a useful tool for personal reflection. One thing that I really like is that it's private, which means that I can be open and honest. I don't need to worry to be judged or hurt people's feeling. It's just like thinking, but with rubber-ducking included. It's interesting to go back and read old entries, and I find it it's easier to focus on my thoughts.

So far, I really liked Day One to keep my journal. This is a fantastic free option if you want to journal from one computer. To sync your journal between computers (and more) it requires a premium subscription of $34.99 per year (currently £27.74). This is a very good price for what you get.

However, I was a bit bored, and I wanted to play with [Obsidian](https://obsidian.md/) because [Hacker News](https://news.ycombinator.com/) absolutely loves Obsidian. I regretted getting advices from Hacker news only 70% of times.

There are various solutions to encrypt notes, add secrets, etc in Obsidian. However, I couldn't find a plugin that ticked all the boxes, so I iterated on an [Obsidian forum answer](https://forum.obsidian.md/t/can-i-encrypt-a-vault/33645).
# How to encrypt your Obsidian vault

On MacOS, open The Disk Utility app.

- If you don't already have a vault, in the menu, select `File -> New Image -> Blank Image...`
- If you already have a vault, in the menu, select `File -> New Image -> Image From Folder...`, and use your vault's folder

Then, select the strongest encryption option, and a `read/write` image format. Since you are at it, put it in your iCloud / dropbox / gDrive / etc folder.

![](/images/Pastedimage20230830083133.png)

You now have an encrypted file. To mount it you'll be asked for the password, but if you'd like you can save it in your keyring so that you won't have to type it every time. This, however, goes against most of the reasons you'd be wanting this setup 😉. When mounted, you vault folder will be located in `/Volumes/Obsidian Vault` or something similar, and easy to reach in finder:

![](/images/Pastedimage20230830115637.png)

# How to sync

Obsidian vaults are folders. They are portable, in the sense that they contain all the settings and plugins related to the vault. This is a great advantage because it makes synching even easier.

Just put your encrypted vault file in a folder synched with any cloud service.

The file will be written when the vault is ejected from the system. This is an important consideration to keep in mind, which I couldn't work around.
# Refinements

So far we have tickets all the boxes that I wanted, but automating is fun, so here is how to turn a 3-clicks workflow into a 1-click one.

The biggest issues with the setup so far is that the vault needs to be ejected from the system for the file to be synched, and preventing anybody from accessing their raw content without the password.

# Mounting, journaling, ejecting, synching

Automating mounting the vault before Obsidian is launched is even easier: create a script to mount the vault, then launch Obsidian, then eject the folder.

```shell
open --wait-apps /Users/stefanochiodino/Documents/Obsidian\ Vault.dmg &&
  open --wait-apps /Applications/Obsidian.app &&
  hdiutil detach /Volumes/Obsidian\ Vault
```

`--wait-apps` tells `open` to wait for that app, which makes it easier to chain commands together.

When you run this, you'll see a terminal window open during this workflow.

Annoyingly, closing the Obsidian window but keeping the app running means that the vault is not ejected. A non ejected vault is a not synched vault either!

# A safer ejection

To help with the issue of Obsidian not shutting down just by closing the window, you could force ejecting the vault when that window is open.

[Shell commands](https://obsidian.md/plugins?id=obsidian-shellcommands) is an awesome Obsidian plugin that allows to run shell commands, automatically. You can configure it to automatically eject the folder when Obsidian is closed:

Create a new command `hdiutil detach -force /Volumes/Obsidian\ Vault`.

![](/images/Pastedimage20230830120852.png)

Configure the command to execute automatically when Obsidian is closed:

![](/images/Pastedimage20230830120940.png)


# Pro and cons
Pro:
1. Simple setup
2. Very low friction to write encrypted synched notes
3. Leverages Apple's encryption, because the less encryption you do the safer it is
4. Few and easy to understand commands, so that you know what you are doing and that I'm not screwing you over
5. Free

Cons
1. How can I be sure that Apple/Dropbox/Google/etc won't just delete my account an my files? You could setup a symlink to make sure that the files are in another folder as well.
2. No mobile setup
3. In this incarnation, MacOS only
4. The vault syncs only when it's ejected from the system
5. The lack of CLI commands for Obsidian makes this harder than it could have been ☹️
# Alternatives
[Obsidian Sync](https://obsidian.md/sync) offers end-to-end encryption, and supports the Obsidian project. However, it doesn't encrypt the vault at rest. You could still mix and match the approaches: encrypt the vault at rest using the method above, and sync using Obsidian's service.

[jrnl.sh](https://jrnl.sh/) is a command line journaling tool. It offers very good encryption at rest, and can be synched using any cloud service. Comes with the usual pro and cons of a mostly CLI app.

[Day One](https://dayoneapp.com/) is a great app for journaling. The premium plan is quite accessible and allows to sync. It even works on a browser (beta), which means that it's platform agnostic. This doesn't solve encrypting at rest tho!
# Gotchas
1. I'm not an Obsidian expert, so don't just listen to me.
2. By default, Obsidian will move deleted files to the system trash, where they will be stored unencrypted.