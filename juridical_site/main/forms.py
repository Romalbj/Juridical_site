import datetime

from django import forms
from datetime import date, timedelta
from .models import Application

# Генерация доступных дат
def get_available_dates():
    dates = []
    today = date.today()
    # ищем следующие 3 дня (скипаем выходные)
    days_found = 0
    current_day = today
    while days_found < 3:
        current_day += timedelta(days=1)
        # пропускаем субботу и воскресенье
        if current_day.weekday() < 5:  # 0=Понедельник, 6=Воскресенье
            dates.append(current_day)
            days_found += 1
    return dates

# print(get_available_dates())
# print(date.today(), datetime.datetime.now().time())

# Варианты временных интервалов
TIME_SLOTS = [
    ("9-12", "с 9 до 12"),
    ("12-16", "с 12 до 16"),
    ("16-20", "с 16 до 20"),
]

def get_weekday_rus_short(date_obj):
    days = {
        0: "пн",
        1: "вт",
        2: "ср",
        3: "чт",
        4: "пт",
        5: "сб",
        6: "вс",
    }
    return days[date_obj.weekday()]

def get_month_rus(month_num):
    months = {
        1: 'янв.',
        2: 'фев.',
        3: 'мар.',
        4: 'апр.',
        5: 'мая',
        6: 'июня',
        7: 'июля',
        8: 'авг.',
        9: 'сент.',
        10: 'окт.',
        11: 'нояб.',
        12: 'дек.',
    }
    return months[month_num]

class ApplicationForm(forms.ModelForm):

    preferred_date = forms.ChoiceField(
        choices=[
            (
                d.strftime('%Y-%m-%d'),
                f"{d.day} {get_month_rus(d.month)} {get_weekday_rus_short(d)}"
            )
            for d in get_available_dates()
        ],
        widget=forms.RadioSelect,
        label='Выберите дату'
    )

    time_slot = forms.ChoiceField(
        choices=TIME_SLOTS,
        widget=forms.RadioSelect,
        label='Выберите время'
    )

    email = forms.EmailField(label="Эл. почта",
                             widget=forms.TextInput
                             (attrs={'placeholder': 'Почта'}))

    phone = forms.CharField(label="Номер телефона", max_length=20,
                            widget=forms.TextInput
                            (attrs={'placeholder': 'Номер телефона',
                                    'oninput': 'this.value=this.value.replace(/[^0-9]/g, "")',
                                    'inputmode': 'numeric'})
                            )

    def clean_phone(self):
        phone = self.cleaned_data.get('phone', '')
        digits_only = ''.join(filter(str.isdigit, phone))
        if len(digits_only) != 10:
            raise forms.ValidationError('Введите корректный номер телефона')
        return phone

    class Meta:
        model = Application
        fields = ['email', 'phone', 'preferred_date', 'time_slot']