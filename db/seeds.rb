Song.delete_all
Artist.delete_all
Album.delete_all
User.delete_all
Annotation.delete_all

User.create!(
  username: "Guest",
  password: "Password",
  email: "Guest"
)

Artist.create!(
  name: "30 Seconds To Mars"
)

Artist.create!(
  name: "Kanye West"
)

Artist.create!(
  name: "Tori Kelly"
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
  name: "This Is War",
  artist_id: Artist.find_by_name("30 Seconds To Mars").id
)

Album.create!(
  name: "Late Registration",
  artist_id: Artist.find_by_name("Kanye West").id
)

Album.create!(
  name: "Unbreakable Smile",
  artist_id: Artist.find_by_name("Tori Kelly").id
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
  image_url: "https://upload.wikimedia.org/wikipedia/en/8/88/30STM_%E2%80%94_This_Is_War.jpg"
)

Song.create!(
  title: "Gold Digger",
  lyrics:
"She take my money when I'm in need
Yeah she's a trifling friend indeed
Oh she's a gold digger way over town
That digs on me

Now I ain't sayin' she a gold digger (when I'm in need)
But she ain't messin' with no broke niggas
(She gives me money)
Now I ain't sayin' she a gold digger (when I'm in need)
But she ain't messin' with no broke niggas
Get down girl go head get down (I gotta leave)
Get down girl go head get down (I gotta leave)
Get down girl go head get down (I gotta leave)
Get down girl gone head

Cutie the bomb
Met her at a beauty salon
With a baby Louis Vuitton
Under her underarm
She said I can tell you rock
I can tell by your charm
Far as girls you got a flock
I can tell by your charm and your arm
But I'm looking for the one
Have you seen her?
My psychic told me she have an ass like Serena
Trina, Jennifer Lopez, four kids
And I gotta take all they bad ass to show-biz
OK get your kids but then they got their friends
I pulled up in the Benz, they all got up in
We all went to Den and then I had to pay
If you fucking with this girl then you better be paid
You know why?
It take too much to touch her
From what I heard she got a baby by Busta
My best friend says she use to fuck with Usher
I don't care what none of y'all say I still love her

Now I ain't sayin' she a gold digger (when I'm in need)
But she ain't messin' with no broke niggas
(She gives me money)
Now I ain't sayin' she a gold digger (when I'm in need)
But she ain't messin' with no broke niggas
Get down girl go head get down (I gotta leave)
Get down girl go head get down (I gotta leave)
Get down girl go head get down (I gotta leave)
Get down girl gone head

18 years, 18 years
She got one of your kids, got you for 18 years
I know somebody paying child support for one of his kids
His baby mamma car and crib is bigger than his
You will see him on TV any given Sunday
Win the Superbowl and drive off in a Hyundai
She was supposed to buy your shorty TYCO with your money
She went to the doctor got lipo with your money
She walking around looking like Michael with your money
Should've got that insured got GEICO for your money, money, money
If you ain't no punk holla we want prenup
WE WANT PRENUP! Yeah
It's something that you need to have
'Cause when she leave yo ass she gon' leave with half
18 years, 18 years
And on her 18th birthday he found out it wasn't his

Now I ain't sayin' she a gold digger (when I'm in need)
But she ain't messin' with no broke niggas
(She gives me money)
Now I ain't sayin' she a gold digger (when I'm in need)
But she ain't messin' with no broke niggas
Get down girl go head get down (I gotta leave)
Get down girl go head get down (I gotta leave)
Get down girl go head get down (I gotta leave)
Get down girl gone head

Now I ain't saying you're a gold digger you got needs
You don't want your dude to smoke but he can't buy weed
You go out to eat, he can't pay y'all can't leave
There's dishes in the back, he gotta roll up his sleeves
But why y'all washing watch him
He gone make it into a Benz out of that Datsun
He got that ambition, baby, look in his eyes
This week he mopping floors, next week it's the fries
So, stick by his side
I know this dude's balling but yeah that's nice
And they gone keep calling and trying
But you stay right girl
And when you get on he leave your ass for a white girl

Get down girl go head get down
Get down girl go head get down
Get down girl go head get down
Get down girl go head
(lemme hear that back)",
  year: 2005,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("Late Registration").id,
  image_url: "https://images-na.ssl-images-amazon.com/images/I/61gmEwlJE0L.jpg"
)

Song.create!(
  title: "Dear No One",
  lyrics:
"I like being independent
Not so much of an investment
No one to tell me what to do
I like being by myself
Don't gotta entertain anybody else
No one to answer to...

But sometimes, I just want somebody to hold
Someone to give me the jacket when it's cold
Got that young love even when we're old
Yeah sometimes, I want someone to grab my hand
Pick me up, pull me close, be my man
I will love you till the end

So if you're out there I swear to be good to you
But I'm done lookin', for my future someone
Cause when the time is right
You'll be here, but for now
Dear no one, this is your love song
Ooo-OhOh

I don't really like big crowds
I tend to shut people out
I like my space, yeah
But I'd love to have a soulmate
And God'll give him to me someday
And I know it'll be worth the wait, oh

So if you're out there I swear to be good to you
But I'm done lookin' (But I'm done lookin'), for my future someone
Cause when the time is right
You'll be here, but for now
Dear no one (Dear nobody) this is your love song (Ooo-Oooh)

Sometimes, I just want somebody to hold
Someone to give me the jacket when it's cold
Got that young love even when we're old
Yeah sometimes, I want someone to grab my hand
Pick me up, pull me close, be my man
I will love you till the end

So if you're out there I swear to be good to you
But I'm done lookin' (I'm done lookin'), for my future someone (Ooo-Yeah)
Cause when the time is right
You'll be here, but for now
Dear no one (Dear Nobody) this is your love song (This is your love song)
Dear no one, no need to be searchin', no
Dear no one...
Dear no one...
Dear No one, this is your love song",
  year: 2015,
  user_id: User.find_by_username("Guest").id,
  album_id: Album.find_by_name("Unbreakable Smile").id,
  image_url: "http://assets.rollingstone.com/assets/2015/media/206940/_original/1440433173/1035x1035-MI0003895399.jpg"
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
  image_url: "https://upload.wikimedia.org/wikipedia/en/c/c8/Green_Day_-_21st_Century_Breakdown_cover.jpg"
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
  image_url: "http://4.bp.blogspot.com/-ABhte_JFzcI/UM6m49lkKYI/AAAAAAAADJc/DUIkgMrHmhs/s1600/the_resistance_wallpaper_muse-normal.jpg"
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
  image_url: "https://upload.wikimedia.org/wikipedia/en/b/b4/Muse_-_Absolution_Cover_UK.jpg"
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
  image_url: "http://cdn4.pitchfork.com/albums/23176/2e5f0170.jpg"
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
  image_url: "https://images-na.ssl-images-amazon.com/images/I/510dUazuk3L.jpg"
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
  image_url: "http://loudwire.com/files/2016/05/music-artistlogo.jpg"
)

Song.create!(
  title: "Uncomfortably Numb",
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
    image_url: "http://www.progarchives.com/progressive_rock_discography_covers/364/cover_2530151082009.jpg"
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
  image_url: "https://images-na.ssl-images-amazon.com/images/I/61SYxGXYCkL.jpg"
)

Annotation.create!(
  body: "SICK",
  start_idx: 678,
  end_idx: 840,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("This Is War").id
)

Annotation.create!(
  body: "Best part of the entire song!",
  start_idx: 262,
  end_idx: 291,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("This Is War").id
)

Annotation.create!(
  body: "LOL!",
  start_idx: 4,
  end_idx: 12,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Gold Digger").id
)

Annotation.create!(
  body: "GET DOWN!",
  start_idx: 50,
  end_idx: 75,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Gold Digger").id
)
