from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from .serializers import Book_serialzier
from .models import Book_model
from knox.auth import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import zipfile

# Create your views here.


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_book(request, *args, **kwargs):
    serializer = Book_serialzier(
        data=request.data, context={"user": request.user})
    serializer.initial_data["title"] = serializer.initial_data.get(
        "book").name.split(".epub")[0]
    serializer.initial_data["user"] = request.user.id
    # with zipfile.ZipFile(serializer.initial_data.get("book"), 'r') as my_zip:
    #     if "cover.jpeg" in my_zip.namelist():
    #         serializer.initial_data["cover"] = my_zip.open("cover.jpeg")
    if(serializer.is_valid(raise_exception=True)):
        book = serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_books(request, *args, **kwargs):
    print("inside")
    qs = Book_model.objects.filter(
        user=request.user, )
    serializer = Book_serialzier(
        qs, many=True, context={"user": request.user})
    print(serializer.data)
    return Response(serializer.data)


@api_view(['PATCH', 'POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def patch_book(request, *args, **kwargs):
    print(request.data)
    qs = Book_model.objects.filter(id=request.data.get("id"))
    if not qs.exists():
        return Response({"error": "book doesnt exits"})
    book = qs.first()
    if(request.data.get("text_size")):
        book.text_size = request.data["text_size"]
    if(request.data.get("theme")):
        book.theme = request.data["theme"]
    if(request.data.get("page")):
        print("inside page")
        book.page = request.data["page"]
    book.save()

    return Response({"success": True})
