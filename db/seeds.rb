Song.delete_all
Artist.delete_all
Album.delete_all
User.delete_all
Annotation.delete_all

User.create!(
  username: "Guest",
  password: "Password",
)

User.create!(
  username: "Ezalor",
  password: "Password",
)

User.create!(
  username: "Banehallow",
  password: "Password",
)

User.create!(
  username: "Rattletrap",
  password: "Password",
)

User.create!(
  username: "Rizzrack",
  password: "Password",
)

Artist.create!(
  name: "The Eagles"
)

Artist.create!(
  name: "Thirty Seconds To Mars"
)

Artist.create!(
  name: "Zedd"
)

Artist.create!(
  name: "Periphery"
)

Artist.create!(
  name: "Green Day"
)

Artist.create!(
  name: "Muse"
)

Artist.create!(
  name: "Drake"
)

Artist.create!(
  name: "38 Special"
)

Artist.create!(
  name: "Skillet"
)

Artist.create!(
  name: "Pink Floyd"
)

Artist.create!(
  name: "Radiohead"
)

Album.create!(
  name: "Hotel California",
  artist_id: Artist.find_by_name("The Eagles").id
)

Album.create!(
  name: "This Is War",
  artist_id: Artist.find_by_name("Thirty Seconds To Mars").id
)

Album.create!(
  name: "True Colors",
  artist_id: Artist.find_by_name("Zedd").id
)

Album.create!(
  name: "21st Century Breakdown",
  artist_id: Artist.find_by_name("Green Day").id
)

Album.create!(
  name: "The Resistance",
  artist_id: Artist.find_by_name("Muse").id
)

Album.create!(
  name: "Views",
  artist_id: Artist.find_by_name("Drake").id
)

Album.create!(
  name: "Tour de Force",
  artist_id: Artist.find_by_name("38 Special").id
)

Album.create!(
  name: "Periphery III: Select Difficulty",
  artist_id: Artist.find_by_name("Periphery").id
)

Album.create!(
  name: "Absolution",
  artist_id: Artist.find_by_name("Muse").id
)

Album.create!(
  name: "Unleashed",
  artist_id: Artist.find_by_name("Skillet").id
)

Album.create!(
  name: "The Wall",
  artist_id: Artist.find_by_name("Pink Floyd").id
)

Album.create!(
  name: "OK Computer",
  artist_id: Artist.find_by_name("Radiohead").id
)

Song.create!(
  title: "Hotel California",
  lyrics:
"On a dark desert highway, cool wind in my hair
Warm smell of colitas, rising up through the air
Up ahead in the distance, I saw a shimmering light
My head grew heavy and my sight grew dim
I had to stop for the night

There she stood in the doorway
I heard the mission bell
And I was thinking to myself
'This could be heaven or this could be Hell'
Then she lit up a candle and she showed me the way
There were voices down the corridor,
I thought I heard them say

Welcome to the Hotel California
Such a lovely place (such a lovely place)
Such a lovely face
Plenty of room at the Hotel California
Any time of year (any time of year) you can find it here

Her mind is Tiffany-twisted, she got the Mercedes Benz
She got a lot of pretty, pretty boys, that she calls friends
How they dance in the courtyard, sweet summer sweat
Some dance to remember, some dance to forget

So I called up the Captain
Please bring me my wine'
He said, 'we haven't had that spirit here since nineteen sixty-nine'
And still those voices are calling from far away
Wake you up in the middle of the night
Just to hear them say

Welcome to the Hotel California
Such a lovely place (such a lovely place)
Such a lovely face
They livin' it up at the Hotel California
What a nice surprise (what a nice surprise), bring your alibis

Mirrors on the ceiling,
The pink champagne on ice
And she said, we are all just prisoners here, of our own device
And in the master's chambers
They gathered for the feast
They stab it with their steely knives
But they just can't kill the beast

Last thing I remember, I was
Running for the door
I had to find the passage back to the place I was before
Relax, said the night man
We are programmed to receive
You can check out any time you like
But you can never leave!",
  year: 1976,
  user_id: User.find_by_username("Rizzrack").id,
  album_id: Album.find_by_name("Hotel California").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/h_300,w_300/v1473129106/e8kpvshu0bl9eeyipkby.jpg",
)

