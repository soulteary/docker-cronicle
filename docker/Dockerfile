FROM soulteary/cronicle:0.9.63

# Installa le dipendenze necessarie
RUN apk add --no-cache \
    icu-libs \
    krb5-libs \
    libgcc \
    libintl \
    libssl3 \
    libstdc++ \
    zlib \
    wget \
    bash \
    ca-certificates \
    gcompat

# Installa .NET usando lo script ufficiale
RUN wget https://dot.net/v1/dotnet-install.sh && \
    chmod +x dotnet-install.sh && \
    ./dotnet-install.sh --channel 8.0 --runtime aspnetcore --install-dir /usr/share/dotnet && \
    ln -sf /usr/share/dotnet/dotnet /usr/local/bin/dotnet && \
    rm dotnet-install.sh

# Imposta le variabili d'ambiente per .NET
ENV \
    DOTNET_ROOT=/usr/share/dotnet \
    PATH="$PATH:/usr/share/dotnet" \
    DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false \
    ASPNETCORE_URLS=http://+:5000

# Rendi eseguibile dotnet e imposta i permessi
RUN chmod +x /usr/share/dotnet/dotnet && \
    chmod +x /usr/local/bin/dotnet

# Verifica l'installazione di .NET
RUN dotnet --info || true