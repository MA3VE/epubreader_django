from django.contrib import admin
from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.staticfiles.urls import static
from .views import create_book, get_books, patch_book
from django.conf import settings

urlpatterns = [
    path('', get_books),
    path('create', create_book),
    path('patch', patch_book),

]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