Song.create!(
  title: "This Is War",
  lyrics:
"A warning to the people,
The good and the evil,
This is war.

To the soldier, the civilian,
The martyr, the victim,
This is war.

It's the moment of truth, and the moment to lie,
The moment to live and the moment to die,
The moment to fight, the moment to fight
To fight, to fight, to fight!

To the right, To the left
We will fight to the death!
To the edge of the earth
It's a brave new world
From the last to the first

To the right, To the left
We will fight to the death!
To the edge of the earth
It's a brave new world
It's a brave new world!

A warning to the prophet,
The liar, the honest,
This is war.

To the leader, the pariah,
The victor, the messiah,
This is war.

It's the moment of truth, and the moment to lie,
The moment to live and the moment to die,
The moment to fight, the moment to fight,
To fight, to fight, to fight!

To the right, To the left
We will fight to the death!
To the edge of the earth
It's a brave new world
From the last to the first

To the right, To the left
We will fight to the death!
To the edge of the earth
It's a brave new world
It's a brave new world
It's a brave new world!

I do believe in the light
Raise your hands into the sky
The fight is done, the war is won
Lift your hands toward the sun
Toward the sun
Toward the sun
Toward the sun
The war is won

To the right, To the left
We will fight to the death!
To the edge of the earth
It's a brave new world
From the last to the first

To the right, To the left
We will fight to the death!
To the edge of the earth
It's a brave new world
It's a brave new world
It's a brave new world!

A brave new world
The war is won
The war is won
A brave new world",
  year: 2009,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("This Is War").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/v1470936279/This_Is_War_cpdrck.jpg"
)

Song.create!(
  title: "True Colors",
  lyrics:
"Stars fall at my feet, keep me grounded as I reach
Higher than I see, is there something there for me?
Pulling back the reins, letting go again
I'm not afraid, I'm not

All my life, one page at a time
I'll show you my, my true colors
And no-n-no, I won't apologize for the fire in my eyes
Let me show you my, my true colors, it ain't no rainbow

A promise with a lie is broken by design
And what I thought I knew has been swallowed by the truth
It's time to light the flame, right before it rains
I'm not afraid, I'm not

All my life, one page at a time
I'll show you my, my true colors
And no-n-no, I won't apologize for the fire in my eyes
Let me show you my, my true colors, it ain't no rainbow

Something tells me I know nothing at all
I've escaped my capture and I have no master
And somehow it's like I've waited

All my life, one page at a time
I'll show you my, my true colors
And no-n-no, I won't apologize for the fire in my eyes
Let me show you my, my true colors, it ain't no rainbow
It ain't no rainbow, it ain't no rainbow
It ain't no rainbow",
  year: 2015,
  user_id: User.find_by_username("Ezalor").id,
  album_id: Album.find_by_name("True Colors").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/h_300,w_300/v1473241553/v7pmsjrwreinppllt89y.png"
)

Song.create!(
  title: "21 Guns",
  lyrics:
"Do you know what's worth fighting for
When it's not worth dying for?
Does it take your breath away
And you feel yourself suffocating
Does the pain weigh out the pride?
And you look for a place to hide
Did someone break your heart inside
You're in ruins

One, 21 Guns
Lay down your arms
Give up the fight
One, 21 Guns
Throw up your arms into the sky
You and I...

When you're at the end of the road
And you lost all sense of control
And your thoughts have taken their toll
When your mind breaks the spirit of your soul
Your faith walks on broken glass
And the hangover doesn't pass
Nothing's ever built to last
You're in ruins

One, 21 Guns
Lay down your arms
Give up the fight
One, 21 Guns
Throw up your arms into the sky
You and I...

Did you try to live on your own
When you burned down the house and home
Did you stand too close to the fire?
Like a liar looking for forgiveness from a stone

When it's time to live and let die
And you can't get another try
Something inside this heart has died
You're in ruins

One, 21 Guns
Lay down your arms
Give up the fight
One, 21 Guns
Throw up your arms into the sky
One, 21 Guns
Lay down your arms
Give up the fight
One, 21 Guns
Throw up your arms into the sky

You and I",
  year: 2009,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("21st Century Breakdown").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_300/v1470943775/21st_Century_Breakdown_m5wgzf.jpg"
)

