# About
OpenAPI definition for Words application. Developed on SwaggerHub

# Generate client code from the definition
## Prerequisites
Install OpenJDK

Install Maven

Clone Codegen repo

```
git clone https://github.com/swagger-api/swagger-codegen
```
```
cd swagger-codegen
```

For OpenAPI v3 checkout to the [current stable version](https://github.com/swagger-api/swagger-codegen#compatibility) of swagger-codegen v3 (swagger-codegen v2 only supports OpenAPI v2):

```
git checkout tags/v3.0.14
```
Generate the Codegen files
```
mvn clean package
```

## Generate code
```
java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i ../swagger.json -l python-flask -o ../out/words-api-python-flask
```

More - [https://github.com/swagger-api/swagger-codegen](https://github.com/swagger-api/swagger-codegen)
