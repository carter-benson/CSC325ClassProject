# Markdown QA

## Introduction
To ensure only high-quality markdown files are pushed to this repository, you can use these two tools:
- **Vale:** Checks for grammar, style, and spelling issues.
- **markdownlint-cli:** Checks for markdown formatting issues.

Both of these tools are to be used in a command line interface.


## Best Practices
It is important that you use both Vale and markdownlint together to maintain the quality of your markdown
files. Furthermore, you should address all issues presented by both Vale and markdownlint.


## Using Vale
Vale checks all markdown files against the Google Developer Documentation Style Guide and the write-good
configurations, in accordance with the configurizations we set for Vale.

To check all markdown files, use:
```bash
vale .
```

To check all markdown files in aspecific directory, use:
```bash
vale path/to/directory
```

To check one sepecific file, use:
```bash
vale path/to/file.md
```

Official documentation can be found at https://vale.sh/docs/cli


## Using Markdownlint
Markdownlint-cli checks for common markdown formatting issues like line length and heading styles. We
configured markdownlint to ignore the max line-length rule.

To check all markdown files, run:
```bash
markdownlint .
```

To check all markdown files in aspecific directory, use:
```bash
markdownlint path/to/directory
```

To check one sepecific file, use:
```bash
markdownlint path/to/file.md
```
Official documentation can be found at https://github.com/igorshubovych/markdownlint-cli/tree/master
