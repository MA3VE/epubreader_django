from django.contrib import admin
from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import create_book,get_books

urlpatterns = [
    path('',get_books),
    path('create',create_book),
]

urlpatterns += staticfiles_urlpatterns()
