from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Project
from .Serializers import ProjectsSerializer

# List + Create Projects
@api_view(['GET', 'POST'])
def ProjectView(request):
    if request.method == 'GET':
        projects = Project.objects.all().order_by('-created_at')
        serializer = ProjectsSerializer(projects, many=True, context={"request": request})
        return Response(serializer.data)

    elif request.method == 'POST':
        if not request.user.is_staff:
            return Response({"detail": "Not authorized"}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProjectsSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Retrieve, Update, Delete Single Project
@api_view(['GET', 'PUT', 'DELETE'])
def project_detail(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProjectsSerializer(project, context={"request": request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        if not request.user.is_staff:
            return Response({"detail": "Not authorized"}, status=status.HTTP_403_FORBIDDEN)

        serializer = ProjectsSerializer(project, data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
