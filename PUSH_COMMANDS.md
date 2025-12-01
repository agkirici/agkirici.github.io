# Git Push Commands

Open Git Bash or VS Code Terminal in the project folder and run:

```bash
# Navigate to project (if not already there)
cd "C:/Users/arzuk/OneDrive/Masaüstü/agkirici.github.io"

# Check status
git status

# If git is not initialized, initialize it first:
git init
git remote add origin https://github.com/agkirici/agkirici.github.io.git

# Add all changes
git add .

# Commit
git commit -m "Add live demo link for gene-expression-atlas project"

# Push to main branch
git push -u origin main
```

If you get "branch diverged" error, you may need to:
```bash
git pull --rebase origin main
git push origin main
```

