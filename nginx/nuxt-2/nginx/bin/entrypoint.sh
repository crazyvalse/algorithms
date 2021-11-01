#!/bin/sh

cat > /etc/nginx/conf.d/upsteam.conf <<EOF
EOF

exec nginx-debug -g "daemon off;"
