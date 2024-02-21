FROM rustlang/rust:nightly as builder

WORKDIR /blog

COPY Cargo.toml Cargo.lock ./


COPY src src
COPY migrations migrations/

RUN cargo install diesel_cli --no-default-features --features postgres

RUN cargo install --path .

RUN cp /usr/local/cargo/bin/blog ./blog

RUN cargo build --release


CMD ["./blog"]