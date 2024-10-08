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

| Method | Endpoint | Description | Parameters |
| --- | --- | --- | --- |
| GET | [/api/v1/dni](https://generator.salteadorneo.dev/api/v1/dni) | Generates a random DNI (Documento Nacional de Identidad) number. | `quantity` |
| GET | [/api/v1/nie](https://generator.salteadorneo.dev/api/v1/nie) | Generates a random NIE (Número de Identificación de Extranjero) number. | `quantity` |
| GET | [/api/v1/cif](https://generator.salteadorneo.dev/api/v1/cif) | Generates a random CIF (Código de Identificación Fiscal) number. | `quantity` |
| GET | [/api/v1/password](https://generator.salteadorneo.dev/api/v1/password) | Generates a random password. | `quantity` `length` |
| GET | [/api/v1/plate](https://generator.salteadorneo.dev/api/v1/plate) | Generates a random plate. | `quantity` |

## Parameters

- `quantity` (optional): The number to generate. Default is 1.
- `length` (optional): The length of the password. Default is 16.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you want to contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.