# Commits IA

## Requisitos

- **Node:** v22.11.0 (recomendada)
- **LM Studio**
- **Modelo IA:** `phi-4-mini-instruct` (recomendado)

## Como empezar

Clonar repositorio

```bash
git clone https://github.com/DarkMalk/commits-ia.git
```

Ingresa a la carpeta del proyecto

```bash
cd commits-ia
```

Iniciar el proyecto

```bash
pnpm run start
```

Realizar build del proyecto

```bash
pnpm run build
```

**Nota:** Puedes cambiar según el manejador de paquetes que utilices (npm o yarn)

## Configuración

Para utilizar el proyecto debes generar un archivo llamado `config.json`, en las siguientes rutas.

En el caso de `macos` o `linux`.

```bash
cd $HOME/.config
```

```bash
mkdir commits-ia
cd commits-ia
```

```bash
touch config.json
```

Para el caso windows.

```bash
cd C:\Users\TuUsuario\AppData\Roaming
```

```bash
mkdir commits-ia
```

```bash
echo. > config.json
```

Para el archivo generado `config.json` debe tener las siguientes propiedades, las cuales corresponden a `model` y `server`.

```json
{
  "model": "phi-4-mini-instruct",
  "server": "http://localhost:1234/v1/chat/completions"
}
```

**NOTA:** El proyecto generara un archivo por defecto si tu no lo creas, pero dejara el campo del `modelo` vació y el `server` con la dirección de tu equipo local, por ende estará deshabilitado la generación del commit por IA hasta que lo configures en el archivo.
