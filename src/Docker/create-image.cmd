docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ehksperiment1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ehksperiment1/app ../..
