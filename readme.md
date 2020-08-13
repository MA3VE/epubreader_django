#Epub Reader

[Demo deployed on heroku](https://epubreader.herokuapp.com)

it is a epub reader with authentication which stores your epub files on amazon aws s3

made with django and react

to work with this project you need to have an account in aws s3 and sendgrid
add below code to .bashrc file.this are environment vairables

```
#aws
export DEBUG=True
export AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY
export AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_KEY
export AWS_STORAGE_BUCKET_NAME=YOUR_AWS_STORAGE_BUCKET_NAME

#sendgrid
export EMAIL_HOST_USER=apikey
export EMAIL_HOST_PASSWORD=YOUR_EMAIL_HOST_PASSWORD

export JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY #just smash your keyboard
export DJANGO_SECRET_KEY=YOUR_DJANGO_SECRET_KEY #same smash keyboard

```

activate your environment amd then
cd into project folder

```
pip install requirements.txt && python manage.py runserver #to start the django server
cd client && npm install && npm start #to start the react server
```

and also in settings change homepage(at the bottom of file) vairable to 127.0.0.1:3000

```
HOMEPAGE = "http://127.0.0.1:3000"
```
