FROM python:3.7.2-alpine

WORKDIR /app

COPY . /app

RUN pip install boto3 flake8

CMD [ "python", "./main.py" ]
