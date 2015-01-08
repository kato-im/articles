***

Who owns your private messages in Kato? If you're using Kato Teams (the free product), you do. If you're using Kato Enterprise, the enterprise does. Here's how it works:

## Kato Teams
A Kato Teams account belongs to the individual, and all [1:1 conversations](/articles/en/general/room-types) between two accounts belong to both account holders.

If this behavior is undesirable, a Kato Teams admin can disable 1:1 rooms between non-admins. This can be done from an organization's Policy settings: [https://app.kato.im/#/membership/_/policy/1-1](https://app.kato.im/#/membership/_/policy/1-1)

For example, Bob and Alice have a web consulting agency that uses Kato Teams for communication. When a client—Acme Corp—invites Bob and Alice into the Acme Corp Kato organization, Bob and Alice are now connected to each other via two teams: their own and Acme Corp's. This new connection has no effect on their private 1:1 room, which continues as before. When the contract with Acme Corp ends and Bob and Alice are removed from the Acme Corp organization, their 1:1 room remains intact. However, everything written by Bob and Alice in Acme Corp's **restricted or unrestricted rooms** belongs to Acme Corp.

If, at some point, Bob and Alice decide to disband their web consulting agency and delete their Kato organization, they will no longer be connected via Kato and each will disappear from the other's roster.

However, if Bob joins another company that uses Kato, and that company proceeds to bring on Alice as a consultant, Bob and Alice's 1-1 history will resume from where it ended when they deleted their agency's Kato organization.

Kato Teams identities are global, and each organization's purpose is to connect identities and to contain rooms.

## Kato Enterprise
Each Kato Enterprise is its own enclosed Kato universe (consisting of identities and organizations), where identities can only operate within the context of that universe. All 1:1 messages belong explicitly to the Enterprise, just like all corporate emails and documents.

## Edited messages
In Kato, you can edit a message only if:

1.  It is your _last_ message, and
2.  Less than 120 seconds has elapsed since the message was committed to the database

Only the last edit of a message is retained. Kato does not retain a change log, nor the fact that a message was edited at all. 

## Deleted messages
In Kato, you can't remove a message from the database. Admins can "delete" a message (although not in 1:1 rooms), but this simply hides the message from non-admins. The message is still there, and it can be _undeleted_.

True removal of messages is not part of Kato for two reasons:

1.  Removing a message from the database does not negate its existence. It might have been recorded elsewhere, on multiple clients.
2.  If a message is removed _after_ a database is backed up, the message is recoverable. This makes it impossible for us to claim true removal, given our current backup strategy.