Song.create!(
  title: "Resistance",
  lyrics:
"Is our secret safe tonight?
And are we out of sight?
Or will our world come tumbling down?

Will they find our hiding place?
Is this our last embrace?
Or will the walls start caving in?

But it should've been right
(It could be wrong, could be wrong)
Let our hearts ignite
(It could be wrong, could be wrong)
Are we digging a hole?
(It could be wrong, could be wrong)
This is outta control

It could never last
(It could be wrong, could be wrong)
Must erase it fast
(It could be wrong, could be wrong)
But it could've been right
(It could be wrong, could be)

Love is our resistance
They keep us apart and they won't stop breaking us down
And hold me, our lips must always be sealed

If we live our life in fear
I'll wait a thousand years
Just to see you smile again

Quell your prayers for love and peace
You'll wake the thought police
We can hide the truth inside

But it should've been right
(It could be wrong, could be wrong)
Let our hearts ignite
(It could be wrong, could be wrong)
Are we digging a hole?
(It could be wrong, could be wrong)
This is outta control

It could never last
(It could be wrong, could be wrong)
Must erase it fast
(It could be wrong, could be wrong)
But it could've been right
(It could be wrong, could be)

Love is our resistance!
They keep us apart and won't stop breaking us down
And hold me, our lips must always be sealed

The night has reached its end
We can't pretend
We must run
We must run
It's time to run

Take us away from here
Protect us from further harm
Resistance!",
  year: 2009,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("The Resistance").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,h_300,w_300/v1470943775/The_Resistance_zugsht.jpg"
)

Song.create!(
  title: "Marigold",
  lyrics:
"Latch to this life like a death grip,
We're satisfied
With the mundane I'm keeping out of sight,
But still we are young
We are young

I'll steer the angels down
Keep him in the back room, shut the door
Let go

And now he's there at the grave, cold, dead paralyzed
Pushing daisies while we still feel the sunshine

We are young
We are young

Sift through the marigolds to please our damaged souls

This place is haunting me
Jump through the rope let's make it credible
When blood is all we see,
Life is impossible

Death is coming 'round like a hurricane swirling
We're on the clock and the needle's turning
The misery's killing me slowly
Give me a spine to work it out

I'm just another one wandering endlessly on to the grave

The signs of the times are upon us
So we're pitting for tomorrow
Sucking on the mother's dead tit
Of sorrow
Sorrow
It's all right
We learn it all before we go
Snapped by the neck as we swallow
Chin up
I'm tying the rope
Leaving all hollow

This place is haunting me
Jump through the rope let's make it credible
When blood is all we see,
Life is impossible

Death is coming 'round like a hurricane swirling
We're on the clock and the needle's turning fast
The misery's killing me slowly
Give me a spine to work it out
No funeral No pyre that's burning
This body's dust in the wind that's hurling past
The misery's killing me slowly
Give me a spine to work it out

I guess I will just leave things the way they are

This place is haunting me
Jump through the rope let's make it credible
When blood is all we see
Life is impossible

(Death is coming 'round like a hurricane swirling
We're on the clock and the needle's turning
The misery's killing me slowly
Give me a spine to work it out)

Death is coming 'round like a hurricane swirling
We're on the clock and the needle's turning fast
The misery's killing me slowly
Give me a spine to work it out
No funeral No pyre that's burning
This body's dust in the wind that's hurling past
The misery's killing me slowly
Give me a spine to work it out",
  year: 2016,
  user_id: User.find_by_username("Banehallow").id,
  album_id: Album.find_by_name("Periphery III: Select Difficulty").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_300/v1473612447/periphery-iii-select-difficulty-cover_u9c9ad.jpg"
)

Song.create!(
  title: "Hysteria",
  lyrics:
"It's bugging me
Grating me
And twisting me around

Yeah I'm endlessly
Caving in
And turning inside out

'Cause I want it now
I want it now
Give me your heart and your soul
And I'm breaking out
I'm breaking out
Last chance to lose control

Yeah it's holding me
Morphing me
And forcing me to strive

To be endlessly
Caving in
And dreaming I'm alive

'Cause I want it now
I want it now
Give me your heart and your soul
I'm not breaking down
I'm breaking out
Lace chance to lose control

And I want you now
I want you now
I feel my heart implode
And I'm breaking out
Escaping now
Feeling my faith erode",
  year: 2003,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("Absolution").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/v1470943776/Absolution_hb9ab9.jpg"
)

