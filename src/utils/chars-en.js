const names = [
  "simple-citizen",
  "armored",
  "detective",
  "doctor",
  "opium",
  "sniper",
  "priest",
  "mayor",
  "hero",
  "judge",
  "cowboy",
  "badass",
  "crooked-hands",
  "revealer",
  "pitman",
  "spectre",
  "contagious",
  "prison-officer",
  "fan",
  "saba",
  "elite",
  "lawyer",
  "spy",
  "baker",
  "nurse",
  "quarantiner",
  "predator",
  "simin",
  "link",
  "poplar",
  "narrator",
  "hannah",
  "savior",
  "dentist",

  // ----- Mafia -----

  "simple-mafia",
  "godfather",
  "regicide",
  "sweetheart",
  "psychologist",
  "naughty",
  "slayer",
  "dark-blood",
  "pharmacist",
  "injector",
  "nightmare",
  "night-sleeper",
  "surgeon",
  "guard",
  "double-faced",
  "bomb-maker",
  "charlatan",

  // ----- Mid Independents -----

  "malefactor",
  "unknown",
  "twin",
  "sick",
  "dearest",

  // ----- Independents -----

  "thousand-faces",
  "deputy",
  "evil",
  "werewolf",
  "hybrid",
  "sandica",
  "emad",
  "corona",
  "saghar",
];

