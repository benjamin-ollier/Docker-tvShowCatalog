FROM rustlang/rust:nightly as builder

WORKDIR /blog

COPY Cargo.toml Cargo.lock ./

RUN mkdir src && echo "fn main() {}" > src/main.rs && cargo build --release && rm -rf src

COPY src src
COPY migrations migrations/

RUN cargo build --release

RUN cargo install diesel_cli --no-default-features --features postgres

FROM debian:buster-slim

RUN apt-get update \
    && apt-get install -y libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /blog/target/release/blog .

COPY --from=builder /blog/migrations ./migrations

COPY static static/
COPY templates templates/


COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

CMD ["./blog"]