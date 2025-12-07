---
description: How to deploy the portfolio to GitHub Pages
---

This workflow guides you through deploying your static website to GitHub Pages.

1.  **Initialize Git (if not already done)**
    ```bash
    git init
    ```

2.  **Add all files to staging**
    ```bash
    git add .
    ```

3.  **Commit your changes**
    ```bash
    git commit -m "Initial commit for portfolio redesign"
    ```

4.  **Rename branch to main (optional but recommended)**
    ```bash
    git branch -M main
    ```

5.  **Add the remote repository**
    *Replace `YOUR_GITHUB_USERNAME` and `REPO_NAME` with your actual details.*
    ```bash
    git remote add origin https://github.com/YOUR_GITHUB_USERNAME/REPO_NAME.git
    ```
    *If the remote already exists, you might need to set the url:*
    ```bash
    git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/REPO_NAME.git
    ```

6.  **Push to GitHub**
    ```bash
    git push -u origin main
    ```

7.  **Enable GitHub Pages**
    - Go to your repository on GitHub.
    - Click on **Settings**.
    - Scroll down to the **Pages** section (or click "Pages" in the left sidebar).
    - Under **Source**, select `Deploy from a branch`.
    - Under **Branch**, select `main` and `/ (root)`.
    - Click **Save**.

Your site will be live at `https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME/`.
