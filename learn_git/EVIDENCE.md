# learn-git-checkpoint evidence

This document records the local Git workflow. The final repository contains
`fourth.txt`; `third.txt` was intentionally removed in the third commit.

## 1. Create and enter `learn_git`

```powershell
New-Item learn_git
Set-Location learn_git
```

## 2. Create `third.txt`

```powershell
New-Item third.txt -ItemType File
```

## 3. Initialize an empty Git repository

```powershell
git init
```

## 4. Add `third.txt` to the staging area

```powershell
git add third.txt
git status --short
```

## 5. Commit `third.txt`

```powershell
git commit -m "adding third.txt"
```

## 6. Check the commit history

```powershell
git log --oneline --decorate
```

## 7. Create `fourth.txt`

```powershell
New-Item fourth.txt -ItemType File
```

## 8. Add `fourth.txt` to the staging area

```powershell
git add fourth.txt
git status --short
```

## 9. Commit `fourth.txt`

```powershell
git commit -m "adding fourth.txt"
```

## 10. Remove `third.txt` and stage the change

```powershell
Remove-Item third.txt
git add .
git status --short
```

## 11. Commit the removal

```powershell
git commit -m "removing third.txt"
```

## 12. Final commit history

```text
1e05aa6 (HEAD -> master) removing third.txt
56afa1a adding fourth.txt
888bfe9 adding third.txt
```
