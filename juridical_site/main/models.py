from django.db import models

from django.db import models

class Practice(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Stuff(models.Model):

    name = models.CharField(max_length=255)
    post = models.CharField(max_length=255)
    number = models.CharField(max_length=50)
    mail = models.CharField(max_length=50, default='не указано')
    biography = models.TextField()
    photo = models.ImageField(upload_to="photos")
    practice = models.ManyToManyField(Practice, related_name='practice')

    def __str__(self):
        return self.name

