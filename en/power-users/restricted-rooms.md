***

This articles explains room access control in Kato.

You can invite outsiders to a specific—“restricted”—room within a team, and admins can create rooms that are only visible to certain members. Rooms visible to all members are called “unrestricted”.

This feature is totally optional. By default, all newly-created rooms are unrestricted and all invitations imply access to all unrestricted rooms.

### Use Case #1
You've scheduled an interview with Bob, a developer. The interview involves a bunch of theoretical questions and several coding exercises and you'd like the two of your remote developers to be involved in the process.

You create a room called "Interview with Bob" to which you invite Bob and both developers. At a specified time the interview begins, leaving behind a detailed log for future perusal. At the end of the interview Bob (optionally) gets kicked out of the room.

### Use Case #2
After raising Series A your company headcount increases to 23 and will grow past 50 by end of the year. You must hire James, the HR specialist. You need to provide a private communication channel between the founders, the COO, and James.

You create a room called "HR" to which you invite all concerned parties. From now on, you have a single, secure, searchable channel for discussing all HR issues.

### Creating Restricted Rooms

If you're an admin, when creating a room you can check  the "Restricted" option and select users who will have access to the room: 

![clip.png](https://s3.amazonaws.com/kato-share/5b5fb4b325ef5920c209f40fefcbc6dc79622613e0314148bc98f99c7730114/clip.png)

### Inviting Users To Restricted Rooms
When inviting users, it is now possible to select a set of rooms to which the new users will have access:

![clip.png](https://s3.amazonaws.com/kato-share/130484a68d83584df8f0d269a648ee0f14d1091cc12ac129419bcba455f695a/clip.png)

### Inviting Users To All Unrestricted Rooms
The special **[All Unrestricted Rooms]** selection will effectively invite people to be members of your team. You can specify any restricted rooms as well:

![clip.png](https://s3.amazonaws.com/kato-share/19886620805031b8d56e1e148474b24097762d3742a4e01ce65fc4fdb5939a30/clip.png)

If no rooms are specified, new users will only be able to talk to the admins in 1-1 mode.

### The Umbrella Icon

Restricted rooms get their own icon, an umbrella: ![clip.png](https://s3.amazonaws.com/kato-share/e00d5b0d88b2357867eaa1956bc7344624602bdc866ddab93471de9e5b4caa2f/clip.png)

### <a href="#access" name="access">Who Has Access?</a>
An admin can create a restricted room and grant others access. **The admin will have to grant herself access in order to see room history.**

Changes to restricted room access are reflected in [security audit log](/articles/en/power-users/security-audit-log/) (if it's enabled).

All members with access to a restricted room will appear at the top of the roster and have a maroon marker next to their name.

![clip.png](https://s3.amazonaws.com/kato-share/7a7e61188b15aafda81ca88a9d63210e4662cdd15040d5e1624cfa8610ab372/clip.png)

### Who Sees Whom?
All members with access to All Unestricted Rooms will see each other and can talk to each other in private 1-1s (unless 1-1s are disabled in team policy).

Users who only have access to a restricted room will see other users with explicit access to the same restricted room, as well as all admins.

Users who only have access to different restricted rooms will not be able to see each other.

# Changing Room Access
To change room access type from restricted to unrestricted and vice versa, open room settings and navigate to the **Access** tab.

An administrator's password is required to actually perform the change:

![clip.png](https://s3.amazonaws.com/kato-share/cc0631502f34a1f68797e9b74e60276b782edeba61481086f5caa49a42a92c7c/clip.png)

Word of **caution**: changing a restricted room to unrestricted will wipe out the access list for the room.

