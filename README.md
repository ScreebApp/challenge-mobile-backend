
# Backend server for Mobile challenge

## Run

```bash
npm install
npm start
```

or

```bash
docker build -t screeb/challenge .
docker run --rm -it -p 3000:3000 screeb/challenge
```

## Debug

```
curl 'http://localhost:3000/foo?bar=42' \
    -X POST \
    -H 'content-type: application/json' \
    -d '{"hello": "world"}'
```
