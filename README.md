# Example of a NextJS application with authencation

---

Exercise on handling authencation in a NextJS server side rendered application

### Setup

```bash
git clone <repo> and cd <dir>
yarn
cp .env.example .env # update env according to your needs
yarn dev # to start the development
```

### Scripts

```
yarn dev # start the development server
yarn build # create server side rendered build
yarn start # server the build (server)
yarn static # export to static html files
```

### API server

I have used an existing server on local environment running on http://localhost:8000. Our api server has to:

- Handle authentication with Token stored in `token` cookies which is `httpOnly`.
- Allow `Access-Control-Allow-Credentials` in request
