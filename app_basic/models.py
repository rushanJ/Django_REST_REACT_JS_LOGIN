from django.db import models

# Create your models here.


class User(models.Model):
    name=models.CharField(("name"), max_length=100)
    email=models.CharField(("email"), max_length=100)
    password = models.CharField(("password"), max_length=100)
    class Meta:
        db_table='user'

    def __str__(self):
        return self.name

