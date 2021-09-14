from rest_framework import generics
from rest_framework import mixins
from django_filters.rest_framework import DjangoFilterBackend

from .models  import User
from .serializers  import UserSerializer


class UserAPIView(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,mixins.RetrieveModelMixin):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    filter_backends = [DjangoFilterBackend]
    lookup_field='id'

    def get(self, request, id=None):
        if id:
            return self.retrieve(request) #get specific User
        else:
            return self.list(request) #get ALl User

    def post(self, request):
        return self.create(request) #Add user

    def put(self, request,id=None):
        return self.update(request,id) #update user

    def delete(self, request,id=None):
        return self.destroy(request,id) #Delete user




