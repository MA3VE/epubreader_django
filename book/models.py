from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Book_model(models.Model):
    title = models.CharField(max_length=50)
    book = models.FileField(upload_to='books/')
    cover = models.FileField(upload_to='covers/', blank=True, null=True)
    page = models.CharField(max_length=50, blank=True, null=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    author = models.CharField(max_length=50, blank=True, null=True)
    series = models.CharField(max_length=50, blank=True, null=True)
    series_no = models.IntegerField(blank=True, null=True)
