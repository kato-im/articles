***

## Searching Across All Your Rooms And Teams

When we started working on Kato, we wanted to build instant access all chat history — an implementation of a simple idea that **it should be faster to look up something that was already discussed than to re-ask the question**.

We started off with a per-room search, which, so far, saw one big iteration when we wrote a custom tokenizer for Postgres&#8212;we talked about that adventure in [this blog post](https://kato.im/articles/search-in-kato-works-even-better-now).

However, as Kato organizations grow, we see an increasing pain of not knowing in **which room a conversation has happened**. The situation is particularly dire for us, since we have all those Support rooms. Quite often, after releasing a feature, we go back and personally let those who've asked for the feature know that it's now live (and kindly ask them to test it).

Problem: we can no longer remember who asked for what.

***

### Well, now we can!

Clicking in the "SEARCH KATO" box&#8212; 

![clip.png](https://s3.amazonaws.com/kato-share/f6e89d68ef615d67df98980a235630ca7beef89e108f453be967249d11f79c4/clip.png)

&#8212;brings up the global search UI:

![clip.png](https://s3.amazonaws.com/kato-share/e4d9ec9b18fda966e2ac604e9e23bf8ddf76172891cd6b7657fb80761bc24d04/clip.png)

This search works according to following rules:

 - Empty search query will show the first line from the last message in all 1-1s and rooms, most recent on top. (We call it the _most-recent view_)
 - _Most-recent view_ will autoupdate as new message come in
 - Search will work across all open organizations (if you're a member of several)
 - Clicking on search result will open a room in search mode
 - Search results will not auto-update, you have to re-search
