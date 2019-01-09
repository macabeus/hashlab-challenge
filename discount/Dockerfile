FROM python:3.7.2-stretch

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

CMD [ "python", "-u", "./main.py" ]
