from django.db import models
from django.utils import timezone
from datetime import timedelta

class Practice(models.Model):
    name = models.CharField(max_length=255)
    contents = models.TextField(default='не указано')
    service_list = models.TextField(default='не указано')

    def __str__(self):
        return self.name


class Stuff(models.Model):

    name = models.CharField(max_length=255)
    post = models.CharField(max_length=255)
    number = models.CharField(max_length=50)
    mail = models.CharField(max_length=50, default='не указано')
    city = models.CharField(max_length=255, default='не указано')
    biography = models.TextField()
    photo = models.ImageField(upload_to="photos")
    practice = models.ManyToManyField(Practice, related_name='practice')
    projects = models.TextField(default='не указано')

    def __str__(self):
        return self.name


class Jobs(models.Model):

    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    experience = models.CharField(max_length=255)
    schedule = models.CharField(max_length=255)
    requirements = models.TextField()
    tasks = models.TextField()
    conditions = models.TextField()
    # practice_job = models.CharField(max_length=255, default='не указано')
    practice = models.ForeignKey(
        Practice,
        on_delete=models.SET_NULL,  # или CASCADE, в зависимости от логики
        null=True,  # чтобы поле могло быть пустым
        blank=True,
        related_name='jobs'  # для доступа к вакансиям у практики: practice.jobs.all()
    )


    def __str__(self):
        return self.name




class Application(models.Model):
    email = models.EmailField("Email")
    phone = models.CharField("Телефон", max_length=20)
    preferred_date = models.DateField("Удобная дата для связи")
    time_slot = models.CharField("Временной интервал", max_length=20)

    def __str__(self):
        return f'{self.email} - {self.preferred_date} {self.time_slot}'