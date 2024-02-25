FROM rustlang/rust:nightly as builder

WORKDIR /blog

ADD . .

RUN cargo install --path .

RUN cp /usr/local/cargo/bin/blog ./blog

RUN cargo install diesel_cli --no-default-features --features postgres

