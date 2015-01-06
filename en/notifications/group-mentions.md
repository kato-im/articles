![clip.png](https://in.kato.im/e9704ffb91e62ba3533cc2f9566a20be3b5fbbeaf017c5726a4485c262b56bf3/clip.png)

## In Short
If you [follow](/articles/en/notifications/noise-control) the **Development** room, and someone mentions **@Development** in any other room (or in **Development** room itself), you’ll get a ping (red counter, desktop and push notification, digest email).

If you need to get a designer’s attention, and you know that designers talk in **Design**, mention **@Design**.

The truth is, not all designers will want to follow the **Design** room, it may be too noisy to see a notification for every single message there. How can designers keep a **Design** room, or _multiple_ design rooms (per project, per platform, etc) and have group mentions at the same time? The solution is to create another room, say **Designers**, which is not used for posting messages at all. All the designers simply agree to follow this room, so whenever and wherever **@Designers** are mentioned, all the right people get an alert. Note that they don't get an alert in the **Desigers** room, but in the room where the mention is posted.

This is the beauty of the follow model: choose what you want to follow, and get alerted in some room where the topic you're following is mentioned, even if you ignore that room.

## The Full Story
#### The Join/Leave Model
Some of the most challenging aspects of designing a collaboration product revolve around noise management. The goal is to deliver information (a) at the right time and (b) with minimal obnoxia.

To address this requirement, most real-time collaboration products employ what we call the Join/Leave Model, which uses the metaphor of entering and leaving chat rooms as the basis for noise control. In this model, it’s common to see messages similar to these:

_Bob joined Kitchen_  
_Alice left Kitchen_

After Alice leaves, she will no longer be bothered with things happening in Kitchen.

Therefore, in theory, the set of all members who have joined a room defines a group of people who care about a particular topic. This makes it possible to alert the entire group to something important - this is called a “group mention”.

Mentioning is a common and necessary feature in collaboration. Say, if you need  Alice’s opinion on something in the Kitchen room, you can type “Check this out, @Alice” and she’ll get some sort of a ping (sound, desktop notification, email, or mobile push notification).

But what happens if Alice is not in the Kitchen room, because she left? First, you have to invite her back to the room, and only then can you mention her.

And how do you alert the entire team, or the entire company? You’d need a room that nobody can leave. How do you mention a group in a room that was not joined by all members of that group? Oh boy!

#### The Follow Model
After experimenting with the Join/Leave Model in the early version of Kato, we decided to try to avoid these dilemmas by building noise management without explicit room membership. ([Restricted rooms](/articles/en/general/cheatsheet#restricted-rooms) are an exception.)

All full members of a Kato organization are members of all rooms.  Noise is controlled by a mechanism we ended up calling the Follow Model: the ability to easily mark rooms as important, somewhat important, or irrelevant. It’s similar to following things on Twitter. The big difference from the Join/Leave model is that a mention of @Alice in a room that Alice ignores will still result in a notification.
