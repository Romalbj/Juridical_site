from django.shortcuts import render
from .models import Stuff

def home(request):
    return render(request, 'main/home.html',)

def team(request):
    # stuff_practice = {}
    # for worker in Stuff.objects.all():
    #     practices = list(worker.practice.all())
    #     practice_name = [practice.name for practice in practices]
    #     stuff_practice[worker.name] = practice_name  # или practice_ids

    stuff_info = Stuff.objects.all()


    return render(request, 'main/team.html', {'stuff_info': stuff_info})

def about(request):

    return render(request, 'main/about.html',)
def practice(request):

    return render(request, 'main/practice.html',)
def work(request):

    return render(request, 'main/work.html',)
