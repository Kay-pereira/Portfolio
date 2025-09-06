from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from .models import Projects
from .Serializers import ProjectsSerializer


# Create your views here.

@api_view (['POST', 'GET'])
def ProjectView(request):
    if request.method == 'GET':
        projects = Projects.objects.all().order_by('-created at')
        serializer = ProjectsSerializer(projects, many=True)
        return (serializer.data)
    
    elif request.method == 'POST':
         if not request.user.is_staff:
            return Response({"detail": "Not authorized"}, status=status.HTTP_403_FORBIDDEN)
         

    serializer = ProjectsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Retreive, update or get single project

@api_view (['GET', 'DELETE', 'PUT'])

def project_detail(request, pk):

    try:
        projects = Projects.objects.get(pk=pk)
    except projects.DoesNotExist:
        return Response( {"error": "not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ProjectsSerializer(projects)
        return Response(serializer.data)
    elif request.method == 'PUT':

        if not request.user.is_staff:
            return Response({"detail": "Not authorized"}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = ProjectsSerializer(projects, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        projects.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
