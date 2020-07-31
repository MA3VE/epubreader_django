from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from .serializers import Book_serialzier
from .models import Book_model
from knox.auth import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_book(request,*args, **kwargs):
    serializer = Book_serialzier(data=request.data,context = {"user":request.user})
    if(serializer.is_valid(raise_exception=True)):
        book = serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_books(request,*args, **kwargs):
    qs = Book_model.objects.filter(user = request.user)
    serializer = Book_serialzier(qs,many = True)
    return Response(serializer.data)


