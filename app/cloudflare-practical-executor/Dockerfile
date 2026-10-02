FROM cloudflare/sandbox:1.0.0

RUN apt-get update \
  && apt-get install -y --no-install-recommends clang g++ coreutils \
  && rm -rf /var/lib/apt/lists/*
