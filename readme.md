## Deploy to AWS S3

``` bash
scpaulwebsite$ ./deploy.sh
```

## Other Utility Commands for reference
``` bash
aws s3 sync ./ s3://scpauljewellers.com/ --acl public-read --exclude ".git*" --exclude ".DS*" --profile subrata-amazon

aws s3 cp index.html s3://scpauljewellers.com/ --acl public-read --exclude "*.git*" --exclude ".DS*" --profile subrata-amazon

aws s3 rm s3://scpauljewellers.com/deploy.sh --profile subrata-amazon
```

