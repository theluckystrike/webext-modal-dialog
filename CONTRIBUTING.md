# CONTRIBUTING GUIDE

Thank you for your interest in contributing to webext-modal-dialog.

## REPORTING ISSUES

When reporting bugs or requesting features, please include:
- A clear description of the issue or feature request
- Steps to reproduce (for bugs)
- Your environment details (browser, extension version)
- Code samples if applicable

Before opening a new issue, please search existing issues to avoid duplicates.

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch from main
4. Make your changes
5. Ensure tests pass and code builds correctly
6. Commit with clear, descriptive messages
7. Push to your fork and submit a pull request

```bash
git clone https://github.com/theluckystrike/webext-modal-dialog.git
cd webext-modal-dialog
npm install
```

## CODE STYLE

- Use TypeScript for all new code
- Follow the existing code patterns in the project
- Keep functions small and focused
- Add JSDoc comments for public APIs
- Use meaningful variable and function names

## TESTING

Run the build to verify TypeScript compiles correctly:

```bash
npm run build
```

Ensure there are no compilation errors before submitting changes.

## LICENSE

By contributing, you agree that your contributions will be licensed under the MIT License.
