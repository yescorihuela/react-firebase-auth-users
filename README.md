# ¿Cómo fue diseñado este frontend?

En este frontend, basa su funcionamiento en la librería react en conjunto con redux, esto para el manejo de estados. Así mismo se incorpora la tecnología de Firebase como mecanismo de autenticación, posteriormente ese token se envía con la petición de usuarios en su cabecera (Authorization: ey...). Si ese usuario aunque esté en Firebase, no se encuentra en la base de datos del backend, su petición será rechazada (HTTP 401)

Las tecnologías utilizadas:

- React 16.13.1
- Redux 4.0.5
- Antd 4.2.4 para la interfaz gráfica
- Google Firebase
- Docker y docker-compose

---

```bash
git clone https://github.com/yescorihuela/react-firebase-auth-users.git
```

Posterior al clonado de repositorio, deberá entrar al directorio del repositorio descargado:

```bash
cd react-firebase-auth-users
```

Luego deberá ejecutar el siguiente comando `docker`:

```bash
docker-compose up --build
```

### Para interactuar

http://54.243.61.19:3001/

usuario: test@gmail.com
password: 123456

___

# ¿Qué faltó?
En este apartado se hacen mención a requerimientos que no fueron satisfechos, la razón es darle mayor transparencia al proceso llevado a cabo.

- Testing de componentes, a pesar de que están instaladas las librerías jest, enzyme y moxios para las simular las peticiones.
- Mensajes de error al usuario sobre peticiones denegadas y/o usuarios inválidos.
- El diseño responsive
