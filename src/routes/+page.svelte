<main>
  <h1>Obsidian Publisher</h1>
  
  <p>
    Under construction.
  </p>
  
  
  <p>
    See <a href="https://github.com/metruzanca/markdown-publisher-service/">markdown-publisher-service</a> and 
    <a href="https://github.com/metruzanca/obsidian-publisher">obsidian-publisher</a>
  </p>

  <p>
    This site will be prettier later. 
  </p>

  <hr>

  <p>
    Dummy api for development purposes <code>POST /api/</code> will reply with the same json you send it.
  </p>

  <details>
    <summary>
      Why?
    </summary>
    <p>
      No clue what kind of data that obsidian has inside its Editor object.
      I need to figure out what kind of data I want this API to handle.
      If obsidian uses some kind of standard JSON version of a markdown file, I'd like to use that.
      At the very least, I want to have the frontmatter already parsed so that I can use that to as configuration/overrides per note.
      Afterwhich if markdown is already parsed and I have a way to get the SAME structure via a package on npm(I'd like this api be decoupled from obsidian), then I'll accept the JSON markdown from obsidian.
      Else I'll need to do my own parsing of the markdown so that I may apply transforms for things like wikilinks and/or markdown links. 
    </p>

    <p>
      Worst comes to worst, I'll make a specific route for obsidian but I'll try to make sure everything else is decoupled.
    </p>
  </details>

</main>


<style>
  main {
    margin: 0 auto;
    width: 700px;
  }
  code {
    background-color: black;
    padding: 0 .5em;
    color: white;
  }
</style>