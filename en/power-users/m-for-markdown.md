***

Markdown is a lightweight markup language invented by John Gruber eight years ago. We've seen something similar in Wikipedia and a few other places, but Markdown took hold. For example, these days most READMEs appear to be written with Markdown (that's what ".md" in README.md stands for).

The concept is very simple: add markup to content in such a way that it doesn't hinder readability. Anyone who has tried visually extracting content from HTML or XML documents would welcome the idea.

The ability to support Markdown in Kato chat wasn't necessarily one of the most frequently requested features, but it was one of the most aggressively requested, if you will. It also seemed like a really good idea, especially since we already had support for Markdown in the [HTTP POST API](https://github.com/kato-im/documents/blob/master/POST%20API.md).

Some lightweight formatting in chat is pretty old news — Google Talk supports bold, italic, and newlines:

![GTalk](https://s3.amazonaws.com/kato-share/ac57fe84ea42270951b6f5f4659ce367c22fffdedb0aaf270a14575a3d3a537/clip.png)

Markdown is much more powerful. We use this [reference](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md) when our customers inquire about the syntax — it's a good, easy-to-read Markdown primer. (The original [documentation](http://daringfireball.net/projects/markdown/), not so much.)

Using Markdown mode in Kato makes it possible to post messages that look like this:

![clip.png](https://in.kato.im/825b6411defe9b7414963b06a503ed2760e0564a2e28a21e0a56836e2526c11/clip.png)

Markdown mode is enabled by choosing **Markdown** in message options:

![clip.png](https://in.kato.im/6eb5c51231c72a4c2c458857f706f38b4f9d60ebfa5d79c5be6ff87936dd3e51/clip.png)

Once a message is posted as Markdown, you can see what it looks like in plain text: open the [message card](/articles/en/general/cheatsheet#message-cards) and de-select **M**:

![clip.png](https://in.kato.im/a7ad3223a5f64fc14af66271cf7c1d5616e29fce937c7c0a4c5dda3fe35c39cf/clip.png)

You will see the original:

![clip.png](https://in.kato.im/b3296b2d545773a047eba915848f6ad6f73c912776b1b54355005a5c561835fc/clip.png)

This view state is not persistent, reloading the history in a room will revert the view of the message back to the author's version. (This is something we may change in the future.)

Note: it's possible for the server to post HTML messages (currently only for the rare cases of HTML-only emails), but it's not possible via the API or UI. Therefore HTML messages don't have any controls other than collapse.

You can use Markdown by default. Paste this link&#8212;https://app.kato.im/#/account/options/markdown-default&#8212;in your Kato tab or open account options: 

![clip.png](https://in.kato.im/a0f17170fb59a08a1898b897bfad007ea2687bcf96d9382e848130b525f0e9ee/clip.png)

And set **Default to Markdown** to ON.

We really need a [Font Awesome](http://fortawesome.github.io/Font-Awesome/) Markdown icon. Please vote for it to be made [here](https://github.com/FortAwesome/Font-Awesome/issues/1557).
