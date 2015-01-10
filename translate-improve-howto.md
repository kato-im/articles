# Kato.IM Articles

## How to Contribute Improvements and Translations

* Create a [GitHub](http://github.com) account or sign into an existing one.
* To suggest an improvement to an existing article:
  1. click the link with this icon&#8212;![clip.png](https://in.kato.im/f4f058bc9fd03aa8821bc0f6f5caa5fc4bd04135ae58ec5f8c7b87bf8837a2ad/clip.png)&#8212;at the bottom of the page you'd like to improve.
  2. Make your edits and click on the **Propose file change** button at the bottom of the page, then click on **Create pull request**.
* To contribute a translation:
  1. Use the same file names and directory structure as your see in [`articles/en`](https://github.com/kato-im/articles/tree/master/en) for your translation.
  2. Whenever you are ready to publish your translation, add all the articles under your language to [`util/manifest.json`](https://github.com/kato-im/articles/blob/master/util/manifest.json) (create a new language entry if necessary).
  3. Submit a pull request.
* When linking to other articles within your language section, make sure to prepend all links with `/articles/<language>/`.
* We'll review your pull request, merge with the mainline, and roll it out to [kato.im/articles](http://kato.im/articles).