Song.create!(
  title: "Hotline Bling",
  lyrics:
"You used to call me on my
You used to, you used to
Yeah

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city,
You got a reputation for yourself now
Everybody knows and I feel left out
Girl you got me down, you got me stressed out
'Cause ever since I left the city,
you started wearing less and goin' out more
Glasses of champagne out on the dance floor
Hangin' with some girls I've never seen before

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city, you, you, you
You and me we just don't get along
You make me feel like I did you wrong
Going places where you don't belong
Ever since I left the city,
you, you got exactly what you asked for
Running out of pages in your passport
Hanging with some girls I've never seen before

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

These days, all I do is
Wonder if you bendin' over backwards for someone else
Wonder if you're rollin' up a backwoods for someone else
Doing things I taught you, gettin' nasty for someone else
You don't need no one else
You don't need nobody else, no
Why you never alone
Why you always touching road
Used to always stay at home, be a good girl
You was in a zone, yeah
You should just be yourself
Right now, you're someone else

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city",
  year: 2015,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("Views").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_300/v1470943775/Views_jovspk.jpg"
)

Song.create!(
  title: "If I'd Been The One",
  lyrics:
"I've been lost inside
Empty space in my heart
And some things never change, oh

How it hurts me and
How it's tearin' me apart
And it just goes on and on

Can you read my mind
Take a good look at my face
Could you take the time
Just to stand here in my place

What if I'd been the one
To say goodbye, goodbye
Could you smile when inside
You just wanna cry, look inside
Can you read my mind, oh, whoa

When I hear your name
Feel so cold deep inside
Still it's hard to explain, oh

What your love meant to me
They say time will heal the pain
But it just goes on forever

Can you read my mind?
Have you closed the door on love
Can you be so blind?
Did you think I'd just give up?

What if I'd been the one
To say goodbye, goodbye
Could you smile when inside
You just wanna cry, wanna cry

What if I'd been the one
To say goodbye, goodbye
Could you smile when
It hurts so deep inside
And it never fades away
Fade away

Time can't erase the reasons why
Count my mistakes and the heartaches
Since you said goodbye

What if I'd been the one
To say goodbye, goodbye
Could you smile when inside
You just wanna cry, wanna cry

What if I'd been the one
To say goodbye, goodbye
Could you smile when
To hurts so deep inside
And it never fades away

Never fades away
No, it don't fade away",
  year: 1984,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("Tour de Force").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_300/v1470943775/Tour_De_Force_ceqmzj.jpg"
)

Song.create!(
  title: "Back From The Dead",
  lyrics:
"B-b-b-b-b-back-back-back,
B-b-b-b-b-back-back-back.

Broke and blind,
Inside this coffin.
Cause you all try to keep me down.

How it feels,
To be forgotten.
But you'll never forget me now.

Air, beneath, crawling up my eyes.
I scratch, and bleed, just to stay alive, yeah.
The zombies call my lie,
They'll never catch me,
They'll never catch me!

B-b-b-b-b-back-back-back,
B-b-b-b-b-back-back-back.

Light it up, light up, now I'm burning!
Feel the rush, feel the rush of adrenaline!
We are young! We are strong! We will rise!
Cause I'm back, back, back from the dead tonight!

To the floor, to the floor, hit the red line!
Fly it high, fly it high, at the speed of light!
Full of life! Full of light! Full of fight!
Cause I'm back, back, back from the dead tonight!

Break the skin, spread like poison.
Die slowly to your attack.
How it feels to be the broken.
You took a piece now I'm biting back!

Air, beneath, crawling up my eyes.
I scratch, and bleed, just to stay alive, yeah.
The zombies call my lie,
They'll never catch me.
They'll never catch me!

B-b-b-b-b-back-back-back,
B-b-b-b-b-back-back-back.

Light it up, light up, now I'm burning!
Feel the rush, feel the rush of adrenaline!
We are young! We are strong! We will rise!
Cause I'm back, back, back from the dead tonight!

To the floor, to the floor, hit the red line!
Fly it high, fly it high, at the speed of light!
Full of life! Full of light! Full of fight!
Cause I'm back, back, back from the dead tonight!

Put down for the count, don't you dare count me out.
Never break, never bow, never beg, not a doubt.
The zombies call my lie,
They'll never catch me.
They'll never catch me!

B-b-b-b-b-back-back-back,
B-b-b-b-b-back-back-back.
B-b-b-b-b-back-back-back,
B-b-b-b-b-back-back-back.

Light it up, light up, now I'm burning!
Feel the rush, feel the rush of adrenaline!
We are young! We are strong! We will rise!
Cause I'm back, back, back from the dead tonight!

To the floor, to the floor, hit the red line.
Fly it high, fly it high, at the speed of light!
Full of life! Full of light! Full of fight!
Cause I'm back, back, back from the dead tonight!

From the dead tonight.
The dead tonight.
Back from the dead tonight.
The dead tonight.
Back from the dead tonight!",
  year: 2016,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("Unleashed").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_300/v1470944229/Unleashed_yflyyp.jpg"
)

