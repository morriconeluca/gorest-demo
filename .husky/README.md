# What are Conventional Commits?

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification, essentially a set of simple rules, for how to format your commit messages. It's built upon the ideas of semantic versioning (SemVer).

The main goal is to create a **standardized, human-readable, and machine-readable** commit history. This makes it easier to:

1.  **Automate Changelog Generation:** Tools can parse these commits and automatically generate release notes.
2.  **Automate Version Bumping:** Determine the next semantic version number (major, minor, patch) based on the types of commits since the last release.
3.  **Improve Collaboration:** Provides a clear and consistent way for developers (and stakeholders) to understand the nature of changes in the codebase just by looking at the commit history.
4.  **Trigger Build/Deploy Processes:** CI/CD pipelines can potentially use commit types to make decisions.

## The Structure of a Conventional Commit Message

The basic structure looks like this:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- **`<type>`:** This is mandatory and indicates the _kind_ of change introduced by the commit. This is where the prefixes you listed come in.
- **`[optional scope]`:** Enclosed in parentheses, this provides contextual information about _where_ the change occurred (e.g., `api`, `ui`, `parser`, `auth`). It's optional.
- **`<description>`:** A short, imperative (e.g., "fix bug", not "fixed bug" or "fixes bug"), present-tense summary of the change. Starts with a lowercase letter, no period at the end. This is mandatory.
- **`[optional body]`:** A longer description providing more context, motivation for the change, and contrasts with previous behavior. Separated from the description by a blank line.
- **`[optional footer(s)]`:** Used for additional metadata. Common uses:
  - `BREAKING CHANGE:` followed by a description of the breaking change. This signals a MAJOR version bump in SemVer. It can be part of any commit type.
  - Referencing issues (e.g., `Fixes #123`, `Closes #N`).

## Meaning of the Prefixes (Types)

Here's what the common prefixes typically mean:

1.  **`feat`**: (Feature) A commit that introduces a **new feature** to the codebase (from the perspective of the user/consumer, not necessarily a developer). Correlates with a `MINOR` version bump in SemVer.

    - _Example:_ `feat(api): add user registration endpoint`

2.  **`fix`**: (Bug Fix) A commit that **patches a bug** in your codebase. Correlates with a `PATCH` version bump in SemVer.

    - _Example:_ `fix(ui): correct validation error message display`

3.  **`build`**: Changes that affect the **build system** or external dependencies (examples: gulp, broccoli, npm, webpack, package.json updates).

    - _Example:_ `build: update webpack to version 5`
    - _Example:_ `build(deps): bump react-scripts from 4.0.3 to 5.0.0`

4.  **`chore`**: Other changes that **don't modify `src` or `test` files**. Routine tasks, maintenance, tooling configurations, etc. Things that need to be done but don't add features or fix user-facing bugs.

    - _Example:_ `chore: update .gitignore`
    - _Example:_ `chore: configure eslint rules`

5.  **`ci`**: Changes to your **Continuous Integration** configuration files and scripts (examples: GitHub Actions, Travis, CircleCI, Jenkins).

    - _Example:_ `ci: add step to run unit tests in GitHub Actions workflow`

6.  **`docs`**: **Documentation only** changes (e.g., updating README, API documentation, comments).

    - _Example:_ `docs: explain environment variables in README`

7.  **`init`**: (Initial) Often used for the **initial commit** of a project or a major new module/feature setup. It's less common than others and sometimes `feat` or `chore` might be used instead depending on the context.

    - _Example:_ `init: initial project setup with basic structure`

8.  **`perf`**: (Performance) A code change that **improves performance** without changing functionality.

    - _Example:_ `perf(db): add index to users table for faster lookups`

9.  **`refactor`**: A code change that **neither fixes a bug nor adds a feature**. It restructures existing code, perhaps for readability, maintainability, or simplicity, without changing its external behavior.

    - _Example:_ `refactor(auth): extract token validation logic into separate service`

10. **`revert`**: Used when a commit **reverts a previous commit**. The commit message body should typically explain why the revert was necessary and reference the SHA of the commit being reverted.

    - _Example:_ `revert: Revert commit "feat: add experimental feature X"`
    - _Body might contain:_ `This reverts commit a1b2c3d4 because it introduced instability.`

11. **`style`**: Changes that **do not affect the meaning of the code** (white-space, formatting, missing semi-colons, code style changes according to linters, etc.). _Note: This is about code style, not CSS styles._

    - _Example:_ `style: format code according to prettier rules`

12. **`test`**: Adding **missing tests** or correcting **existing tests**. Does not change production code.
    - _Example:_ `test(login): add unit tests for password validation`

By using these prefixes consistently, you make your project's history much more accessible and enable powerful automation around releases and changelogs.
