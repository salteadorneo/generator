# Data Generator

This is a simple data generator that generates random data for testing purposes.

## Usage

### GET [/api/v1/dni](https://generator.salteadorneo.dev/api/v1/dni)

- `quantity` (optional): The number to generate. Default is 1.

#### Response
```json
["12345678Z"]
```

## Endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | [/api/v1/dni](https://generator.salteadorneo.dev/api/v1/dni) | Generates a random DNI (Documento Nacional de Identidad) number. |
| GET | [/api/v1/nie](https://generator.salteadorneo.dev/api/v1/nie) | Generates a random NIE (Número de Identificación de Extranjero) number. |
| GET | [/api/v1/cif](https://generator.salteadorneo.dev/api/v1/cif) | Generates a random CIF (Código de Identificación Fiscal) number. |
| GET | [/api/v1/password](https://generator.salteadorneo.dev/api/v1/password) | Generates a random password. |

## Contributing

If you want to contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.