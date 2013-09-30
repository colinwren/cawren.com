{
  title: "Four Awesome Command Line Tools",
  date: "2013-5-2"
}


# [HTTPie](http://httpie.org/)
HTTPie is a command line HTTP client that has an intuitive UI and syntax highlighting of responses.
 The command syntax is simple, it's just `http` followed by the HTTP request method. Running `http get www.google.com` will fetch and log the Google homepage with syntax highlighting *(In this case `http www.google.com` would suffice since `GET` is the default method)*.
### Example usage:
<img src="https://i.cloudup.com/mZRizmcZTT.png">

# [Silver searcher](https://github.com/ggreer/the_silver_searcher)

Silver searcher is an insanely quick code searching tool with a similar UI to 
[ack](http://beyondgrep.com/). The format of the output is very clear and it
searches are executed instantaneously even on large codebases.

### Search results:
<img src="https://i.cloudup.com/AsespBYJAQ.png">

### Speed
A search for `model` in the root  of the [Rails](https://github.com/rails/rails) code base with both `ack` and `ag` (silver surfer command) on my MacBook Air yielded these results:
```bash
$ time ag model  | $ time ack model
real    0m0.217s | real    0m2.078s
user    0m0.111s | user    0m1.559s
sys     0m0.119s | sys     0m0.305s
```

# [Hub](https://github.com/github/hub)
Hub is a command line wrapper for git that adds [GitHub](https://github.com/)
 specific functionality such as fetching pull request branches, and creating pull requests. After installing hub and aliasing `git` to `hub` by putting
`alias git=hub` in your `.bashrc`, you can omit most parts of the URLs you are specifying when using `git` commands like clone, for example:
```bash
git clone https://github.com/CabinJS/Cabin.git
```
Works the same as:
```bash
git clone CabinJS/Cabin

```

### Some particularly useful commands:
- `git fork` - Make a fork of a remote repository on GitHub and add as remote
- `git create` - Create this repository on GitHub and add GitHub as origin
- `git browse` - Open a GitHub page in the default browser

# Tree
Tree is a tool for visualizing directory structures. It's great for creating visualizations of project structures to use in documentation or GitHub issues.

### Command output

<img src="https://i.cloudup.com/07lIDF0jBy.png">
 If it is not already installed you can install it with the package manager for your OS.
```bash
# OSX
brew install tree
# Ubuntu
sudo apt-get install tree
```
