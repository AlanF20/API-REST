# Principios REST
> Alan Israel Flores Cabrera 19100179 ☝️🤓

## REST

REST (Representational state transfer) es una arquitectura para el diseño de APIs sobre el protocolo HTTP. La arquitectura del estilo REST principalmente define reglas, comportamiento y restricciones sobre el funcionamiento de una API. Mencionando que, todas las APIs que siguen esta arquitectura son conocidas o llamadas como “API RESTful”.

El surgimiento de REST fue el año 2000, descrito en la tesis de Roy Fielding, padre de la especificación HTTP.

## Principios de diseño REST
Según Roy Fielding la construcción y diseño de REST se basa en los siguientes principios descritos a continuación:

* Cliente-servidor: El cliente y el servidor deben estar completamente separados e independientes. La única forma de comunicación debe ser mediante solicitudes HTTP.
* Sin estado (stateless): La comunicación entre el cliente y el servidor debe ser sin estado, lo cual implica que no se almacenará ni se compartirá información entre peticiones. Toda petición es independiente y debe contener sólo la información necesaria para procesarla.
* Identificador único (URI): Todo recurso debe tener un identificador irrepetible, no puede existir dos o más recursos con el mismo identificador en la red y estos deben mantener una jerarquía lógica.
* Uso correcto de HTTP: REST debe respetar tanto los verbos y códigos de estado para cada operación (GET, POST, PUT, DELETE, PATCH, etc.).

## Restricciones REST

### ***Interfaz uniforme***
La primera restricción de la arquitectura REST que examinaremos es la restricción de interfaz uniforme. En un diseño RESTful, es útil conceptualizar y clasificar los servicios individuales como recursos de la aplicación que exponen su propia interfaz de cliente individual. Es importante que estos recursos sean lo suficientemente pequeños en términos de alcance y volumen de datos como para que una sola interfaz pueda manejarlos fácilmente. Finalmente, REST exige que los mecanismos de interfaz que utilizan estos recursos para exponer sus capacidades se comporten de manera coherente con cualquier otra interfaz que exponga los servicios relacionados.

### ***Modelo cliente-servidor***
Exige que el acoplamiento entre un recurso RESTful y las API asociadas solo exista en la interfaz del lado del cliente. Esos recursos pueden evolucionar libremente de forma independiente, pero la interfaz debe permanecer intacta.

Este acoplamiento flexible ayuda a reducir las relaciones de dependencia mal administradas que causan roturas y complican los procesos de actualización, lo cual es fundamental cuando los desarrolladores con frecuencia crean recursos y clientes de forma aislada. Esto también facilita que los equipos de software colaboren en el nivel en el que el desarrollo de back-end se encuentra con el diseño de front-end, ya que existe menos riesgo de que los desarrolladores realicen un cambio que rompa repentinamente o altere la funcionalidad de la interfaz.

### ***Sin estado (stateless)***
 El comportamiento sin estado es una característica particularmente crítica de las arquitecturas basadas en REST. La apatridia significa que los recursos de la aplicación de aprovisionamiento del servidor no almacenarán información entre solicitudes ni impondrán una secuencia de procesamiento requerida para las llamadas y solicitudes. La salida de cada solicitud debe priorizarse basándose únicamente en el contenido de la solicitud y la operación especificada, no en comportamientos pasados ​​con respecto a secuencias de eventos u órdenes de operaciones.

Esta propiedad es la clave para las propiedades de escalabilidad y resiliencia de los servicios, porque significa que cualquier instancia de un recurso cumple una solicitud de la misma manera, independientemente de los programas de procesamiento generales. Sin embargo, el diseño sin estado es complicado de lograr, especialmente cuando las solicitudes frecuentes contienen cantidades significativas de datos relacionados con el estado. La forma más sencilla de abordarlo, si es posible, es evitar almacenar datos internos entre solicitudes de recursos por completo, incluida la secuencia específica de llamadas y solicitudes.

### ***Almacenable en caché***
Esencialmente, una arquitectura se puede almacenar en caché si la respuesta de un servidor puede almacenarse en un repositorio intermedio e, idealmente, abstraído. Cuando sea necesario, este repositorio puede ofrecer esas respuestas almacenadas en caché para el punto de ubicación de reutilización y garantizar, al menos durante un período específico, que el comportamiento de esas respuestas no cambiará.

No es necesario que todo se pueda almacenar en caché para satisfacer esta restricción, pero se debe identificar cada respuesta que se pueda almacenar en caché de manera fácil y asequible. Además, la caché debe ser capaz de atender fácilmente nuevas solicitudes en cualquier momento en que pueda manejar de forma segura cargas de trabajo pesadas en lugar del servidor.

Si las respuestas del servidor y los recursos que entregan no están sujetos a actualizaciones programadas o cambios de funciones, es una práctica prudente incluir esa información en las respuestas del servidor al cliente. De esta manera, los sistemas de aplicaciones desesperados pueden recurrir de manera confiable a la caché en caso de que las respuestas se retrasen o el servidor falle.

### ***Modelo de sistema en capas***
Una aplicación debería poder definir recursos asignándolos a capas de funcionalidad, con cada capa correspondiente a una única capacidad de servicio compartido. En algunos casos, esas capacidades pueden ser algo simple, como actividades de equilibrio de carga. En otros casos, la capa puede albergar un proceso más complejo que requiere varios servidores y elementos de software, como el procesamiento de big data.

Como es el caso de la restricción de almacenamiento en caché discutida anteriormente, no es necesario segmentar cada servicio RESTful en su propia capa. En su lugar, simplemente concéntrese en poder soportar completamente el modelo en capas cuando sea necesario. Afortunadamente, la práctica de implementar un modelo basado en capas es relativamente sencilla, siempre que la arquitectura esté preparada para manejarlo.

### ***Código bajo demanda***
El código a pedido es la restricción final y la única que se considera una práctica opcional. El código a pedido dice que, al responder a las solicitudes, los recursos RESTful deben estar preparados para proporcionar código que se ejecute en el lado del cliente, en lugar del lado del servidor (o en algún punto intermedio). El código del lado del cliente permite distribuir el trabajo cuando la ejecución del lado del servidor puede causar fallas o problemas de rendimiento.

Poner en práctica código bajo demanda requiere conocer un poco las capacidades de ejecución de código que poseen los clientes que acceden a un recurso. Para hacer esto, el servidor debe identificar capacidades específicas del lado del cliente para garantizar que el código realmente se ejecute como se espera en ese extremo. Por lo general, esto se logra mediante el uso de un lenguaje de programación de propósito general que la mayoría de los componentes de la aplicación asociados admitirán y comprenderán durante un intercambio de código.