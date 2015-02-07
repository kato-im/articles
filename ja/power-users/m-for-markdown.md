Markdown is a lightweight markup language invented by John Gruber eight years ago. We've seen something similar in Wikipedia and a few other places, but Markdown took hold. For example, these days most READMEs appear to be written with Markdown (that's what ".md" in README.md stands for).

The concept is very simple: add markup to content in such a way that it doesn't hinder readability. Anyone who has tried visually extracting content from HTML or XML documents would welcome the idea.

The ability to support Markdown in Kato chat wasn't necessarily one of the most frequently requested features, but it was one of the most aggressively requested, if you will. It also seemed like a really good idea, especially since we already had support for Markdown in the [HTTP POST API](https://github.com/kato-im/documents/blob/master/POST%20API.md).

Some lightweight formatting in chat is pretty old news — Google Talk supports bold, italic, and newlines:

![GTalk](https://s3.amazonaws.com/kato-share/ac57fe84ea42270951b6f5f4659ce367c22fffdedb0aaf270a14575a3d3a537/clip.png)

Markdown is much more powerful. We use this [reference](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md) when our customers inquire about the syntax — it's a good, easy-to-read Markdown primer. (The original [documentation](http://daringfireball.net/projects/markdown/), not so much.)

Using Markdown mode in Kato makes it possible to post messages that look like this:

![](https://s3.amazonaws.com/kato-share/faf87cd364ebc679916c4dd6791d4d29b57f515f93ce15b7f0ee89311f88b36/clip.png)

Markdown mode is enabled by clicking the M button above the input area:

![](https://s3.amazonaws.com/kato-share/d752fff0363dc6d6ba5635f1f8097be8b8d39ce440438384be3b8170347e120/clip.png)

The result:

![](https://s3.amazonaws.com/kato-share/a633dcf3ac070b57b07c935240825b3c9a57beb63422945171eef4e8d8f62b8/clip.png)

Once a message is posted as Markdown, it's possible to see what it looks like in plain text with a feature we call message controls: hover over a message and in the upper right corner you'll see the buttons for Markdown [M], code [</>], and collapse [-]. These are toggles, so resetting Markdown will display the message as plain text:

![](https://s3.amazonaws.com/kato-share/8591fca088fa273b533755b4fc96052a5ea8ae92468e691a69745e24e8f733f3/clip.png)
![](https://s3.amazonaws.com/kato-share/9099774be4fb2b52aae7e7ed6eb050d9ec0dd7bb1191bd689202a959c50f9473/clip.png)

This view state is not persistent, reloading the history in a room will revert the view of the message back to the author's version. (This is something we may change in the future.)

Note: it's possible for the server to post HTML messages (currently only for the rare cases of HTML-only emails), but it's not possible via the API or UI. Therefore HTML messages don't have any controls other than collapse.

It's perfectly reasonable to only use Markdown. Since setting the type of each message gets old pretty quick, there is a remedy in account settings:

![](https://s3.amazonaws.com/kato-share/f32505a3d20f16926e582510914fa46573051a89f870b307ce3799267e0c0d5f/clip.png)

We plan on evolving the Markdown feature until the sky is fully reached. Meanwhile, we'd love for you to try it and let us know how it goes.

Oh, and one more thing. We really need a [Font Awesome](http://fortawesome.github.io/Font-Awesome/) Markdown icon. Please vote for it to be made [here](https://github.com/FortAwesome/Font-Awesome/issues/1557).
