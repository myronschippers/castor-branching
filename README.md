# Git Branching

Creating, Merging, Changing, and Creating Pull Requests for git repository branches.

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Commands

1. moving to a specific branch
    - `git checkout <branch-name>`
1. creating a new branch and moving to that new branch
    - `git checkout -b <branch-name>`
1. combining changes from one branch to the current branch you are on
    - `git merge <branch-name>`
1. updating your branch with changes from the remote repository
    - `git pull origin <branch-name>`
1. I can't see that branch locally what do I do
    - `git fetch`
1. check to see what branch you are currently on
    - `git branch`


## Git Branching Process

The following are some step by step instruction for `git` branching workflow. It is assuming that your primary branch is `main` but if you are using `master` or `develop` then sub those in for main.


### Steps for: Creating a New Branch

1. make sure you're on the `main` branch
    - `git checkout main`
1. create your new branch (`<branch-name>` should be replaced by your new name)
    - `git checkout -b <branch-name>`
1. make sure the branch is available in the remote repository
    - `git push -u origin <bran-name>`
1. work on your branch and don't forget to commit your work
    - `git add .`
    - `git commit -m "meaningful words"`


### Steps for: Creating a Pull Request

**RESOLVE LOCAL CODE:**
1. make sure you have tested your feature and it is working fully
1. with your feature finished ensure all changes are completely committed and pushed up to the remote repository
    - `git add .`
    - `git commit -m "words of meaning"`
    - `git push`
1. move to the main branch and make sure you have the most up to date code
    - `git checkout main`
    - `git pull origin main`
1. move back to your feature and merge all of the updates you pulled in with your code
    - `git checkout <branch-name>`
    - `git merge main`
1. check for any code conflicts by running a global search (press: `command` + `shift` + `F`) for `<<<<`
    - to resolve each code conflict choose to keep either current changes, incoming changes, or both
1. run your application to ensure that everything is working
1. commit the code conflict updates
    - `git add .`
    - `git commit -m "resolving merge conflicts from main branch"`
1. send the most recent version of your branch to the remote repository
    - `git push`

**CREATE PULL REQUEST:**
1. go to the repository on [GitHub](https://github.com/)
1. click on the **Pull Request** tab at the top of the page
1. click on the **New pull request** button
1. at the top just under the "Compare Changes" heading
    - for the **base:** select the `main` (the branch you want to merge into)
    - for the **compare:** select your `<branch-name>` (the branch you want to merge from)
1. click on the **Create pull request** button
1. make sure the text has an appropriate message for what feature you're merging
1. click on the **Create pull request** button
1. at the bottom of the PR (Pull Request) page if the **Merge pull request** button is green then click it
1. your feature is now merged into `main`


## Workflow

- main -> master = production
- develop = current/active development
- feature-first-creature

```
 • main
 |
 |
 •
 | \
 |  • - develop
 •  |
 |  •
 |  | \
 |  |  • - feature-branch
 |  |  |
 |  |  •
 |  | /
 |  • - merged feature-branch into develop
 |  |
 |  •
 | /
 • - merged develop into main
 |
 |
 ```