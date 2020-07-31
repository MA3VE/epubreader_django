from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import Book_serialzier
from .models import Book_model

# Create your views here.

@api_view(['POST'])
def create_book(request,*args, **kwargs):
    serializer = Book_serialzier(data=request.data)
    if(serializer.is_valid(raise_exception=True)):
        book = serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def get_books(request,*args, **kwargs):
    qs = Book_model.objects.all()
    serializer = Book_serialzier(qs,many = True)
    return Response(serializer.data)


