if [ $# -eq 0 ]
  then
    echo "No commit message supplied, setting default"
    export COMMIT_MESSAGE = "minor update"
fi
if [ $# -eq 1 ]
  then
    export COMMIT_MESSAGE = $1
fi

git pull
git add .
git commit -m $COMMIT_MESSAGE .
git push

