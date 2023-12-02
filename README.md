# react-mvt

Minimum viable technology for React - with hook and simple page

# init

project

```
npx create-react-app react-mvt-app --template typescript
cd react-mvt-app
npm start
```

preeiter

```
yarn add --dev --exact prettier

node --eval "fs.writeFileSync('.prettierrc','{}\n')"

.prettierignore

# once
yarn prettier . --write

# every change (need run)
npx onchange "**/*" -- npx prettier --write --ignore-unknown {{changed}}

# vscode plugin see https://www.coder4.com/archives/8007
prettier-vscode

```

json-server

```
npm i -g json-server
```

# Tech Stack

- React + Hook + TS
- Json Server (For Mock)
