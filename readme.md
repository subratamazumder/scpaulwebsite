aws s3 sync ./ s3://scpauljewellers.com/ --exclude ".git*" --exclude ".DS*" --profile subrata-amazon
aws s3 cp index.html s3://scpauljewellers.com/ --exclude "*.git*" --exclude ".DS*" --profile subrata-amazon
