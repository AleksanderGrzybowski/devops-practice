#! /bin/bash

TIMESTAMP=$(date +%F_%H_%M)

mysqldump -u {{ mysql_username}} -p{{ mysql_password }} {{ mysql_database}} | bzip2 > "{{ backups_directory}}/mysql-${TIMESTAMP}.sql.bz2"
tar -C /var/www/html -cjf "{{ backups_directory }}/wp-${TIMESTAMP}.tar.bz2" .
