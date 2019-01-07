FROM python:3.7.2-stretch

WORKDIR /app

COPY . /app

RUN pip install boto3 flake8 nose2 grpcio-tools

CMD [ "python", "-u", "./main.py" ]
