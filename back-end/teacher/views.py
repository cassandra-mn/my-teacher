from django.shortcuts import get_object_or_404
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from teacher.models import Teacher, Classroom
from teacher.serializers import TeacherSerialize, RegisterClassSerialize, ClassSerialize

class TeacherApiView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerialize(teachers, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class RegisterClassApiView(APIView):
    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = RegisterClassSerialize(data=request.data)
        if serializer.is_valid(): 
            classroom = Classroom(
                name = serializer.validated_data.get('name'),
                email = serializer.validated_data.get('email'),
                teacher = teacher
            )
            classroom.save()
            classroom_serializer = ClassSerialize(classroom, many=False)
            return Response(classroom_serializer.data, status=HTTP_201_CREATED)
        return Response({"message": "Validation errors", "errors": serializer.errors}, status=HTTP_400_BAD_REQUEST)