# WAT
5 min hack to test if you can sort keys in object alphabetically.
Apparently you can.

```js
{
  avatarImage: 'https://avatars.slack-edge.com/2017-08-11/224869234865_461ad2cf1c769a9566f8_192.gif',
  title: 'creadi.ch',
  channel: 'C6LM165KJ',
  event_ts: '1515681108.000069',
}
```

=> 
```js
{ 
  avatarImage: 'https://avatars.slack-edge.com/2017-08-11/224869234865_461ad2cf1c769a9566f8_192.gif',
  channel: 'C6LM165KJ',
  event_ts: '1515681108.000069',
  title: 'creadi.ch' 
}
```

# Installation

```bash
npm i -g object-stream-stort-keys
```

# Usage
1. Copy some js object
2. 
```bash
pbcopy | object-stream-sort-keys | pbpaste
```
3. Profit! 

# Test
```bash
npm test
```


# TODO
This is experimental

- [ ]
```js
const message = {
    attachments: [[Array]],
    client_msg_id: '2FE9',
    type: 'message',
    user: 'U2JJ80',
    text: 'translate Das Berliner Start-Up Fxxxr.de und der digitale Krankenversicherer XXXova haben sich auf eine Zusammenarbeit geeinigt. Beide Unternehmen sind noch relativ jung am Markt. Während Fairr seit Mitte 2014 Riester-Sparpläne online anbietet, ist der Münchener Versicherer erst seit Juni 2017 aktiv.',
    ts: '1523548934.000356',
  }
```
