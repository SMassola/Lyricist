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

Album.create!(
  name: "This Is War",
  artist_id: Artist.find_by_name("30 Seconds To Mars").id
)

Album.create!(
  name: "Late Registration",
  artist_id: Artist.find_by_name("Kanye West").id
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
  album_id: Album.find_by_name("Late Registration").id
)

Annotation.create!(
  body: "Anything can happen in war, but no matter what, you have to always keep on fighting and persevere. Wars test people’s character. The stronger survives while the weaker falls, and usually the good guys always fall victim to the bad guys.!",
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
  body: "She IS a gold digger!",
  start_idx: 4,
  end_idx: 12,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Gold Digger").id
)

Annotation.create!(
  body: "GET DOWN!",
  start_idx: 24,
  end_idx: 33,
  user_id: User.find_by_username("Guest").id,
  song_id: Song.find_by_title("Gold Digger").id
)
