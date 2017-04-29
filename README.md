## Download data
    http://tugdualgrall.blogspot.com/2014/08/
    https://www.dropbox.com/s/yui7shcud2xbxt7/geo.zip

## Restore data
    $ cd ~/Download/geo
    $ mongorestore --collection airports --db airfinds airports.bson
    $ mongorestore --collection states --db airfinds states.bson

## Add index on "loc" field
    $ mongod
    >  use airfinds
    > db.airports.ensureIndex({"loc":"2dsphere"})


## Install angular-cli
    $ npm install -g @angular/cli

## Create client-side project
    $ ng new airfinds-angular

## Start client-side project
    $ cd airfinds-angular
    $ ng serve

## Use bootstrap
    https://bootswatch.com -> Darkly -> Download
    put https://bootswatch.com/darkly/bootstrap.min.css into airfinds-angular/src/index.html

## Create components
    $ cd src/app/components
    $ ng g component navbar
    $ ng g component airports