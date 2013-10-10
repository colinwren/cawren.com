{
  title: "Four Essential Command Line Tools",
  date: "2013-10-2"
}


# [HTTPie](http://httpie.org/)
HTTPie is a command line HTTP client with an intuitive interface and syntax highlighting of responses.

Here is an example of the output produced by making a `GET` request to a JSON API:
<img src="https://i.cloudup.com/mZRizmcZTT.png" width="100%">
The command syntax is very straightforward, it's just `http` followed by the HTTP request method. Running:

```bash
http get www.google.com
```

will fetch Google homepage and log it with syntax highlighting.

*Note: In this case `http www.google.com` would suffice since `GET` is the default method.*

How about sending a POST request with some form data?
```bash
http -f post www.reddit.com/login username=colinwren password=**
```

__Install HTTPie [here](https://github.com/jkbr/httpie#installation).__
# [Silver searcher](https://github.com/ggreer/the_silver_searcher)

Silver searcher is an insanely quick code searching tool with a similar UI to 
[ack](http://beyondgrep.com/). The output of the search displays the
results in a clear and quickly readable format.

Here is an example of the output produced by searching for `eventBus` in the
[typeahead.js](http://twitter.github.io/typeahead.js/) codebase:
<img src="https://i.cloudup.com/AsespBYJAQ.png" width="100%">
_The silver searcher command is `ag` because `ag` is the element symbol for
silver._

### Speed
Silver searcher prides itself on speed, it is written in C and claims to be "3–5× faster than ack".
Searches are executed instantaneously even on large codebases.

A search for `model` in the root  of the [Rails](https://github.com/rails/rails) code base with both `ack` and `ag` (silver surfer command) on my MacBook Air yielded these results:
```bash
$ time ag model  | $ time ack model
real    0m0.217s | real    0m2.078s
user    0m0.111s | user    0m1.559s
sys     0m0.119s | sys     0m0.305s
```

__Install Silver searcher [here](https://github.com/ggreer/the_silver_searcher#installation).__

# [Hub](https://github.com/github/hub)
Hub is a command line wrapper for git that adds [GitHub](https://github.com/)
 specific functionality such as fetching pull request branches, and creating pull requests.

After installing hub and aliasing `git` to `hub` by putting
`alias git=hub` in your `.bashrc`, you can omit most parts of the URLs you are specifying when using `git` commands like clone, for example:

```bash
git clone CabinJS/Cabin
# Works the same as:
git clone https://github.com/CabinJS/Cabin.git
```

### Some particularly useful commands:
- `git fork` - Make a fork of a remote repository on GitHub and add as remote
- `git create` - Create this repository on GitHub and add GitHub as origin
- `git browse` - Open a GitHub page in the default browser

__Install Hub [here](https://github.com/github/hub#installation).__
# Tree
Tree is a tool for visualizing directory structures. It's great for creating text based diagrams of folder structures that are easily shareable.

### Command output

Here is an example of the output produced by running `tree` in the
[typeahead.js](http://twitter.github.io/typeahead.js/) codebase:
<img src="https://i.cloudup.com/07lIDF0jBy.png" width="100%">

Since the output is just text, we can copy and paste it anywhere. This is great
for GitHub issues and documentation.
```
test
├── dataset_spec.js
├── dropdown_view_spec.js
├── event_target_spec.js
├── helpers
│   ├── jasmine-jquery.js
│   ├── mock-ajax.js
│   └── mock_components.js
├── input_view_spec.js
├── persistent_storage_spec.js
├── playground.html
├── request_cache_spec.js
├── transport_spec.js
├── typeahead_view_spec.js
└── vendor
    ├── hogan-2.0.0.js
        └── jquery-1.9.1.js
```

## Install Tree
 If it is not already installed, you can install it with the package manager for your OS.
```bash
# OSX
brew install tree
# Ubuntu
sudo apt-get install tree
```
