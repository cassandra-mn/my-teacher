from rest_framework import serializers
from teacher.models import Teacher, Classroom

class TeacherSerialize(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class RegisterClassSerialize(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

class ClassSerialize(serializers.ModelSerializer):
    class Meta:
        model = Classroom
        fields = '__all__'
