FROM ruby:2.6.0

ADD . .
RUN apt-get update
RUN apt-get install -y --allow-unauthenticated curl
RUN chmod 1777 /tmp
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN gem install bundler
RUN bundle install

EXPOSE 3000
ENTRYPOINT rails db:migrate && rails s