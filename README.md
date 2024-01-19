# Ferrara Candy — Web

[![Linters badge][]][Linters page]
[![Tests badge][]][Tests page]
[![Deployment badge][]][Deployment page]

<!-- omit in toc -->

## Table of contents

<!-- toc -->

- [ESLint configuration](#eslint-configuration)
- [Environment variables](#environment-variables)
- [Releases and deployments](#releases-and-deployments)
  - [Hotfixes](#hotfixes)
  - [Examples](#examples)

<!-- tocstop -->

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Environment variables

Environment variables are set in the respective `.env.<environment>` file.

## Releases and deployments

The releases to the `dev` server are done automatically on merge to the
`main` Git branch. Releases to `stage` and `production` are done using Git
tags. Werf/Helm is used to deploy into these environments.

After pushing your changes through a merge request to the `main` Git branch
or using a Git tag, the CI process will then automatically build and release
the application to the corresponding servers.

To create a new release for `stage` or `production`, a Git tag needs to be
created pointing to the desired commit. You can use annotated tags or normal
tags. The tag name should follow the `vYYYYMMDD-XX` format, being X an integer.
Tags for _stage_ follow the same format as _production_ tags, but post-fixing
`-rc`. The time format needs to be on UTC-0.

To generate the tags, you should use the following command (recommended):

```shell
deploy/release.rb -e <environment>
```

Or using the manual method in which you will need to determine the appropriate
tag release value:

```shell
git tag "v$(date --utc +%Y%m%d)-01-rc"
```

### Hotfixes

<!-- markdownlint-disable no-inline-html -->
<details>
<summary>Toggle</summary>
<!-- markdownlint-enable no-inline-html -->

Pull from the remote:

```shell
git fetch --tags
```

Use the release (stage or production) tag as the new base:

```shell
git checkout v20YYMMDD-xx-rc
```

Create or checkout the hotfix branch:

```shell
git checkout -b hotfix/stage
```

Bring the commits you need:

```shell
git cherry-pick xxxxxxx
```

Push your changes:

```shell
git push origin hotfix/stage
```

Create and push the tag:

```shell
deploy/release.rb -e <environment> --push
```

Or doing it manually:

```shell
git tag "v$(date --utc +%Y%m%d)-01-rc"
git push origin "v$(date --utc +%Y%m%d)-01-rc"
```

<!-- markdownlint-disable-next-line no-inline-html -->
</details>

### Examples

- Stage
  - `v20210924-01-rc`
- Production
  - `v20210924-01`

<!--- Links: preserve this section at the bottom -->

[Linters badge]: https://github.com/ampagency/ferrara-candy-web/actions/workflows/lint.yml/badge.svg
[Linters page]: https://github.com/ampagency/ferrara-candy-web/actions/workflows/lint.yml
[Tests badge]: https://github.com/ampagency/ferrara-candy-web/actions/workflows/test.yml/badge.svg
[Tests page]: https://github.com/ampagency/ferrara-candy-web/actions/workflows/test.yml
[Deployment badge]: https://github.com/ampagency/ferrara-candy-web/actions/workflows/deploy.yml/badge.svg
[Deployment page]: https://github.com/ampagency/ferrara-candy-web/actions/workflows/deploy.yml
