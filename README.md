# Simple Node.js REST API

## ローカル環境
* GET
```
curl http://localhost:5000/react-firebase-f3f4a/us-central1/api/tsundokus

curl http://localhost:5000/react-firebase-f3f4a/us-central1/api/tsundokus/1
```

* POST
```
curl -X POST -H "Content-Type: application/json" -d '{"title":"UXデザインをはじめる本","location":"本棚","memo":"UXやってみる"}' localhost:5000/react-firebase-f3f4a/us-central1/api/tsundokus
```

* PUT
```
curl -X PUT -H "Content-Type: application/json" -d '{"memo":"アーキテクチャ参考にする"}' localhost:5000/react-firebase-f3f4a/us-central1/api/tsundokus/1
```

* DELETE
```
curl http://localhost:5000/react-firebase-f3f4a/us-central1/api/tsundokus/1
```

## CloudFunction環境
* GET
```
curl https://us-central1-react-firebase-f3f4a.cloudfunctions.net/api/tsundokus

curl https://us-central1-react-firebase-f3f4a.cloudfunctions.net/api/tsundokus/1
```


* POST
```
curl -X POST -H "Content-Type: application/json" -d '{"title":"UXデザインをはじめる本","location":"本棚","memo":"UXやってみる"}' https://us-central1-react-firebase-f3f4a.cloudfunctions.net/api/tsundokus
```

* PUT
```
curl -X PUT -H "Content-Type: application/json" -d '{"memo":"アーキテクチャ参考にする"}' us-central1-react-firebase-f3f4a.cloudfunctions.net/api/tsundokus/1

```

* DELETE
```
curl -X DELETE https://us-central1-react-firebase-f3f4a.cloudfunctions.net/api/tsundokus/1
```