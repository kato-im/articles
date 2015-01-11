********************************************************************************
## <a href="#newlines" name="newlines">Перенос строки в сообщении</a>

Для того, чтобы вставить в сообщение пустую строку нужно нажать комбинацию клавиш **Shift+Return**:

![clip.png](https://in.kato.im/8e38ead5ac3d507555c45475b4aa160e4f460046f99fcacf7cf98b56d8c00c5/clip.png)

Кроме того, в Kato существуют и некоторые другие возможности [ форматирования сообщений ](#message-formatting).

********************************************************************************
## <a href="#presence" name="presence">Статус активности пользователя</a>

Понять, активен ли определенный пользователь Kato, можно с помощью иконки статуса:

<!-- with Kato Roll: ![clip.png](https://in.kato.im/c8500fc42995e6514c4f101dde876dd1d76da3d019586e423e69b57acbda4d3c/clip.png)-->
![clip.png](https://in.kato.im/7e0e5972d17c4e79e7217216f4e9574aabbaadb5ebc3407a99c47407e100ab3e/clip.png)

Помимо стандартных состояний («онлайн», «не в сети», «нет на месте») существуют и иконки статусов для ситуаций, когда пользователь работает в Kato с мобильного устройства или еще не ответил на приглашение присоединиться к беседе.

********************************************************************************
## <a href="#video-calling" name="video-calling">Видеозвонки и </a><a href="#screensharing" name="screensharing"> демонстрация экрана</a>

Администраторы конкретной организации в Kato могут активировать функцию совершения **видеозвонков**, которая включает в себя **голосовые вызовы** и возможность **демонстрации экрана**. Для этого необходимо активировать соответствующую в [настройках организации](https://app.kato.im/#/membership/) из меню **Kato Labs**.

В настоящий момент перечисленные возможности представляются в тестовом режиме. Видео- и голосовые звонки доступны пользователям браузеров Chrome, Firefox и Opera. Демонстрировать своим собеседникам экран могут пользователи Chrome и Firefox (необходима дополнительная настройка).

Более подробная информация о [видео- и голосовых звонках](video-calling), а также [демонстрации экрана](introducing-screensharing) представлено в соответствующих главах данного руководства.

*(Мессенджер Kato также интегрирован с [Google Hangouts](google-hangouts-integration) и [UberConference](uberconference-integration).)*

********************************************************************************
## <a href="#typos" name="typos">Редактирование сообщений и исправление опечаток</a>

Сообщения в Kato доступны для редактирования в течение **двух минут**. Для того, чтобы внести исправления в последнее сообщение необходимо кликнуть на окно ввода сообщения и нажать на клавиатуре стрелку вверх (клавиша **Up-Arrow**). 
Подробнее процесс редактирования сообщений описан в [соответствующей главе](edit-message) руководства.

********************************************************************************
## <a href="#message-cards" name="message-cards">Карточки сообщений</a>

При наведении курсора на сообщение, слева появится небольшая полоса, клик на которую открывает меню с **карточкой сообщения** (по аналогии с [карточкой пользователя](profile-cards) содержит информацию о сообщении).

![clip.png](https://in.kato.im/e766111232fe8e444c3a385f11b31cdd98e195314072f23c45013a497e568db/clip.png)

Эта карточка содержит информацию о времени отправки сообщения и несколько полезных команд — некоторые из них, к примеру, используются для [форматирования](#message-formatting). 

********************************************************************************
## <a href="#room-layout" name="room-layout">Шаблон комнат Kato</a>

Мессенджер Kato позволяет пользователям общаться с собеседниками (из одной или нескольких организаций) сразу в нескольких беседах или «комнатах» — и все это в одном окне.

Вот так выглядит работа в пяти комнатах Kato:

![clip.png](https://s3.amazonaws.com/kato-share/fb6e15f9d756954d2707fd9d030bb6b6cdc57017d68a9227ac2b0067479f1de/clip.png)

Новые комнаты открываются справа, а по необходимости закрываются с левой стороны экрана. Пользователи могут изменять количество отображаемых одновременно комнат в [меню настроек аккаунта](https://app.kato.im/#/account/options).

При превышении максимального числа открытых комнат, та из них, что расположена в левой части экрана, скрывается. 

Также в Kato существует возможность <a href="#pins" name="pins">«закрепления»</a>  комнаты, чтобы она всегда оставалось открытой.

Для того, чтобы сохранить текущее число открытых комнат при открытии новой, необходимо нажать клавишу `Alt` в двух перечисленных случаях:

- при клике на комнате в списке комнат («ростере»);
- при нажати клавиши Enter после клика на результатах поиска нужной комнаты в ростере.

********************************************************************************
## <a href="#pins" name="pins">Закрепление комнат</a>

Каждую комнату Kato можно «закрепить» с помощью специальной иконки: ![clip.png](https://s3.amazonaws.com/kato-share/983cb0ab8c5abbd84e8cef40be2e8b36e754001c27da1a04d01aebb41af6fb80/clip.png). Иконка «закрепленной» комнаты выглядит так: ![clip.png](https://s3.amazonaws.com/kato-share/86bb058f13991cc218aeeb5e0c1c875b08e8ea4867832586cb2768fb2f02d0d/clip.png).

Когда возникает необходимость автоматического закрытия комнаты (обычно в случае открытия новой, сверх установленного в настройках лимита), «закрепленные» комнаты закрываются в последнюю очередь.

На картинке ниже изображена ситуация, в которой комната "Dev" закреплена и останется открытой при добавлении новой комнаты. При этом комната под названием "UX" не закреплена и будет автоматически закрыта.

![clip.png](https://s3.amazonaws.com/kato-share/9a4d5decf3d88d1dc23e2b4228289015ea3414b1a62450c478536c13c02c1c/clip.png)

Важный момент: Если все открытые комнаты являются «закрепленными», то будут рассматриваться Kato в качестве обычных комнат (что выливается в том числе в их автоматической закрытие в случае возникновения подобной необходимости).

********************************************************************************
## <a href="#unrestricted-rooms" name="unrestricted-rooms">Публичные комнаты</a>

_Комнаты_ предназначены для постоянных групповых бесед с возможностью поиска по истории. Как правило комнатам присваиваются «говорящие» названия, помогающие с одного взгляда определить тему беседы, например **Design** или **Marketing**.

При [создании комнаты](https://app.kato.im/#/rooms/add) по умолчанию она будет доступна всем текущим и будущим членам конкретной организации Kato (поскольку в мессенджере отсутствует понятие «членства» в комнате). Такие комнаты называются _«публичными»_.

********************************************************************************
## <a href="#restricted-rooms" name="restricted-rooms">Приватные комнаты</a>

Комнаты, которые видны только конкретным членам организации Kato (или пользователям мессенджера, не входящим в эту организацию) называются _приватными_.

Для того, чтобы создать **приватную** комнату, необходимо установить соответствующий флаг в процессе [добавления новой комнаты](https://app.kato.im/#/rooms/add):

![clip.png](https://s3.amazonaws.com/kato-share/79ac31e7cf95ba981c61247ee1a240f0744bb7061c5496172841e6ad4f87419f/clip.png)

********************************************************************************
## <a href="#restricted-members" name="restricted-members">Участники с ограниченными правами</a>

Любой представитель организации, у которого нет доступа ко всем **публичным комнатам**, называется _участником с ограниченными правами_. Такие пользователи обладают доступом только к конкретным комнатам и могут видеть в своем контакт-листе только собеседников, которые также имеют доступ к этим комнатам.

Приватные комнаты хорошо подходят для обсуждения конфиденциальной информации (например, HR-вопросы или корпоративные финансы) и для работы с внешними партнерами — адвокатами, фрилансерами, инвесторами и т.д.

********************************************************************************
## <a href="#mentions" name="mentions">Упоминания</a>

По аналогии с сервисом микроблогов Twitter, в Kato реализована функциональность _«упоминаний»_ пользователей. Для того чтобы привлечь внимание нужного человека его можно упомянуть в ходе беседы в одной из комнат, использовав символ @:

![clip.png](https://s3.amazonaws.com/kato-share/c7bff9fce795b1534a26f80fe2f8922edca460cc556cc6228f719a8cc8a29330/clip.png)

Упомянутый таким образом пользователь получить оповещение об этом — в нужной комнате ему будет показана иконка, сигнализирующая о наличии непрочитанных сообщений, кроме того появятся всплывающее оповещение в десктоп-версии сервиса и push-уведомление в мобильном клиенте. Также на адрес электронной почты пользователя будет отправлено соответствующее письмо.

********************************************************************************
## <a href="#group-mentions" name="group-mentions">Упоминания групп</a>

Для того, чтобы привлечь внимание целой группы пользователей Kato, можно упомянуть комнату, на которую они подписаны. В таком случае, все пользователи, которые подписаны на нужную комнату, получат оповещение.

![clip.png](https://s3.amazonaws.com/kato-share/7946988e809cafe020ec78ee1148dcd48d76172b58872d35239867cfbd471d67/clip.png)

********************************************************************************
## <a href="#noise" name="noise">Контроль шума</a>

С помощью меню для контроля шума, пользователи Kato могут настраивать степень вовлеченности в то или иное обсуждение.

<img src="https://s3.amazonaws.com/kato-share/4a673be5e1c5e59a4363edf33c76ca2fb580e381565b51f628167e3c626ab4d8/clip.png" /> **Follow** — выбор этой опции означает, что пользователь бует получать оповещения обо всех непрочитанных сообщениях в данной комнате и видеть счетчик непрочитанных сообщений при открытии Kato (аналогичный механизм подписки реализован в Twitter).

<img src="https://s3.amazonaws.com/kato-share/662c1f1551b8fee88b8fa26d7244ac6a6c29852397ec3d0e93da63c5b245d11/clip.png" /> **Watch** — выбор этой опции приведет к тому, что пользователь не будет получать оповещения о сообщениях в данной комнате, но при открытии Kato будет видеть счетчик непрочитанных сообщений. Этот режим хорошо подходит для работы с комнатами, которые не требуют внимание время от времени.

<img src="https://s3.amazonaws.com/kato-share/5d58f5ead3667f997dacf0798d1df99ba6071839ff8c2f47eafcf125f19dec/clip.png" /> **Ignore** — данная функция позволяет игнорировать активность в определенной комнате (не отправляются оповещения и не показывается счетчик непрочитанных сообщений).

(Вышесказанное не относится к [комнатам типа 1:1](room-types) и [@упоминаниям](#mentions) — на них пользователи Kato подписаны всегда.)

Кроме того, пользователи могут осуществлять [настройку шума](https://app.kato.im/#/account/noise) на основании типа комнат. Администраторы организации Kato также могут устанавливать уровень шума по умолчанию для всей организации. Более подробная информация по теме представлена в разделе руковдства под названием [«Контроль шума»](noise-control).

********************************************************************************
## <a href="#email-notifications" name="email-notifications">Email Notifications and Replying by Email</a>

By default, unless you read or respond a message within a certain amount of time, you will get an email with a digest that includes the unread message. This is only true for messages in 1-1s and for [mentions](#mentions).

The digests can be turned off here: [https://app.kato.im/#/account/notifications](https://app.kato.im/#/account/notifications).

You can reply to a notification email&#8212;your reply will be posted back to the Kato room where the notification originated.

********************************************************************************
## <a href="#sound-notifications" name="sound-notifications">Sound Notifications</a>

You can enable audio notifications for private messages and mentions: 
[https://app.kato.im/#/account/notifications/audio-notifications](https://app.kato.im/#/account/notifications/audio-notifications).

********************************************************************************
## <a href="#file-sharing" name="file-sharing">Sending Files and Images</a>

Files can be shared in a number of ways:

#### Upload directly from local drive

![clip](https://s3.amazonaws.com/kato-share/d5bfad0d1f364b75daca0ad32b76fc5127502707f793efde0fe2725d5c801b5/clip.png)

The file will be upload to Amazon S3 and access URL will appear in message input.

#### Share Dropbox link

![clip](https://s3.amazonaws.com/kato-share/677c3df2bbb0c8cfa8aefd8789f50ded02f925ac70d4887cfe5696742929/clip.png)

Access URL to your Dropbox file will appear in message input.

#### Drag and drop files 

<a href="//fast.wistia.net/embed/iframe/5rssy2zfxj?popover=true" class="wistia-popover[height=360,playerColor=7b796a,width=640]"><img src="https://embed-ssl.wistia.com/deliveries/182d8ea6d834b3503ecdfac6c94cd70d298664ee.jpg?image_play_button=true&image_play_button_color=7b796ae0&image_crop_resized=300x169" alt="" /></a>
<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js"></script>

#### Copy and paste images (Google Chrome)

<a href="//fast.wistia.net/embed/iframe/sqqejekd2e?popover=true" class="wistia-popover[height=360,playerColor=7b796a,width=640]"><img src="https://embed-ssl.wistia.com/deliveries/ba7aa3b4610b4b789796f6d8d442b7e470d95b75.jpg?image_play_button=true&image_play_button_color=7b796ae0&image_crop_resized=300x169" alt="" /></a>
<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js"></script>

********************************************************************************
## <a href="#keyboard-control" name="keyboard-control">Keyboard Control</a>

Keyboard Control lets you keep your hands on the keyboard while you use Kato.

Keyboard Control is off by default. Before using it, you must turn it on in account options: [https://app.kato.im/#/account/options/keyboard-control](/#/account/options/keyboard-control)

Most commands are single characters entered in "command mode" (similar to [vi/vim](http://en.wikipedia.org/wiki/Vi)). To switch to command mode, press **Escape**. For a summary of commands, press **?** (question mark) or go to [https://app.kato.im/#/help/keyboard-control](https://app.kato.im/#/help/keyboard-control)

For more info, see [Keyboard Control](keyboard-control).

********************************************************************************
## <a href="#integrations" name="integrations">Integrations</a>

You can integrate Kato with dozens of tools and services (Zendesk, Shopify, GitHub, Wordpress, etc), as well as create your own custom integrations. For more info, see [Integrations](integrations).

<!--
********************************************************************************
## <a href="#room-search" name="room-search">Room Search</a>

********************************************************************************
## <a href="#global-search" name="global-search">Global Search</a>
-->

********************************************************************************
## <a href="#off-the-record" name="off-the-record">Going Off The Record</a>

While a room is "off the record" (OTR), messages posted to that room aren't stored on the server. This is handy for sending information that you don't want saved in Kato, like a password.

![clip](https://s3.amazonaws.com/kato-share/79845aedd80817ba34e98e95e785587fab250c855c922479c10a0cb1499d92c/Screenshot%20from%202014-07-06%2019%3A19%3A04.png)

![clip](https://s3.amazonaws.com/kato-share/440099dbe23a4b03e0efcb05c2a23f5dec19bfab9abdf0e14e71c8673af6aa20/clip.png)

Caveats:
<li>OTR messages *are visible* to anyone who has that room open at the time.</li>
<li>Once a user closes a room or reloads the web page, any OTR messages in that room are lost to that user.</li>
<li>OTR isn't as secure as peer-to-peer encryption. Don't use it for extremely sensitive information.</li>
<li>Uploaded files are stored separately from messages. So a file uploaded while a room is OTR remains accessible via its URL, even though the URL itself might no longer be visible in the message history.</li>

<!--
********************************************************************************
## <a href="#people-colors" name="people-colors">People Colors</a>
-->

********************************************************************************
## <a href="#multiple-orgs" name="multiple-orgs">Working In Multiple Kato Organizations</a>

In Kato, you can interact with rooms and people from different organizations at the same time.

In this case, the user is a member of two organizations: **Hunter Inc.** and **andrei's team**. 

In the image on the left, only **Hunter Inc.** is expanded. The right image shows both organizations expanded&#8212;this means a union of people and rooms from both organizations appear in the roster.

![clip](https://s3.amazonaws.com/kato-share/da0c1134fdd7fd68a89d87a8155b226bad5ebb31c4c0e93b5cb48625ad7c8/Untitled%20drawing%20%282%29.png)

In the "multi-org" view each room gets an organization "affinity token"&#8212;something you can use to identify the parent organization. In the image above, each organization has a **PR** room, but the affinity tokens provide a way to distinguish the two.

Note that you can be connected to the same person via multiple organizations. This is why people don't have explicit organization affinity.

In the scenario above, **Peter** is a members of both organizations.

To verify this, click on **More** in 1-1 room options:

![clip.png](https://s3.amazonaws.com/kato-share/1143494c2ff1d4e0621793886dfb00df534c9b67a4e7ef53dec5446c863854/clip.png)

See the list of connecting organizations:

![clip](https://s3.amazonaws.com/kato-share/5b6076cd59df16b4fff9d2d825670766466dfc6ff142c6233cdd26dc2ccb7be/Untitled%20drawing%20%283%29.png)

<!--
********************************************************************************
## <a href="#kato-roll" name="kato-roll">Kato Roll</a>

If you turn on Kato Roll, you'll see a picture of everyone else who has it turned on, taken every 60 seconds. (If they're not there, you'll see a picture of their chair.)

To turn it on, click on the ![clip.png](https://s3.amazonaws.com/kato-share/fe6528baa1d3625d1ce1bf1e85607aca316d68a91a7d4295c2255a27da670f8e/clip.png) button in upper right-hand corner:

![clip](https://s3.amazonaws.com/kato-share/f09962a8b702276f28d7d42e4d7efd1c5a21082c631ca8d46abd8390f83f554c/Untitled%20drawing%20%288%29.png)

For more info, see [Introducing Kato Roll](https://kato.im/articles/introducing-kato-roll/).
-->

<!--
********************************************************************************
## <a href="#http-post-api" name="http-post-api">HTTP POST API</a>
-->

<!--
********************************************************************************
## <a href="#deleting-messages" name="deleting-messages">"Deleting" Messages</a>
-->

********************************************************************************
## <a href="#message-formatting" name="message-formatting">Message Formatting</a>
### <a href="#markdown" name="markdown">Markdown</a>

Markdown is a simple way to add formatting to messages. For more info, see [Markdown Syntax](https://kato.im/articles/markdown-syntax/).

To enter a message in markdown mode, choose **Markdown** from message options:

![https://s3.amazonaws.com/kato-share/6b884e72b57fc5801c1a2dc0e753329f52b25a0d6528b7c376d0b15770faa4c/clip.png](https://s3.amazonaws.com/kato-share/6b884e72b57fc5801c1a2dc0e753329f52b25a0d6528b7c376d0b15770faa4c/clip.png)

To use markdown by default, enable the option in your account settings: [https://app.kato.im/#/account/options/markdown-default](https://app.kato.im/#/account/options/markdown-default).

Example:

![clip](https://s3.amazonaws.com/kato-share/6e971a68ff3fd49e4eb423b355fcc5b77f115764ad0a0ad2a4143101e7ddc33/clip.png)

********************************************************************************
### <a href="#code" name="code">Code Formatting</a>

To paste code and preserve formatting and syntax highlighting, you can choose the **Code** option in message options:

![clip](https://s3.amazonaws.com/kato-share/8eb25a9cb5dfee4fea486183effd35295b2f14d3d8b958888685db8717d22c4f/Screenshot%20from%202014-07-06%2019%3A49%3A44.png)

![clip.png](https://s3.amazonaws.com/kato-share/f3d5afe8950adee082c6cd1aa0943d6388a514eaf105b9fc771321419a0fde3/clip.png)

********************************************************************************
### <a href="#account" name="account">My Account</a>

Your account settings are accessed at the top right:

![clip.png](https://in.kato.im/1e9e31d7ac64f0a0166dcdbdea5e3a41e5dee8b8ec76145492cd19bbbc9bc92b/clip.png)

You can update your credentials, adjust notifications, and control many other aspects of your Kato experience.
