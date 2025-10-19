from django.shortcuts import render, redirect
from .models import Stuff, Practice, Jobs
from .forms import ApplicationForm
from django.contrib import messages
import ast
import datetime
from django import forms
from .forms import get_month_rus, get_weekday_rus_short


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

def worker(request, name):

    worker = Stuff.objects.get(name=name)
    practices_sorted = sorted(worker.practice.all(), key=lambda p: len(p.name))

    return render(request, 'main/worker.html', {'worker': worker, 'practices': practices_sorted})
def about(request):

    return render(request, 'main/about.html',)
def practice(request):

    practice = Practice.objects.all()

    return render(request, 'main/practice.html', {'practice': practice})

def practice_detail(request, practice_name):

    practice = Practice.objects.get(name=practice_name)
    workers = Stuff.objects.filter(practice=practice)

    return render(request, 'main/practice_detail.html', {'practice': practice, 'workers': workers})



def get_month_rus_full(month_num):
    months = {
        1: 'января',
        2: 'феваля',
        3: 'марта',
        4: 'апреля',
        5: 'мая',
        6: 'июня',
        7: 'июля',
        8: 'августа',
        9: 'сентября',
        10: 'октября',
        11: 'ноябября',
        12: 'декабря',
    }
    return months[month_num]

def get_timeslot_for_message(time_slot):
    intervals = {
        "9-12": "с 9 до 12",
        "12-16": "с 12 до 16",
        "16-20": "с 16 до 20",
    }
    return intervals[time_slot]


def work(request):
    global error

    error = False

    jobs = Jobs.objects.all()

    if request.method == 'POST':
        form = ApplicationForm(request.POST)
        if form.is_valid():
            application = form.save(commit=False)
            application.preferred_date = form.cleaned_data['preferred_date']

            phone = request.POST.get('phone')
            application.phone = '+7' + phone
            application.save()

            preferred_date_str = request.POST.get('preferred_date')
            preferred_date_obj = datetime.datetime.strptime(preferred_date_str, '%Y-%m-%d').date()
            formatted_date = f"{preferred_date_obj.day} {get_month_rus_full(preferred_date_obj.month)} "

            error = False

            messages.success(request, f"Мы свяжемся с Вами {formatted_date} в интервале {get_timeslot_for_message(request.POST.get('time_slot'))} часов")
            return redirect('work')

        else:
            errors = str(form.errors.as_data)
            errors = ast.literal_eval('{' + errors.split('{')[1].rstrip('>'))

            res_list = []
            for k, v in errors.items():
                res_list.append(str(v).strip('[').strip("]").strip("'"))

            if res_list[0] == 'Enter a valid email address.':
                res_list[0] = 'Введите корректный  адрес электронной почты'

            if len(res_list) > 1:
                messages.error(request, 'Введите корректный адрес электронной почты и номер телефона')
            else:
                messages.error(request, res_list[0])

            error = True

        # if len(request.POST.get('phone', '')) < 10:
        #         messages.error(request, 'Укажите полный номер телефона')
        #         error = True
        #         return render(request, 'main/work.html', {'jobs': jobs, 'form': form, 'error': error})

    else:
        form = ApplicationForm()



    return render(request, 'main/work.html', {'jobs': jobs, 'form': form, 'error': error,})
