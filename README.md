# Movielog

A collection tracker for movies where I keep track of the films I own, in witch format and rated how needed they are.
Also with the option of keep track of ones I want, and there give rate of how much they are needed.

**Live app:** https://movielog-sigma.vercel.app/

## Features

- List all films, with a status filter (All, Own, Want)
- A page for each film with cover, edition, format, status and rating
- Add a new film
- Change status and rating, and/or delete a film
- Loading indicators, error messages and a 404 page

## Tech stack

React, TypeScript, Vite and React Router.

## Run locally

```bash
git clone https://github.com/Marcusey/marcusey-movielog.git
cd marcusey-movielog
npm install
npm run dev
```

Then open the address shown in the terminal, usually http://localhost:5173.

## API and handle

The app uses the Shelf API (https://shelf-api-mu.vercel.app/docs). There is no login. Instead, items are saved under a handle that is part of the URL.

**My handle:** `marcusey`

Everyone who opens the app sees this collection, since the handle is fixed in `src/api.ts`.

## Grade

## Grade

I am aiming for **G**.

## Possible improvements

- Let each visitor choose their own handle in the app, so everyone builds their own collection instead of sharing.