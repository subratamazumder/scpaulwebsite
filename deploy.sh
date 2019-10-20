aws s3 sync ./ s3://scpauljewellers.com/ --acl public-read --exclude "*.git*" --exclude "*.DS*" --exclude "*deploy.sh*"  --profile subrata-amazon
