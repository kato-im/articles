***

В Kato существует возможность создания связок с внешними сервисами и без помощи инструментов вроде [IFTTT](/articles/ru/fun/ifttt-integration) и [Zapier](/articles/ru/power-users/integrations#zapier).

К примеру, с помощью HTTP POST API пользователи могут генерировать сообщения в комнату Kato, если произойдет какое-либо событие во внешнем сервисе (закончит свою работу скрипт и т.д.).

## <a href="#http-post-api" name="http-post-api">HTTP POST API&#8212;to Kato</a>
<br />
![clip.png](https://s3.amazonaws.com/kato-share/c14d5ddcded3988228d8e2449ff963ebb7bcab06eed6bdd3c50ec041ce878b8/clip.png)

Чтобы отправить сообщение в Kato необходимо создать запрос HTTP POST с объектом JSON следующего формата:

    {
      "from": "Имя",
      "color": "Красный",
      "renderer": "markdown",
      "text": "Сообщение"
    }

А URL должен содержать тип `application/json content:

`https://api.kato.im/rooms/`ROOM ID`/simple`

Все параметры сообщения, кроме `text` опциональны; в поле `color` может быть указан любой html-цвет; поле `renderer` может принимать значения `default`, `code` или `markdown`.

Интеграция HTTP POST представлена по ссылке: <a href="https://app.kato.im/#/integrations/http_post" target="_blank">https://app.kato.im/#/integrations/http_post</a>

## <a href="#webhooks-api" name="webhooks-api">Webhooks API&#8212; от Kato</a>
<br />
![clip.png](https://s3.amazonaws.com/kato-share/b1035cac108ae73dbba55c4be1218d34a8d25e64745746ab65096162e7d9390f/clip.png)

_В разработке_

<!--
Для каждой комнаты Kato могут быть сконфигурированы вызовы Webhook.

Webhooks can be configured for any Kato room. You can get started by navigating to this link: <a href="https://app.kato.im/#/integrations/webhooks" target="_blank">https://app.kato.im/#/integrations/webhooks</a>

After you configure Webhook URLs, when messages are typed into room (by a human, not a robot), HTTP POST requests are sent to each of the URLs. Your service has to expect a request with a JSON body that contains an array of one or more messages:

    [{
      "timestamp": <string: timestamp in ISO 8601 format>,
      "sequence": <number: monotonically increasing sequence>,
      "id": <string: message ID>,
      "to":
      {
        "id": <string: room ID>,
        "name": <string: room name>
      },
      "from":
      {
        "id": <string: author's account ID>,
        "email": <string: author's verified email address>,
        "name": <string: author's display name>
      },
      "renderer": <null or string: "markdown" or "code">,
      "text": <string: content of message>
    }, …]

Your service should respond with status code `200`. It can optionally include `Content-Type: application/json` and a response JSON body using this format:

    {
      "feedback_messages":
      [{
        "from": <string: display name of responding robot>,
        "text": <string: content of response message>
      }, …]
    }

The `from` field is optional. If it is not specified, `Webhook Feedback` is used.

Feedback messages using this format are posted to the room. **Note**: Feedback messages don't generate additional webhook requests, so you can't cause an infinite loop this way.

If your service responds with status code `410`, the webhook is deleted immediately. **Note**: If, after 3 attempts, the server fails to handle the POST request, or returns a status code other than `2xx`, the webhook is deleted, and a warning message from `Webhook Feedback` is posted to this room.

If you have any questions about the Kato API, please send us a note in your <a href="https://app.kato.im/#/rooms/support" target="_blank">Kato support room</a>.
-->
