from django.db import models

# Create your models here.

class Book_model(models.Model):
    title = models.CharField(max_length=50)
    book = models.FileField(upload_to='')
    page = models.CharField(max_length = 50,blank = True,null = True)
    