Song.create!(
  title: "Comfortably Numb",
  lyrics:
"Hello,
Is there anybody in there?
Just nod if you can hear me.
Is there anyone at home?

Come on now
I hear you're feeling down
Well, I can ease your pain
And get you on your feet again

Relax
I'll need some information first
Just the basic facts
Can you show me where it hurts?

There is no pain, you are receding
A distant ship smoke on the horizon
You are only coming through in waves
Your lips move but I can't hear what you're saying
When I was a child I had a fever
My hands felt just like two balloons
Now I've got that feeling once again
I can't explain, you would not understand
This is not how I am
I have become comfortably numb

I have become comfortably numb

O.K.
Just a little pin prick
There'll be no more aaaaaaaah!
But you may feel a little sick

Can you stand up?
I do believe it's working, good
That'll keep you going through the show
Come on, it's time to go.

There is no pain you are receding
A distant ship smoke on the horizon
You are only coming through in waves
Your lips move but I can't hear what you're saying
When I was a child
I caught a fleeting glimpse
Out of the corner of my eye
I turned to look but it was gone
I cannot put my finger on it now
The child is grown
The dream is gone
I have become comfortably numb.",
    year: 1979,
    user_id: User.find_by_username("Guest").id,
    album_id: Album.find_by_name("The Wall").id,
    image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/v1470943775/The_Wall_lhy7is.jpg"
)

Song.create!(
  title: "Karma Police",
  lyrics:
"Karma police
Arrest this man
He talks in maths
He buzzes like a fridge
He's like a detuned radio

Karma police
Arrest this girl
Her Hitler hairdo
Is making me feel ill
And we have crashed her party

This is what you'll get
This is what you'll get
This is what you'll get
When you mess with us

Karma police
I've given all I can
It's not enough
I've given all I can
But we're still on the payroll

This is what you'll get
This is what you'll get
This is what you'll get
When you mess with us

For a minute there
I lost myself, I lost myself
Phew, for a minute there
I lost myself, I lost myself

For a minute there
I lost myself, I lost myself
Phew, for a minute there
I lost myself, I lost myself",
  year: 1997,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("OK Computer").id,
  image_url: "http://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_300/v1470943775/OK_Computer_uimwur.jpg"
)

Annotation.create!(
  body: "Anything can happen in war, but no matter what, you have to always keep on fighting and persevere. Wars test people’s character. The stronger survives while the weaker falls, and usually the good guys always fall victim to the bad guys.\n\nNotice the juxtaposition of oxymorons here:\n\ntruth and lie\nlive and die",
  start_idx: 130,
  end_idx: 291,
  user_id: User.find_by_username("Rizzrack").id,
  song_id: Song.find_by_title("This Is War").id
)

Annotation.create!(
  body: "Before his rise to fame, Drake was just an average guy living in the suburban part of Toronto. Back then he had a girl that adored him, but his stardom slowly tarnished their relationship as she no longer gives him any attention.\n\nThis girl is most likely his former Canadian flame Nebby whom he has mentioned in songs such as “Look What You’ve Done” and “Best I Ever Had.” Regardless of what she needed, Drake would drop everything when she’d call, especially if it was at night.\n\nDrake stops and starts in the intro, perhaps choking up with sadness at the loss he’s experiencing. Also, in the third line of the chorus, Drake omits the “you used to…” anacrusis, turning the nostalgic, regretful tone into a more demanding one, with an imperative.",
  start_idx: 0,
  end_idx: 184,
  user_id: User.find_by_username("Rattletrap").id,
  song_id: Song.find_by_title("Hotline Bling").id
)

