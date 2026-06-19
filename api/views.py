from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework import viewsets

from .models import Producto
from .serializers import ProductoSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def saludo(request):

    return Response({
        "mensaje": "Autenticación JWT correcta"
    })

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    permission_classes = [IsAuthenticated]