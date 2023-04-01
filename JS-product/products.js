//products
let productsDB = [
    {
        id:1,
        title:'Pork Adobo',
        desc:'Adobong baboy is a traditional stew originating from the Philippines. This type of Filipino adobo is made with a combination of pork belly, garlic, soy sauce, vinegar, sugar, bay leaves, peppercorns, and salt. The pork is marinated in a combination of garlic and soy sauce, and its then browned in a pan over high heat.',
        size:'Pork',
        price:'350',
        serving:'3-4 person per order',
        recipe:'1 tablespoon oil 3 pounds fatty pork shoulder, cut into 1 1/2 inch cubes 1/2 cup soy sauce 1/2 cup rice vinegar, plus more to taste 1 cup coconut mik 4 bay leaves 8 cloves garlic, peeled and lightly crushed',
        tips:'Place pork belly in a pot. Add the soy sauce, vinegar, water, peppercorn, bay leaves, brown sugar, and onions. Bring to boil over high heat.Cover the pot with the lid and lower heat to low. Let it cook for about an hour or until the meat is really tender and liquid is reduced to half. Separate meat from the sauce. In a skillet, heat oil over medium-low and add the minced garlic. Cook garlic until golden. Remove some of the garlic from oil leaving about ½ in the pan and transfer the rest to a small bowl.Add back the meat to the skillet and cook for a minute or two. Add the sauce again and let it simmer for some minutes until the sauce is reduced some more and becomes thicker.Transfer the Pork Adobo to a serving dish and top it with the browned garlic. Serve with hot steaming rice.',
        vid:'<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vHsypYyG-Ew?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ImagURL:'images/porkadobo.jpg',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    },
    {
        id:2,
        title:'Lumpia',
        desc:'Lumpiang Shanghai, these Filipino spring rolls feature a filling of ground pork mixed with veggies like carrots, wrapped in a thin crepe and then deep fried.',
        size:'Pork',
        price:'250',
        serving:'2-3 person per order',
        recipe:'1 pound ground pork 1 medium carrot - cut into tiny cubes 1 medium green bell pepper - cut into small cubes 1 medium onion - chopped 1 stalk celery - or parsley, chopped (optional) 1/2 cup flour 1 egg tablespoon salt teaspoon ground pepper 35 pieces small spring roll wrapper vegetable oil for deep frying Slurry to glue the wrappers 1 tablespoon flour 1/4 cup water',
        vid:'<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jbz3-_czvQg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ImagURL:'images/lumpia.jpg',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    },
    {
        id:3,
        title:'Afritada',
        desc:'Image result for chicken afritada description Afritada is a Philippine dish consisting of chicken, beef, or pork braised in tomato sauce with carrots, potatoes, and red and green bell peppers. It is served on white rice and is a common everyday Filipino meal. It can also be used to cook seafood.',
        size:'Chicken',
        price:'450',
        serving:'3-4 person per order',
        recipe:'1 1/2 pounds boneless, skinless chicken thighs 2 tablespoons soy sauce 1/2 teaspoon freshly ground black pepper 2 tablespoons canola oil 4 cloves garlic, minced 1 large onion, diced 2 teaspoons fish sauce 2 tablespoons tomato paste 1 cup water 1 teaspoon sugar 2 russet potatoes, peeled and cut into 3 inch pieces 2 bell peppers (red, yellow or a combination) 2 bay leaves Several dashes tabasco habanero sauce, to taste',
        vid:'<iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ImagURL:'images/afritada.jpg',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    },
    {
        id:4,
        title:'Menudo',
        desc:'Menudo, also known as ginamay or ginagmay (Cebuano: "[chopped into] smaller pieces"), is a traditional stew from the Philippines made with pork and sliced liver in tomato sauce with carrots and potatoes. Unlike the Mexican dish of the same name, it does not use tripe or red chili sauce.',
        size:'Pork',
        price:'500',
        serving:'3-4 person per order',
        recipe:'1 kg diced pork shoulder 1 pc Knorr Pork Cubes 10g 1 pc potato, diced 3 pcs hotdog, sliced crosswise 800 grams tomato sauce 1 pc carrot, diced 2 pcs bay leaves 3 tbsps soy sauce 1 pc red onion, chopped 4 cloves garlic, crushed 3 tbsps cooking oil 2 cups water salt to taste pepper to taste',
        tips:'marinate both the pork meat and liver with calamansi or lemon juice for at least 10 minutes. <br> In a deep skillet, saute garlic and onion in oil over medium heat until limp and translucent.Add the pork and cook, stirring constantly, until all sides are no longer pink. Pour the tomato sauce and 1 cup water and let it simmer for 15-20 minutes, covered.Add the liver and cook for some seconds while constantly stirring until sides are done.Then add the hotdogs, carrots, potatoes and bell pepper. Add another cup of water and season with salt and pepper. Cover and let it simmer, stirring from time to time, for 15-20 minutes or until vegetables are cooked. Stir in the green peas and cook for another minute.Serve with rice or bread.',
        vid:'<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-9rsPOhImxE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ImagURL:'images/menudo.jpg',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    },
    {
        id:5,
        title:'Pork Sinigang',
        desc:'Sinigang is a tamarind-based soup that is known for its sour and savory taste. You can make it with either fish, pork belly, spare ribs or corned beef. My favorite is with pork spare ribs, lots of veggies, and a bed of rice.',
        size:'Pork',
        price:'500',
        serving:'4-5 person per order',
        recipe:'1 pound (450g; about 3) plum tomatoes 2 whole, fresh long green peppers (4 ounces; 115g total) 1 tablespoon (15ml) canola or other neutral oil 1 head of garlic (12 about medium cloves), peeled and minced 1 small (6-ounce; 170g) red onion, finely diced 1 scallion, white part finely chopped, green part sliced thinly on a bias, divided 1 1/2 pounds (680g) boneless, skinless pork shoulder, cut into 1-inch pieces 32 ounces (945ml) tamarind concentrate (see note) One 1.41-ounce pack Knorr sinigang tamarind soup mix 1 small daikon radish (about 1 pound), peeled and cut crosswise into 1/2 inch thick rounds 1 small taro root (about 6 ounces), peeled and cut crosswise into 1/4 inch thick rounds (see note) 1/2 pound (225g) fresh okra (optional), caps trimmed, pods cut in half on a bias 6 ounces (170g) long green beans or string beans, stem ends trimmed and beans cut into 2-inch lengths 3 tablespoons (45ml) coconut oil 2 tablespoons garlic powder Kosher salt 1/4 cup (60ml) calamansi juice, or as much as desired (see note) 1/4 cup (60ml) fish sauce, or as much as desired Fried garlic, for garnish',
        ImagURL:'images/porksinigang.jpg',
        vid:'<iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    },
    {
        id:6,
        title:'Beef Caldereta',
        desc:'Kaldereta or caldereta is a goat meat stew from the Philippines. Variations of the dish use beef, chicken, or pork. Commonly, the goat meat is stewed with vegetables and liver paste. Vegetables may include tomatoes, potatoes, olives, bell peppers, and hot peppers.',
        size:'Beef',
        price:'600',
        serving:'3-4 person per order',
        recipe:'    2 lbs beef, cubed 3 -4 cups water 1 medium onion, chopped 1 garlic clove, crushed 1 cup bell pepper, cut into strips 1 cup tomato sauce 1⁄2 cup tomato paste 2⁄3 cup liver, spread 1 cup grated cheese 1 cup unsweetened pineapple juice 1 tablespoon Tabasco sauce (optional) 3 large bay leaves 3 medium potatoes, sliced 2 medium carrots, sliced salt and pepper',
        ImagURL:'images/beefCaldereta.jpg',
        vid:'<iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    },
    {
        id:7,
        title:'Beef Papaitan',
        desc:'Papaitan is traditionally made with goat offal and bile, but can also be made with ox or beef offal as well, depending on the particular tastes of whoever is brave enough to eat this arcane concoction of animal bits and juices.',
        size:'Beef',
        price:'550',
        serving:'4-5 person per order',
        recipe:'    1/2 kilo beef, use tripe 1/4 kilo beef, sliced thinly 1/4 cup beef bile 1 medium onion, chopped 1 head garlic, minced 1 piece ginger, sliced 2 pieces red chili pepper (siling labuyo) 1 teaspoon salt 1/2 teaspoon pepper 1 tablespoon fish sauce (patis)',
        ImagURL:'images/beef-papaitan.jpg',
        vid:'<iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        quantity:1,
        isFavourite:false,
        isMe: 'N',
    }
];
localStorage.setItem("products",JSON.stringify(productsDB));