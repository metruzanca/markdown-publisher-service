# Markdown Publisher Service

Publish Markdown to various blogging platforms.
<!-- In the future, change "various" to "any" -->

This is the backend service used primarily by [Obsidian Publisher](https://github.com/metruzanca/obsidian-publisher).

<!-- If I can't get the "publisher" plugin name, go with "markdown-publisher" to match the service -->

While designed for use with Obsidian, this service has been made decoupled from obsidian and instead has its own API, allowing it to be used by other applications in the future.

(That being said, this is just the plan. This service is still under development and so is the obsidian plugin)

## Development Plans

Publisher adds the ability to "publish" any note, this will send the markdown to the Publisher backend for preprocessing and subsequently post the note to configured platforms, such as:
* [Dev.To](https://dev.to/)
* [medium](https://medium.com/)
* [hashnode.com](https://hashnode.com/)
* [telegra.ph](https://telegra.ph)
* git
  * Which enables github pages, or other static site generators e.g. https://blot.im/, https://gohugo.io/ or custom built gatsbyjs or sveltekit apps.
* [Ghost](https://ghost.org/)
* More to come...

<!-- TODO Update these descriptions to be clearer and to be a "feature list" instead of generic paragraphs -->
The plugin will also handle keeping track of unpublished edits and making sure that you can republish/update the post. As well as see contextual info about the post (e.g. urls on the platforms posted to) and contextual actions.

The plugin will also handle linking other published notes, so in the case that theres a wikilink or relative link, the plugin will check if those notes are also published and if so, send metadata along with the post to the backend so that the linked posts are properly linked on the desired platforms. If they link to non-published links, the user will be warned. (Maybe make it configurable to e.g.: ignore or convert bad links to plain text (strip the link and keep the text) and for good UX, warn if this isn't configured with a `[ ] don't show again` option)


<!-- Reference for how to use svelte for obsidian plugins:
- https://github.com/liamcain/obsidian-calendar-plugin
* https://github.com/lynchjames/obsidian-day-planner -->

<!-- Features list:
- All configuration via plugin settings
* Cross-posting
* Sync, updating published posts
* Seamless experience.
* Mobile?
* No technical skill required, anyone can use it.
* Linking related posts toghether -->