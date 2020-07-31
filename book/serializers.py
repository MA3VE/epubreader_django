from rest_framework import serializers
from .models import Book_model

class Book_serialzier(serializers.ModelSerializer):
    class Meta:
        model = Book_model
        fields = '__all__'

    def create(self,validated_data):
        book_model = Book_model(**validated_data)
        book_model.save()
        return book_model

    def validate_book(self,value):
        if not value.name.split('.')[-1] == 'epub':
            raise serializers.ValidationError("plz provide a epub file")
        return value


        