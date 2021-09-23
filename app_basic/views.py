from rest_framework import generics
from rest_framework import mixins
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .models  import User
from .serializers  import UserSerializer
from rest_framework.response import Response


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


class UserLoginView(APIView):

    def post(self, request):
        email=request.data['email']
        password = request.data['password']

        user=User.objects.filter(email=email).first();

        if user is None:
            raise AuthenticationFailed("User not found !!")
        if not user.password==password:
            raise AuthenticationFailed("Incorrect password !!")
        # print(user.password);
        return Response({
            "success": True,
            "message":"success",
            "user": user.name,
        })
