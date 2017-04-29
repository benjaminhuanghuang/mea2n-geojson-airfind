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