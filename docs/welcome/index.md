# Welcome

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

```markdown title="index.md"
mkdocs.yml    # The configuration file.
docs/
index.md  # The documentation homepage.
...       # Other markdown pages, images and other files.
```

```ts title="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@hisam/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  eslint: {
    /** Note: still not sure about ignoring eslint during builds */
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
```
