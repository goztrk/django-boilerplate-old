FROM python:3.11.2-slim

ENV PYTHONUNBUFFERED 1

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user
WORKDIR /home/user/app/backend

# Install system dependencies
RUN apt-get update && \
    apt-get install gcc build-essential libpq-dev -y && \
    python3 -m pip install --no-cache-dir pip-tools

# Install python dependencies
ADD requirements*.in /home/user/app/backend/
RUN pip-compile --resolver=backtracking --output-file requirements.txt && \
    pip-compile --resolver=backtracking requirements-dev.in --output-file requirements-dev.txt

RUN pip install -r requirements.txt && \
    pip install -r requirements-dev.txt && \
    pip install psycopg2-binary

# Clean the house
RUN apt-get purge libpq-dev -y && \
    apt-get autoremove -y && \
    rm /var/lib/apt/lists/* && \
    rm -rf /var/cache/apt/*

ADD backend/ /home/user/app/backend

USER user

CMD gunicorn core.wsgi --log-file - -b 0.0.0.0:8000 --reload
