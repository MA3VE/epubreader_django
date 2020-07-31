from rest_framework import serializers
from .models import Book_model

class Book_serialzier(serializers.ModelSerializer):

    class Meta:
        model = Book_model
        fields = '__all__'
        kwargs = {'user':{'writeonly':True}}

    def create(self,validated_data):
        book_model = Book_model(**validated_data,user = self.context.get("user"))
        book_model.save()
        return book_model


        