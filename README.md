![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjames-gates-0212%2Fportfolio)
![GitHub forks](https://img.shields.io/github/forks/james-gates-0212/portfolio?style=flat)
![GitHub Discussions](https://img.shields.io/github/discussions/james-gates-0212/portfolio)
![GitHub Issues](https://img.shields.io/github/issues/james-gates-0212/portfolio)
![GitHub License](https://img.shields.io/github/license/james-gates-0212/portfolio)
![GitHub Repo stars](https://img.shields.io/github/stars/james-gates-0212/portfolio?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/james-gates-0212/portfolio)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/james-gates-0212/portfolio)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/james-gates-0212/portfolio)
![GitHub repo size](https://img.shields.io/github/repo-size/james-gates-0212/portfolio)
![GitHub Release](https://img.shields.io/github/v/release/james-gates-0212/portfolio)
![GitHub Tag](https://img.shields.io/github/v/tag/james-gates-0212/portfolio)

[![Auto Assign](https://github.com/james-gates-0212/portfolio/actions/workflows/auto-assign.yml/badge.svg)](https://github.com/james-gates-0212/portfolio/actions/workflows/auto-assign.yml)
[![CodeQL](https://github.com/james-gates-0212/portfolio/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/james-gates-0212/portfolio/actions/workflows/github-code-scanning/codeql)
[![Deploy Next.js site to Pages](https://github.com/james-gates-0212/portfolio/actions/workflows/deploy-nextjs-site-to-pages.yml/badge.svg)](https://github.com/james-gates-0212/portfolio/actions/workflows/deploy-nextjs-site-to-pages.yml)
[![Next.js Bundle Analysis](https://github.com/james-gates-0212/portfolio/actions/workflows/nextjs-bundle-analysis.yml/badge.svg)](https://github.com/james-gates-0212/portfolio/actions/workflows/nextjs-bundle-analysis.yml)
[![Proof HTML](https://github.com/james-gates-0212/portfolio/actions/workflows/proof-html.yml/badge.svg)](https://github.com/james-gates-0212/portfolio/actions/workflows/proof-html.yml)

# Portfolio based on Next.js & tailwindcss

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment

- node 18.x or later
- yarn 1.x or later
- npm 8.x or later

## Install npm packages

```bash
npm i -g yarn
yarn
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Lint

```bash
yarn lint
```

## Prettier

```bash
prettier --write ./
```

## Build or Start project as production

```bash
yarn build
```

or

```bash
yarn start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Git commit

> [!NOTE]\
> Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for your commits.

e.g.

```
{emoji} <type>[scope]: <subject>
[body]
[footer]
```

### Types

> [!IMPORTANT]\
> `type` should be one of belows.

```
add
adopt
apply
build
chore
config
delete
docs
feat
fix
init
refactor
remove
style
test
update
upgrade
```

### Emoji

> [!IMPORTANT]\
> Your commit should start with gitmoji code.\
> Please check the emoji code on https://gitmoji.dev/

| Description                                                   | Emoji | Code                          |
| :------------------------------------------------------------ | :---: | :---------------------------- |
| Add a dependency.                                             |  ➕   | `:heavy_plus_sign:`           |
| Add a failing test.                                           |  🧪   | `:test_tube:`                 |
| Add or update a .gitignore file.                              |  🙈   | `:see_no_evil:`               |
| Add or update an easter egg.                                  |  🥚   | `:egg:`                       |
| Add or update analytics or track code.                        |  📈   | `:chart_with_upwards_trend:`  |
| Add or update animations and transitions.                     |  💫   | `:dizzy:`                     |
| Add or update assets.                                         |  🍱   | `:bento:`                     |
| Add or update business logic.                                 |  👔   | `:necktie:`                   |
| Add or update CI build system.                                |  👷   | `:construction_worker:`       |
| Add or update code related to multithreading or concurrency.  |  🧵   | `:thread:`                    |
| Add or update code related to validation.                     |  🦺   | `:safety_vest:`               |
| Add or update comments in source code.                        |  💡   | `:bulb:`                      |
| Add or update compiled files or packages.                     |  📦️  | `:package:`                   |
| Add or update configuration files.                            |  🔧   | `:wrench:`                    |
| Add or update contributor(s).                                 |  👥   | `:busts_in_silhouette:`       |
| Add or update development scripts.                            |  🔨   | `:hammer:`                    |
| Add or update documentation.                                  |  📝   | `:memo:`                      |
| Add or update healthcheck.                                    |  🩺   | `:stethoscope:`               |
| Add or update license.                                        |  📄   | `:page_facing_up:`            |
| Add or update logs.                                           |  🔊   | `:loud_sound:`                |
| Add or update secrets.                                        |  🔐   | `:closed_lock_with_key:`      |
| Add or update seed files.                                     |  🌱   | `:seedling:`                  |
| Add or update snapshots.                                      |  📸   | `:camera_flash:`              |
| Add or update text and literals.                              |  💬   | `:speech_balloon:`            |
| Add or update the UI and style files.                         |  💄   | `:lipstick:`                  |
| Add or update types.                                          |  🏷️   | `:label:`                     |
| Add sponsorships or money related infrastructure.             |  💸   | `:money_with_wings:`          |
| Add, update, or pass tests.                                   |  ✅   | `:white_check_mark:`          |
| Add, update, or remove feature flags.                         |  🚩   | `:triangular_flag_on_post:`   |
| Begin a project.                                              |  🎉   | `:tada:`                      |
| Catch errors.                                                 |  🥅   | `:goal_net:`                  |
| Critical hotfix.                                              |  🚑️  | `:ambulance:`                 |
| Data exploration/inspection.                                  |  🧐   | `:monocle_face:`              |
| Deploy stuff.                                                 |  🚀   | `:rocket:`                    |
| Deprecate code that needs to be cleaned up.                   |  🗑️   | `:wastebasket:`               |
| Downgrade dependencies.                                       |  ⬇️   | `:arrow_down:`                |
| Fix a bug.                                                    |  🐛   | `:bug:`                       |
| Fix CI Build.                                                 |  💚   | `:green_heart:`               |
| Fix compiler / linter warnings.                               |  🚨   | `:rotating_light:`            |
| Fix security or privacy issues.                               |  🔒️  | `:lock:`                      |
| Fix typos.                                                    |  ✏️   | `:pencil2:`                   |
| Improve accessibility.                                        |  ♿️   | `:wheelchair:`                |
| Improve developer experience.                                 |  🧑‍💻   | `:technologist:`              |
| Improve performance.                                          |  ⚡️  | `:zap:`                       |
| Improve SEO.                                                  |  🔍️  | `:mag:`                       |
| Improve structure / format of the code.                       |  🎨   | `:art:`                       |
| Improve user experience / usability.                          |  🚸   | `:children_crossing:`         |
| Infrastructure related changes.                               |  🧱   | `:bricks:`                    |
| Internationalization and localization.                        |  🌐   | `:globe_with_meridians:`      |
| Introduce breaking changes.                                   |  💥   | `:boom:`                      |
| Introduce new features.                                       |  ✨   | `:sparkles:`                  |
| Make architectural changes.                                   |  🏗️   | `:building_construction:`     |
| Merge branches.                                               |  🔀   | `:twisted_rightwards_arrows:` |
| Mock things.                                                  |  🤡   | `:clown_face:`                |
| Move or rename resources (e.g.: files, paths, routes).        |  🚚   | `:truck:`                     |
| Perform database related changes.                             |  🗃️   | `:card_file_box:`             |
| Perform experiments.                                          |  ⚗️   | `:alembic:`                   |
| Pin dependencies to specific versions.                        |  📌   | `:pushpin:`                   |
| Refactor code.                                                |  ♻️   | `:recycle:`                   |
| Release / Version tags.                                       |  🔖   | `:bookmark:`                  |
| Remove a dependency.                                          |  ➖   | `:heavy_minus_sign:`          |
| Remove code or files.                                         |  🔥   | `:fire:`                      |
| Remove dead code.                                             |  ⚰️   | `:coffin:`                    |
| Remove logs.                                                  |  🔇   | `:mute:`                      |
| Revert changes.                                               |  ⏪️  | `:rewind:`                    |
| Simple fix for a non-critical issue.                          |  🩹   | `:adhesive_bandage:`          |
| Update code due to external API changes.                      |  👽️  | `:alien:`                     |
| Upgrade dependencies.                                         |  ⬆️   | `:arrow_up:`                  |
| Work in progress.                                             |  🚧   | `:construction:`              |
| Work on code related to authorization, roles and permissions. |  🛂   | `:passport_control:`          |
| Work on responsive design.                                    |  📱   | `:iphone:`                    |
| Write bad code that needs to be improved.                     |  💩   | `:poop:`                      |
| Write code drunkenly.                                         |  🍻   | `:beers:`                     |