Annotation.create!(
  body: "That's a really bad stutter!",
  start_idx: 0,
  end_idx: 51,
  user_id: User.find_by_username("Ezalor").id,
  song_id: Song.find_by_title("Back From The Dead").id
)

Annotation.create!(
  body: "Despite its laid back attitude, the song, and this particular phrase has a sneering, almost violent aggression. After calling out for the arrest of the “man” and “girl” in the first two verses, Yorke then taunts them, uttering the karmic phrase, “this is what you get.”",
  start_idx: 199,
  end_idx: 292,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Karma Police").id
)

Annotation.create!(
  body: "Once that obsession has fully taken root, we can sometimes lose touch with reality and the things that matter most. We then become empty, emotionless husks, merely shadows of our former selves.",
  start_idx: 239,
  end_idx: 346,
  user_id: User.find_by_username("Rattletrap").id,
  song_id: Song.find_by_title("Hysteria").id
)

Annotation.create!(
  body: "Pink is completely out of it- he is drugged, enclosed inside himself and unable to function. He is needed to play the show, and the doctors are trying to get some sort of response out of his blank state.\n\n‘Nod’ is a reference to dozing off when high on opiates (morphine, heroin, oxycodone etc).",
  start_idx: 0,
  end_idx: 87,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Comfortably Numb").id
)

Annotation.create!(
  body: "A 21 gun salute is primarily used in military ceremonies as a way of honoring those who have fallen. This chorus assures that while there is a time for fighting, there is also a time for surrender and its better to make peace than to continue strife. “Lay down your arms” refers to lowering a weapon.",
  start_idx: 254,
  end_idx: 303,
  user_id: User.find_by_username("Banehallow").id,
  song_id: Song.find_by_title("21 Guns").id
)

Annotation.create!(
  body: "This is a reference to one of Bellamy’s favourite books, “1984” by George Orwell. 1984 contains a secret police known as ‘the thought police’ whose job was to prevent ‘thinkcrime’, more commonly ‘thoughtcrime’, which was simply any thought or action the totalitarian English Socialism, more commonly ‘Ingsoc’, Party did not approve of, such of love or political interest. Orwell described your only free space as “the few cubic inches inside your skull”, which is the only place what one would consider ‘the truth’ could be hidden. In this case, and throughout the album, Bellamy compares life in today’s capitalist world as very similar to Orwell’s dystopian Oceania, Eastasia or of course, Eurasia.",
  start_idx: 768,
  end_idx: 866,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Resistance").id
)

Annotation.create!(
  body: "I believe Tiffany-twisted is referring to the jewelry store. Portraying her taste for the finer things.",
  start_idx: 653,
  end_idx: 680,
  user_id: User.find_by_username("Rattletrap").id,
  song_id: Song.find_by_title("Hotel California").id
)

Annotation.create!(
  body: "The rainbow is beautiful and ranges various refractions of bright lights. Tim prefers the dark side instead, revelling in his imperfection.\n\nHe desires to be someone great, represented by fire’s symbolic passion, and the agency an authsomeone when writing a story’s pages.\n\nTim’s done with disguising himself and waiting for life and people to catch up and accept the his identity, flaws and all. Therefore, “True Color” is his manifesto.",
  start_idx: 169,
  end_idx: 344,
  user_id: User.find_by_username("Ezalor").id,
  song_id: Song.find_by_title("True Colors").id
)

Comment.create!(
  body: "What an epic song!",
  user_id: User.find_by_username("Guest").id,
  commentable: Song.find_by_title("This Is War"),
  commentable_id: Song.find_by_title("This Is War").id
)

Comment.create!(
  body: "Chills",
  user_id: User.find_by_username("Rizzrack").id,
  commentable: Song.find_by_title("This Is War"),
  commentable_id: Song.find_by_title("This Is War").id
)

Comment.create!(
  body: "Best guitar solo of all time!",
  user_id: User.find_by_username("Banehallow").id,
  commentable: Song.find_by_title("Hotel California"),
  commentable_id: Song.find_by_title("Hotel California").id
)

Comment.create!(
  body: "the screamo in this song is insane",
  user_id: User.find_by_username("Ezalor").id,
  commentable: Song.find_by_title("Marigold"),
  commentable_id: Song.find_by_title("Marigold").id
)
