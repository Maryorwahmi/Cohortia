FROM cloudflare/sandbox:0.12.4

RUN apt-get update \
  && apt-get install -y --no-install-recommends clang g++ coreutils \
  && rm -rf /var/lib/apt/lists/*