const citizens = [
  {
    "simple-citizen": {
      icon: "fa fa-user",
      title: "Simple Citizen",
      description: "Takes part in finding the mafia, and has no special abilities.",
      max: 10,
      type: "citizen",
    },
  },
  {
    armored: {
      icon: "fa fa-shield",
      title: "Armored",
      description:
        "He looses his armor with the mafia's first shot or 'Exit Vote', but with the 'Exit Vote' he will show his role to others and stay in the game, but with the mafia's shot he only looses his armor and stays in the game",
      max: 1,
      type: "citizen",
    },
  },
  {
    detective: {
      icon: "fa fa-search",
      title: "Detective",
      description:
        "Everynight it has a chance to inquiry people in the game to determine wether they are mafia or citizen, (Godfather, two-faced and the player who charlatan chose is known as a citizen to him)",
      max: 1,
      type: "citizen",
    },
  },
  {
    doctor: {
      icon: "fa fa-medkit",
      title: "Doctor",
      description:
        "Wakes up everynight to save someone, it only can save itself once",
      max: 1,
      type: "citizen",
    },
  },
  {
    opium: {
      icon: "fa fa-fire",
      title: "Opium",
      description:
        "Only one night in the whole game it can awake and do its job, and at that night the mafia will not be awakened, after the sun rises it will be elemenated by god",
      max: 1,
      type: "citizen",
    },
  },
  {
    sniper: {
      icon: "fa fa-crosshairs",
      title: "Sniper",
      description:
        "Everynight it can awake and shot a target, if it's target is mafia the mafia will be eliminated either way it will loose the game, it has no impact on independent side",
      max: 1,
      type: "citizen",
    },
  },
  {
    priest: {
      icon: "fa fa-leaf",
      title: "Priest",
      description:
        "the first time it's been shot, it will be saved by god. witch has no impact on it, every 3 nights it choses someone, if the target is werewolf, it will turn to a simple citizen",
      max: 1,
      type: "citizen",
    },
  },
  {
    mayor: {
      icon: "fa fa-building-o",
      title: "Mayor",
      description:
        "Once in a whole game it can cancel the second turn of voting, at the intro night it will see doctors and surgeon's hand",
      max: 1,
      type: "citizen",
    },
  },
  {
    hero: {
      icon: "fa fa-bolt",
      title: "Hero",
      description:
        "Every 2 nights it can choose a person to save him for 24 hours except the voting exit, it can never choose itself",
      max: 1,
      type: "citizen",
    },
  },
  {
    judge: {
      icon: "fa fa-gavel",
      title: "Judge",
      description:
        "Two times in the game, at the second voting turn it can choose a player to kick 'em out of the game",
      max: 1,
      type: "citizen",
    },
  },
  {
    cowboy: {
      icon: "fa fa-user-times",
      title: "Devotee",
      description:
        "One day in the game before the voting starts, it can rise and take a person out of the game with itself",
      max: 1,
      type: "citizen",
    },
  },
  {
    badass: {
      icon: "fa fa-male",
      title: "Bully",
      description:
        "After the mafia attacks on him, he doesn't go out and can stay in the game for the vote and after that he goes out",
      max: 1,
      type: "citizen",
    },
  },
  {
    "crooked-hands": {
      icon: "fa fa-money",
      title: "Crooked Hands",
      description:
        "One night in the whole game it chooses someone and that person will loose it's abilities and turns into a simple citizen or mafia, he's ability has no impact on Detective or Independents",
      max: 1,
      type: "citizen",
    },
  },
  {
    revealer: {
      icon: "fa fa-bullhorn",
      title: "Revealer",
      description:
        "Two nights in the whole game, it can choose a player, whenever that player is gone, it's role will be shown to others, if the revealer goes out before revealing, others will only know the side of the player that goes out",
      max: 1,
      type: "citizen",
    },
  },
  {
    pitman: {
      icon: "fa fa-sign-language",
      title: "Pitman",
      description:
        "Two nights in the whole game it can awake and tell the god to reveal the dead roles",
      max: 1,
      type: "citizen",
    },
  },
  {
    spectre: {
      icon: "fa fa-search-plus",
      title: "Spectre",
      description:
        "Everynight it can choose someone, the god will tell him if the target is independent or not, if it gets 3 negative responses from god, it will be eliminated",
      max: 1,
      type: "citizen",
    },
  },
  {
    contagious: {
      icon: "fa fa-eercast",
      title: "Contagious",
      description:
        "Anyone who does somthing to him, will be infected and silenced for the next day and at the night can't do anything, the second day after being infected it can't vote and by the night it goes out",
      max: 1,
      type: "citizen",
    },
  },
  {
    "prison-officer": {
      icon: "fa fa-lock",
      title: "Prison Officer",
      description:
        "Two nights in the game it sends two people to the prison (except itself). the target will go out of the game for 24 hours",
      max: 1,
      type: "citizen",
    },
  },
  {
    fan: {
      icon: "fa fa-life-ring",
      title: "Advocate",
      description:
        "everyday with his first vote, it chooses one player, after the voting is finished the target will be replaced with the player sitting next to it.",
      max: 1,
      type: "citizen",
    },
  },
  {
    saba: {
      icon: "fa fa-exchange",
      title: "Saba",
      description:
        "One night it can choose a player, and get it's ability, and she is forced to use that ability",
      max: 1,
      type: "citizen",
    },
  },
  {
    elite: {
      icon: "fa fa-graduation-cap",
      title: "Elite",
      description:
        "It can ask a player's role from god, the Elite will know the first two players that targeted him",
      max: 1,
      type: "citizen",
    },
  },
  {
    lawyer: {
      icon: "fa fa-balance-scale",
      title: "Lawyer",
      description:
        "One time in the whole game it can choose a player as it's client. the client will never go out by voting while the Lawyer is in the game (except with the Judge's 'Exit Vote')",
      max: 1,
      type: "citizen",
    },
  },
  {
    spy: {
      icon: "fa fa-user-secret",
      title: "Spy",
      description:
        "Everynight it awakes with the mafia, however it is a citizen, if it somehow reveals himself, the citizens will lose the game, if the charlatan chooses him the spy will leave the game",
      max: 1,
      type: "citizen",
    },
  },
  {
    baker: {
      icon: "fa fa-user",
      title: "Baker",
      description:
        "At the first night it can't be eliminated, after it is eliminated, the game will continue for 5 days. and the werewolf will win the game wether the werwolf is eliminated mafia will win the game",
      max: 1,
      type: "citizen",
    },
  },
  {
    nurse: {
      icon: "fa fa-plus-square",
      title: "Nurse",
      description:
        "4 nights in the game it chooses one player. if the player is infected, the disease course of the player will have no signs if the chosen player is attacked, will stay in the game for one more day",
      max: 1,
      type: "citizen",
    },
  },
  {
    quarantiner: {
      icon: "fa fa-ambulance",
      title: "Quarantine",
      description:
        "Each night it can choose a player and the player is safe by giving or getting a disease",
      max: 1,
      type: "citizen",
    },
  },
  {
    predator: {
      icon: "fa fa-pied-piper-alt",
      title: "Predator",
      description:
        "Every two nights in the game it can choose a player, if the target is werewolf it will be eliminated, at the night phase the only killer of the werewolf is the Predator",
      max: 1,
      type: "citizen",
    },
  },
  {
    simin: {
      icon: "fa fa-street-view",
      title: "Simin",
      description:
        "Everynight it chooses a player to see wether it is werewolf or not (except hybrid), one night in the game it can eliminate a werewolf",
      max: 1,
      type: "citizen",
    },
  },
  {
    link: {
      icon: "fa fa-link",
      title: "Link",
      description:
        "At the first night it chooses two players, if each one of the linked players are eliminated the other one will be eliminated too",
      max: 1,
      type: "citizen",
    },
  },
  {
    poplar: {
      icon: "fa fa-hourglass-1",
      title: "Poplar",
      description:
        "While Poplar is in the game the 'Black Squad' can't win and also the 'Black Squad' abilitis has no impact on her",
      max: 1,
      type: "citizen",
    },
  },
  {
    narrator: {
      icon: "fa fa-book",
      title: "Narrator",
      description:
        "Everynight and whenever it wants, it can rise a hand and the god will write down the latest activity of that night before the hand rising, after the narrator dies the god will read all the things that are recorded by the narrator",
      max: 1,
      type: "citizen",
    },
  },
  {
    hannah: {
      icon: "fa fa-female",
      title: "حنا",
      description:
        "Everynight in the game it can choose a player, if that player is independent the target will be eliminated, either way nothing happens, but after two unsuccess tries Hannah will be eliminated",
      max: 1,
      type: "citizen",
    },
  },
  {
    savior: {
      icon: "fa fa-pagelines",
      title: "Savior",
      description:
        "While a player is being eliminated, it has a chance to guess who is the Savior if the guess is true the player stays in the game, and the Savior turns into a Simple Citizen, if the guess is false the player leaves the game",
      max: 1,
      type: "citizen",
    },
  },
  {
    dentist: {
      icon: "fa fa-wrench",
      title: "Dentist",
      description:
        "Everynight it can choose a new player to silence for 24 hours (can't choose a player twice)",
      max: 1,
      type: "citizen",
    },
  },
];
// ----------------------- MAFIA -------------------------------
const mafias = [
  {
    "simple-mafia": {
      icon: "fa fa-user",
      title: "Simple Mafia",
      description:
        "It is among the mafia's squad and tries to misguide citizens, and has no special abilities",
      max: 10,
      type: "mafia",
    },
  },
  {
    godfather: {
      icon: "fa fa-black-tie",
      title: "Godfather",
      description:
        "Everynight decides to kill someone (has no effect on werewolf and sandica). can NOT be recognized by detective",
      max: 1,
      type: "mafia",
    },
  },
  {
    regicide: {
      icon: "fa fa-tint",
      title: "Regicide",
      description:
        "Two times on the second voting turn can guess someone's role, if he guesses correct, that player would be eliminated",
      max: 1,
      type: "mafia",
    },
  },
  {
    sweetheart: {
      icon: "fa fa-heart",
      title: "Sweetheart",
      description:
        "As she dies mafia revenges by killing 2 people at night, if the godfather dies she will be the alternative",
      max: 1,
      type: "mafia",
    },
  },
  {
    psychologist: {
      icon: "fa fa-handshake-o",
      title: "Psychologist",
      description:
        "One night except the first night, it chooses a player, and the chosen player turns into a mafia with keeping it's abilities (except Malefactor and Independent's Squad)",
      max: 1,
      type: "mafia",
    },
  },
  {
    naughty: {
      icon: "fa fa-flickr",
      title: "Naughty",
      description:
        "One night he chooses a player and that player's votes will not count tommorow, and at the second voting turn, he can vote a person two times or vote two people",
      max: 1,
      type: "mafia",
    },
  },
  {
    slayer: {
      icon: "fa fa-500px",
      title: "Slayer",
      description:
        "One night he chooses a player, and that player dies after 3 days in the middle of the day (under any circumstances), if he attacks Werewolf or Thousand-Faced, he will be eliminated by god",
      max: 1,
      type: "mafia",
    },
  },
  {
    "dark-blood": {
      icon: "fa fa-drupal",
      title: "Dark Blood",
      description:
        "One night he can kill the Contagious or save an infected player, if the Werewolf chooses him, he will NOT turn to a werewolf, and that werewolf dies",
      max: 1,
      type: "mafia",
    },
  },
  {
    pharmacist: {
      icon: "fa fa-flask",
      title: "Pharmacist",
      description:
        "# nights in the game it can choose a player to give 'em the Corona's cure, and also it gives the cure to the first none-mafia player, and the cure keeps him safe from being infected for 3 days",
      max: 1,
      type: "mafia",
    },
  },
  {
    injector: {
      icon: "fa fa-eyedropper",
      title: "Injector",
      description:
        "One night in the game he chooses a player, and god will tell him the role of that player and the job done by that player at that night",
      max: 1,
      type: "mafia",
    },
  },
  {
    nightmare: {
      icon: "fa fa-grav",
      title: "Nightmare",
      description:
        "Any player that he chooses gets an endless nightmare, the player that has a nightmare should be awake everynight, otherwise the nightmare kills them",
      max: 1,
      type: "mafia",
    },
  },
  {
    "night-sleeper": {
      icon: "fa fa-hotel",
      title: "Night SLeeper",
      description:
        "Everynight he chooses a player and the ability of that player will be used against itself, if he chooses the Witch he will be eliminated",
      max: 1,
      type: "mafia",
    },
  },
  {
    surgeon: {
      icon: "fa fa-user-md",
      title: "Surgeon",
      description:
        "Everynight he can save one mafia (can choose himself only once), rises a hand with the Doctor at the introduction night for the Mayor",
      max: 1,
      type: "mafia",
    },
  },
  {
    guard: {
      icon: "fa fa-car",
      title: "Guard",
      description:
        "While he is in the game the attacks of Malefactor, Werewolf, Crooked-hands and Sandica has no impact on the Godfather, if the Godfather dies he protects Sweetheart",
      max: 1,
      type: "mafia",
    },
  },
  {
    "double-faced": {
      icon: "fa fa-american-sign-language-interpreting",
      title: "Double-Faced",
      description:
        "Knows all the Mafia, but the mafia dont know him, the Detective's inquiry on Double-Faced is always a citizen, and he never opens his eyes with mafia",
      max: 1,
      type: "mafia",
    },
  },
  {
    "bomb-maker": {
      icon: "fa fa-bomb",
      title: "Bomber",
      description:
        "one day in the game before the voting starts chooses a player to take them out of the game with himself",
      max: 1,
      type: "mafia",
    },
  },
  {
    charlatan: {
      icon: "fa fa-hand-rock-o",
      title: "Charlatan",
      description:
        "Two nights in the game he can choose a player and the inquiry of that player will be reversed ('mafia into citizen' and 'citizen into mafia') if he chooses the Spy, the Spy will be eliminated",
      max: 1,
      type: "mafia",
    },
  },
];
// ----------------------- MID INDEPENDENTS -------------------------------
const mid_independents = [
  {
    malefactor: {
      icon: "fa fa-hand-o-left",
      title: "Malefactor",
      description:
        "هر دو شب در طول بازی یک نفر را می کشد و در این شب از حمله مافیا در امان است. شرط پیروزی او ابتدا حذف مافیا و شخصیت های مستقل، پس از آن باقی ماندن بین دو نفر آخر است. (در ابتدا با شهروندان است، در انتها مستقل)",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    unknown: {
      icon: "fa fa-question",
      title: "Unknown",
      description:
        "در ابتدای بازی متعلق به هیچ گروهی نیست. اولین بار که توسط شخصی انتحاب شود، اتفاقی برایش نمی افتد و با آن شخص هم گروه می شود، اما قابلیت خاصی ندارد",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    twin: {
      icon: "fa fa-slideshare",
      title: "Twin",
      description:
        "در ابتدای بازی متعلق به هیچ گروهی نیست. هرشب که بخواهد یک نفر را انتخاب می کند . هر زمان آن بازیکن حذف شود، همزاد جایش را با حفظ تمام قابلیت ها می گیرد و شرط پیروزی او همانند همان بازیکن می شود",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    sick: {
      icon: "fa fa-snowflake-o",
      title: "Sick",
      description:
        "در ابتدای بازی متعلق به هیچ گروهی نیست. اولین بار که توسط شخصی انتخاب شود، اتفاقی برایش نمی افتد و نقش آن بازیکن را کامل تصاحب می کند. آن بازیکن تبدیل به شخصیت ساده می شود و همچنین آلوده به کرونا شده است",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    dearest: {
      icon: "fa fa-gratipay",
      title: "Dearest",
      description:
        "در شب های فرد دو نفر را انتخاب می کند و نقش های آن ها را می فهمد. جانی در شب بعدش باید یکی از این دو نفر را بکشد. شرط پیروزی او ماندن خودش یا جانی بین 2 نفر آخر است",
      max: 1,
      type: "mid-independent",
    },
  },
];
// ----------------------- INDEPENDENTS -------------------------------
const independents = [
  {
    "thousand-faces": {
      icon: "fa fa-users",
      title: "Thousand-Faced",
      description:
        "شخصیت هر بازیکنی که با رای گیری از بازی خارج می شود را به مدت 24 ساعت تصاحب می کند. هر شخصی که کاری روی او انجام دهد، اثر آن کار به خودش بر می گردد (آیینه وار) شرط پیروزی او باقی ماندن بین سه نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
  {
    deputy: {
      icon: "fa fa-odnoklassniki",
      title: "Deputy",
      description:
        "تا زمانی که دکتر یا جراح در بازی حضور داشته باشند، در شب کشته نمی شود. شهردار را می شناسد. به عنوان هویت، یک بدل دارد و زمانی که دکتر و جراح از بازی حذف شوند، یک تیر خواهد داشت . شرط پیروزی او، پیروزی هزار چهره است",
      max: 1,
      type: "independent",
    },
  },
  {
    evil: {
      icon: "fa fa-resistance",
      title: "Evil",
      description:
        "از شب دوم، هرشب باید به تعداد عدد آن شب از بین بازیکنان افرادی را انتخاب کند. اگر بازیکن ها همرنگ باشند، همگی حذف می شوند. شرط پیروزی او، پیروزی هزار چهره است",
      max: 1,
      type: "independent",
    },
  },
  {
    werewolf: {
      icon: "fa fa-gitlab",
      title: "Werewolf",
      description:
        "هر 3 شب در طول بازی یک نفر را به گرگ نما تبدیل می کند. حمله او به شکارچی و کشیش بی اثر است. در شب فقط شکارچی می تواند گرگ نما را بکشد. شرط پیروزی او به دست آوردن حداقل نصف افراد شهر است",
      max: 1,
      type: "independent",
    },
  },
  {
    hybrid: {
      icon: "fa fa-stumbleupon",
      title: "Hybrid",
      description:
        "هر شب یک نفر را انتخاب می کند. گرداننده گرگ نما بودن آن بازیکن را به سیمین برعکس می گوید. گرگ نمایی است که قدرت تکثیر ندارد و توسط سیمین قابل شناسایی نیست. اگر کشیش را انتخاب کند، دورگه حذف می شود",
      max: 1,
      type: "independent",
    },
  },
  {
    sandica: {
      icon: "fa fa-tencent-weibo",
      title: "Sandica",
      description:
        "مافیا، جاسوس، دکتر، کاراگاه و جانی را می شناسد. از حمله گروهی مافیا و جانی در امان است. با انتخاب در مرحله دوم رای گیری، یک نفر از لیست سیاه کشته می شود. شرط پیروزی او، باقی ماندن بین سه نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
  {
    emad: {
      icon: "fa fa-usb",
      title: "Emad",
      description:
        "در شب معارفه دو نفر را به عنوان پیش مرگ انتخاب می کند که با حفظ قابلیتشان جزو گروه او می شوند. هر وقت او بخواهد، کار آنها را انجام می دهد و هرکس به عماد حمله کند، آن دو پیش مرگ او می شوند. شرط پیروزی آنها، باقی ماندن عماد بین 3 نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
  {
    corona: {
      icon: "fa fa-bug",
      title: "Corona",
      description:
        "در صورت هر نوع تماس با کرونا یا بازیکن آلوده به کرونا، آلوده می شوید. 24 ساعت اول ابتلا، دوره مخفی بیماری است و از روز دوم، علائم بیماری مانند بیمار شدن توسط ناقل خواهد بود اما با قدرت سرایت بیشتر. شرط پیروزی او، حذف شدن تمام بازیکنان است، چه کرونا زنده باشد و چه مرده",
      max: 1,
      type: "independent",
    },
  },
  {
    saghar: {
      icon: "fa fa-bandcamp",
      title: "Saghar",
      description:
        "هرشب میتواند یکی از معجون هایش را استفاده کند. هر معجون به ساغر قابلیت خاص می بخشد. شرط پیروزی او، باقی ماندن بین 3 نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
];

const characters = [
  ...citizens,
  ...mafias,
  ...mid_independents,
  ...independents,
];

export const chars_en = { names, characters };
