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
      title: "شهروند ساده",
      description: "در پیدا کردن مافیا مشارکت میکند و توانایی ویژه ای ندارد",
      max: 10,
      type: "citizen",
    },
  },
  {
    armored: {
      icon: "fa fa-shield",
      title: "زره پوش",
      description:
        "با شلیک اول مافیا نمیمیرد و دو شب در طول بازی به گرداننده اعلام می کند که کارت های خارج شده از بازی را برای همه رو کند",
      max: 1,
      type: "citizen",
    },
  },
  {
    detective: {
      icon: "fa fa-search",
      title: "کارآگاه",
      description:
        "هر شب یک نفر را انتخاب می کند، گرداننده به او می گوید مافیا هست یا نه. (به غیر از رییس مافیا، دورو و بازیکنی که شارلاتان انتخابش کرده است)",
      max: 1,
      type: "citizen",
    },
  },
  {
    doctor: {
      icon: "fa fa-medkit",
      title: "دکتر",
      description:
        "هر شب یک نفر را از حمله مرگبار نجات می دهد. فقط یک شب در طول بازی می تواند خودش را انتخاب کند و نجات دهد",
      max: 1,
      type: "citizen",
    },
  },
  {
    opium: {
      icon: "fa fa-fire",
      title: "افیون",
      description:
        "یک بار در شب می تواند کارش را انجام دهد و آن شب هیچ شخصیت غیر شهروندی بیدار نمی شود. خود افیون هم صبح فردای آن روز از بازی حذف خواهد شد",
      max: 1,
      type: "citizen",
    },
  },
  {
    sniper: {
      icon: "fa fa-crosshairs",
      title: "اسنایپر",
      description:
        "هر شب در طول بازی اگر بخواهد می تواند یک نفر را انتخاب کند. اگر آن شخص مافیا باشد، کشته می شود و اگر شهروند باشد فقط اسنایپر می میرد. اگر شخصیت مستقل باشد، هیچ اتفاقی نمی افتد",
      max: 1,
      type: "citizen",
    },
  },
  {
    priest: {
      icon: "fa fa-leaf",
      title: "کشیش",
      description:
        "اولین شبی که مورد حمله قرار گیرد، توسط گرداننده نجات پیدا می کند . جادوگر نمی تواند او را جادو کند. هر سه شب در طول بازی یک نفر را انتخاب می کند، اگر گرگ نما باشد، آن شخص به یک شهروند ساده تبدیل می شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    mayor: {
      icon: "fa fa-building-o",
      title: "شهردار",
      description:
        "یک روز در طول بازی در مرحله دوم رای گیری می تواند رای گیری را ملغی کند. در شب معارفه دست دکتر ها و جراح را می بیند",
      max: 1,
      type: "citizen",
    },
  },
  {
    hero: {
      icon: "fa fa-bolt",
      title: "قهرمان",
      description:
        "هر دو شب در طول بازی یک نفر را انتخاب می کند. آن شخص به مدت 24 ساعت از هر اتفاقی نجات پیدا می کند، به غیر از حذف با رای گیری. او هرگز نمی تواند خودش را انتخاب کند",
      max: 1,
      type: "citizen",
    },
  },
  {
    judge: {
      icon: "fa fa-gavel",
      title: "قاضی",
      description:
        "دو بار در طول بازی اگر لازم بداند، در مرحله دوم رای گیری، یکی از متهمان را انتخاب می کند تا آن شخص از بازی خارج شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    cowboy: {
      icon: "fa fa-user-times",
      title: "فدایی",
      description:
        "یک روز در طول بازی تا قبل از پایان مرحله اول رای گیری با اعلام کلمه فدایی بلند می شود و با دست به یک نفر اشاره می کند. آن شخص به همراه فدایی از بازی خارج می شوند",
      max: 1,
      type: "citizen",
    },
  },
  {
    badass: {
      icon: "fa fa-male",
      title: "گردن کلفت",
      description:
        "در اثر حمله بلافاصله کشته نمی شود. در پایان روز، پس از شرکت در رای گیری می میرد",
      max: 1,
      type: "citizen",
    },
  },
  {
    "crooked-hands": {
      icon: "fa fa-money",
      title: "دست کج",
      description:
        "یک شب در طول بازی یک نفر را انتخاب می کند . آن شخص قابلیت های خود را از دست می دهد و به یک شهروند یا مافیای ساده تبدیل می شود. حمله او به کاراگاه و شخصیت های مستقل بی اثر است",
      max: 1,
      type: "citizen",
    },
  },
  {
    revealer: {
      icon: "fa fa-bullhorn",
      title: "افشاگر",
      description:
        "دو شب در طول بازی می تواند بازیکنی را انتخاب کند. هروقت آن بازیکن از بازی حذف شود، کارتشان به همه نشان داده خواهد شد. اگر قبل از افشا شدن، افشاگر حذف شود، فقط گروه آن بازیکنان به صورت تصادفی اعلام خواهد شد",
      max: 1,
      type: "citizen",
    },
  },
  {
    pitman: {
      icon: "fa fa-sign-language",
      title: "گورکن",
      description:
        "دو شب در طول بازی به گرداننده اعلام می کند که کارت های خارج شده از بازی را برای همه رو کند",
      max: 1,
      type: "citizen",
    },
  },
  {
    spectre: {
      icon: "fa fa-search-plus",
      title: "کارآگاه ویژه",
      description:
        "هر شب بخواهد می تواند یک نفر را انتخاب کند ، گرداننده به او می گوید که شخصیت مستقل است یا نه. 3 بار استعلام منفی بگیرد، از بازی حذف می شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    contagious: {
      icon: "fa fa-eercast",
      title: "ناقل",
      description:
        "هر شخصی که او را در شب انتخاب کند، آلوده می شود. فرد آلوده در روز اول لال می شود و شب نمی تواند کاری انجام دهد. روز دوم نمی تواند رای دهد و شب دوم می میرد",
      max: 1,
      type: "citizen",
    },
  },
  {
    "prison-officer": {
      icon: "fa fa-lock",
      title: "زندانبان",
      description:
        "دو شب در طول بازی یکی از بازیکنان به جز خودش را به زندان می فرستد. آن شخص به مدت 24 ساعت به عنوان زندانی از بازی خارج می شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    fan: {
      icon: "fa fa-life-ring",
      title: "هوادار",
      description:
        "هر روز با اولین رای خود در مرحله اول رای گیری، یک بازیکن را انتخاب می کند. پس از پایان شمارش آراء جای آن بازیکن با بازیکن پایینترش جابجا می شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    saba: {
      icon: "fa fa-exchange",
      title: "صبا",
      description:
        "شب در طول بازی می تواند یک بازیکن را انتخاب کند و نقش او را به مدت 24 ساعت تصاحب نماید و باید از قابلیت آن شخص استفاده نماید",
      max: 1,
      type: "citizen",
    },
  },
  {
    elite: {
      icon: "fa fa-graduation-cap",
      title: "نخبه",
      description:
        "یک بار می تواند نقش یک بازیکن یا بازیکن صاحب یک نقش شهروندی را از گرداننده بپرسد. نخبه دو نفر اولی که او را انتخاب کنند، شناسایی خواهد کرد",
      max: 1,
      type: "citizen",
    },
  },
  {
    lawyer: {
      icon: "fa fa-balance-scale",
      title: "وکیل",
      description:
        "یک روز در طول بازی یک نفر را به عنوان موکل انتخاب می کند. موکل تا زمان حضور وکیل در بازی با رای گیری حذف نمی شود، به جز تصمیم قاضی",
      max: 1,
      type: "citizen",
    },
  },
  {
    spy: {
      icon: "fa fa-user-secret",
      title: "جاسوس",
      description:
        "هر شب با مافیا بیدار می شود اما یک شهروند است. اگر کوچکترین اشاره مستقیم یا غیر مستقیمی به شخصیتش داشته باشد، شهروندان بازنده خواهند شد. اگر شارلاتان او را انتخاب کند، جاسوس از بازی خارج می شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    baker: {
      icon: "fa fa-user",
      title: "نانوا",
      description:
        "شب اول به هیچ وجه کشته نمی شود. در صورت حذف نانوا، بعد از 5 شبانه روز بازی تمام خواهد شد. گرگ نما برنده می شود و اگر او حذف شده باشد مافیا برنده بازی خواهند بود",
      max: 1,
      type: "citizen",
    },
  },
  {
    nurse: {
      icon: "fa fa-plus-square",
      title: "پرستار",
      description:
        "چهار شب در طول بازی یک نفر را انتخاب می کند. اگر بازیکن منتخب آلوده باشد، دوره بیماری اش بدون علائم خواهد بود و اگر فرد منتخب مورد حمله قرار گیرد و قرار باشد حذف شود، یک روز بیشتر در بازی می ماند",
      max: 1,
      type: "citizen",
    },
  },
  {
    quarantiner: {
      icon: "fa fa-ambulance",
      title: "قرنطینه چی",
      description:
        "هر شب یک بازیکن را انتخاب می کند و به مدت 24 ساعت، از آن بازیکن در مقابل سرایت و انتقال بیماری محافطت می نماید",
      max: 1,
      type: "citizen",
    },
  },
  {
    predator: {
      icon: "fa fa-pied-piper-alt",
      title: "شکارچی",
      description:
        "هر دو شب در طول بازی یک نفر را انتخاب می کند. اگر فرد انتخاب شده گرگ نما باشد، آن شخص از بازی خارج می شود. در شب فقط شکارچی می تواند گرگ نما را بکشد",
      max: 1,
      type: "citizen",
    },
  },
  {
    simin: {
      icon: "fa fa-street-view",
      title: "سیمین",
      description:
        "هر شب یک نفر را انتخاب می کند، گرداننده به او می گوید که گرگ نما هست یا خیر (به غیر از دورگه) یک شب در طول بازی می تواند یکی از گرگ نما ها را بکشد",
      max: 1,
      type: "citizen",
    },
  },
  {
    link: {
      icon: "fa fa-link",
      title: "پیوند",
      description:
        "در شب اول دونفر را انتخاب می کند. چنانچه هریک از دو نفر حذف شوند، آن بازیکن دیگر هم حذف خواهد شد",
      max: 1,
      type: "citizen",
    },
  },
  {
    poplar: {
      icon: "fa fa-hourglass-1",
      title: "سپیدار",
      description:
        "تا زمانی که داخل بازی باشد، لشکر سیاه نمی توانند پیروز شوند. قابلیتهای لشکر سیاه تاثیری روی او ندارد",
      max: 1,
      type: "citizen",
    },
  },
  {
    narrator: {
      icon: "fa fa-book",
      title: "راوی",
      description:
        "هرشب،در هرزمان از شب که بخواهد، یک بار دست بلند می کند و آخرین اتفاقی که قبلش افتاده باشد توسط گرداننده یادداشت می شود. بعد مرگ راوی، گرداننده تمام وقایع نوشته شده را میخواند. او فرشته نجات را می شناسد",
      max: 1,
      type: "citizen",
    },
  },
  {
    hannah: {
      icon: "fa fa-female",
      title: "حنا",
      description:
        "هر شب در طول بازی اگر بخواهد می تواند یک نفر را انتخاب کند. اگر آن شخص مستقل باشد، بازیکن مستقل کشته می شود. اگرمستقل نباشد، اتفاقی نمی افتد. اگر 2 بار غیر مستقل انتخاب کند، حنا حذف می شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    savior: {
      icon: "fa fa-pagelines",
      title: "فرشته نجات",
      description:
        "بازیکنی که در مرحله فرصت آخر قرار می گیرد اگر شخصیت فرشته نجات را درست حدس بزند، از بازی حذف نمی شود و فرشته نجات به شهروند ساده تبدیل می گردد. او هرگز نمی تواند خودش را انتخاب کند",
      max: 1,
      type: "citizen",
    },
  },
  {
    dentist: {
      icon: "fa fa-wrench",
      title: "دندان پزشک",
      description:
        "هر شب یک بازیکن را انتخاب می کند ولی نمی تواند یک بازیکن را بیشتر از یک بار انتخاب نماید. آن شخص به مدت 24 ساعت حق حرف زدن ندارد",
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
      title: "مافیا ساده",
      description:
        "به همراه گروه مافیا سعی در گمراه کردن شهروندان دارد و توانایی ویژه ای ندارد",
      max: 10,
      type: "mafia",
    },
  },
  {
    godfather: {
      icon: "fa fa-black-tie",
      title: "رییس مافیا",
      description:
        "هرشب تصمیم می گیرد چه کسی را بکشند. مافیا به گرگ نما و سندیکا نمی توانند حمله کنند. رییس توسط کاراگاه شناسایی نمی شود",
      max: 1,
      type: "mafia",
    },
  },
  {
    regicide: {
      icon: "fa fa-tint",
      title: "شاه کش",
      description:
        "دوبار در طول شب یا مرحله دوم رای گیری می تواند نقش بازیکنی را حدس بزند. اگر درست حدس زده باشد آن بازیکن از بازی حذف می شود",
      max: 1,
      type: "mafia",
    },
  },
  {
    sweetheart: {
      icon: "fa fa-heart",
      title: "معشوقه",
      description:
        "با مرگ او مافیا از شدت خشم به دو نفر حمله می کنند. با مرگ رییس مافیا، او جای رییس را می گیرد",
      max: 1,
      type: "mafia",
    },
  },
  {
    psychologist: {
      icon: "fa fa-handshake-o",
      title: "روانکاو",
      description:
        "یک شب به جز شب اول بازی، یک نفر را انتخاب می کند. آن شخص با حفظ قابلیت هایش به یک مافیا تبدیل می شود. (به غیر از جانی و شخصیت های مستقل)",
      max: 1,
      type: "mafia",
    },
  },
  {
    naughty: {
      icon: "fa fa-flickr",
      title: "جَلَب",
      description:
        "یک شب در طول بازی یک نفر را انتخاب میکند و رای آن شخص فردا شمرده نمی شود. در مرحله دوم رای گیری، 2 رای به یک نفر یا 1 رای به دو نفر می دهد",
      max: 1,
      type: "mafia",
    },
  },
  {
    slayer: {
      icon: "fa fa-500px",
      title: "قاتل حرفه ای",
      description:
        "یک شب در طول بازی یک نفر را انتخاب می کند. آن شخص 3 روز بعد وسط روز می میرد (تحت هر شرایطی). اگر به گرگ نما یا هزار چهره حمله کند، قاتل از بازی خارج می شود",
      max: 1,
      type: "mafia",
    },
  },
  {
    "dark-blood": {
      icon: "fa fa-drupal",
      title: "سیاه زخم",
      description:
        "یک شب در طول بازی می تواند ناقل را بکشد یا یک بازیکن آلوده را نجات دهد. اگر توسط گرگ نما انتخاب شود، به گرگ نما تبدیل نمی شود و آن گرگ نما می میرد",
      max: 1,
      type: "mafia",
    },
  },
  {
    pharmacist: {
      icon: "fa fa-flask",
      title: "داروساز",
      description:
        "سه شب در طول بازی یک نفر را انتخاب میکند و به آن ها داروی مخصوص کرونا می دهد. همچنین به اولین نفر (غیر مافیایی) که انتخابش کند در ازای قابلیتش دارو می دهد. دارو باعث می شود بازیکن تا 3 شبانه روز آلوده نشود",
      max: 1,
      type: "mafia",
    },
  },
  {
    injector: {
      icon: "fa fa-eyedropper",
      title: "آمپول زن",
      description:
        "یک شب در طول بازی یک نفر را انتخاب میکند. گرداننده، هویت بازیکن و کاری که آن شب انجام داده است را به آمپول زن می گوید",
      max: 1,
      type: "mafia",
    },
  },
  {
    nightmare: {
      icon: "fa fa-grav",
      title: "کابوس",
      description:
        "هر بازیکنی او را در شب انتخاب کند دچار کابوس می شود. بازیکنی که اسیر می شود باید هرشب بیدار شود و اگر در شبی بیدار نشود، به خواب ابدی فرو میرود و حذف می گردد",
      max: 1,
      type: "mafia",
    },
  },
  {
    "night-sleeper": {
      icon: "fa fa-hotel",
      title: "شب خٌسب",
      description:
        "هر شب یک نفر را انتخاب می کند. آن شخص به مدت 24ساعت هر کاری که انجام دهد، به خودش بر می گردد. اگر جادوگر را انتخاب کند، شب خسب از بازی حذف می گردد",
      max: 1,
      type: "mafia",
    },
  },
  {
    surgeon: {
      icon: "fa fa-user-md",
      title: "جراح",
      description:
        "هر شب یک نفر را از حمله مرگبار نجات می دهد. فقط یک شب میتواند خودش را انتخاب کند و نجات دهد. در شب معارفه برای گمراه کردن شهردار، همزمان با دکتر دست بلند می کند",
      max: 1,
      type: "mafia",
    },
  },
  {
    guard: {
      icon: "fa fa-car",
      title: "محافظ",
      description:
        "تا زمانی که در بازی حضور دارد، حمله جانی، گرگ نما، فدایی، دست کج و سندیکا (لیست سیاه) به رئیس مافیا بی اثر است. در صورت حذف رئیس مافیا، محافظ از معشوقه محافظت می کند",
      max: 1,
      type: "mafia",
    },
  },
  {
    "double-faced": {
      icon: "fa fa-american-sign-language-interpreting",
      title: "دو رو",
      description:
        "تمام افراد مافیا را می شناسد اما آنها او را نمی شناسند. اگر کاراگاه از او استعلام بگیرد، گرداننده می گوید شهروند است. هرگز همراه با مافیا چشم باز نمی کند",
      max: 1,
      type: "mafia",
    },
  },
  {
    "bomb-maker": {
      icon: "fa fa-bomb",
      title: "بمب ساز",
      description:
        "یک روز در طول بازی تا قبل از پایان مرحله اول رای گیری با اعلام کلمه بمب ساز بلند می شود. و با نزدیک شدن به یک نفر، او را بصورت انتحاری همراه با خود از بازی خارج می کند",
      max: 1,
      type: "mafia",
    },
  },
  {
    charlatan: {
      icon: "fa fa-hand-rock-o",
      title: "شارلاتان",
      description:
        "دو شب در طول بازی، یک نفر را انتخاب می کند. گرداننده شخصیت آن بازیکن را به کاراگاه برعکس می گوید. اگر جاسوس را انتخاب کند، جاسوس حذف می گردد",
      max: 1,
      type: "mafia",
    },
  },
];
// ----------------------- MID INDEPENDENTS -------------------------------
const mid_independents = [
  {
    "malefactor": {
      icon: "fa fa-hand-o-left",
      title: "جانی",
      description: "هر دو شب در طول بازی یک نفر را می کشد و در این شب از حمله مافیا در امان است. شرط پیروزی او ابتدا حذف مافیا و شخصیت های مستقل، پس از آن باقی ماندن بین دو نفر آخر است. (در ابتدا با شهروندان است، در انتها مستقل)",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    "unknown": {
      icon: "fa fa-question",
      title: "مجهول",
      description: "در ابتدای بازی متعلق به هیچ گروهی نیست. اولین بار که توسط شخصی انتحاب شود، اتفاقی برایش نمی افتد و با آن شخص هم گروه می شود، اما قابلیت خاصی ندارد",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    "twin": {
      icon: "fa fa-slideshare",
      title: "همزاد",
      description: "در ابتدای بازی متعلق به هیچ گروهی نیست. هرشب که بخواهد یک نفر را انتخاب می کند . هر زمان آن بازیکن حذف شود، همزاد جایش را با حفظ تمام قابلیت ها می گیرد و شرط پیروزی او همانند همان بازیکن می شود",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    "sick": {
      icon: "fa fa-snowflake-o",
      title: "مریض",
      description: "در ابتدای بازی متعلق به هیچ گروهی نیست. اولین بار که توسط شخصی انتخاب شود، اتفاقی برایش نمی افتد و نقش آن بازیکن را کامل تصاحب می کند. آن بازیکن تبدیل به شخصیت ساده می شود و همچنین آلوده به کرونا شده است",
      max: 1,
      type: "mid-independent",
    },
  },
  {
    "dearest": {
      icon: "fa fa-gratipay",
      title: "جانان",
      description: "در شب های فرد دو نفر را انتخاب می کند و نقش های آن ها را می فهمد. جانی در شب بعدش باید یکی از این دو نفر را بکشد. شرط پیروزی او ماندن خودش یا جانی بین 2 نفر آخر است",
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
      title: "هزار چهره",
      description: "شخصیت هر بازیکنی که با رای گیری از بازی خارج می شود را به مدت 24 ساعت تصاحب می کند. هر شخصی که کاری روی او انجام دهد، اثر آن کار به خودش بر می گردد (آیینه وار) شرط پیروزی او باقی ماندن بین سه نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
  {
    "deputy": {
      icon: "fa fa-odnoklassniki",
      title: "نایب",
      description: "تا زمانی که دکتر یا جراح در بازی حضور داشته باشند، در شب کشته نمی شود. شهردار را می شناسد. به عنوان هویت، یک بدل دارد و زمانی که دکتر و جراح از بازی حذف شوند، یک تیر خواهد داشت . شرط پیروزی او، پیروزی هزار چهره است",
      max: 1,
      type: "independent",
    },
  },
  {
    "evil": {
      icon: "fa fa-resistance",
      title: "شیطان صفت",
      description: "از شب دوم، هرشب باید به تعداد عدد آن شب از بین بازیکنان افرادی را انتخاب کند. اگر بازیکن ها همرنگ باشند، همگی حذف می شوند. شرط پیروزی او، پیروزی هزار چهره است",
      max: 1,
      type: "independent",
    },
  },
  {
    "werewolf": {
      icon: "fa fa-gitlab",
      title: "گرگ نما",
      description: "هر 3 شب در طول بازی یک نفر را به گرگ نما تبدیل می کند. حمله او به شکارچی و کشیش بی اثر است. در شب فقط شکارچی می تواند گرگ نما را بکشد. شرط پیروزی او به دست آوردن حداقل نصف افراد شهر است",
      max: 1,
      type: "independent",
    },
  },
  {
    "hybrid": {
      icon: "fa fa-stumbleupon",
      title: "دو رگه",
      description: "هر شب یک نفر را انتخاب می کند. گرداننده گرگ نما بودن آن بازیکن را به سیمین برعکس می گوید. گرگ نمایی است که قدرت تکثیر ندارد و توسط سیمین قابل شناسایی نیست. اگر کشیش را انتخاب کند، دورگه حذف می شود",
      max: 1,
      type: "independent",
    },
  },
  {
    "sandica": {
      icon: "fa fa-tencent-weibo",
      title: "سندیکا",
      description: "مافیا، جاسوس، دکتر، کاراگاه و جانی را می شناسد. از حمله گروهی مافیا و جانی در امان است. با انتخاب در مرحله دوم رای گیری، یک نفر از لیست سیاه کشته می شود. شرط پیروزی او، باقی ماندن بین سه نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
  {
    "emad": {
      icon: "fa fa-usb",
      title: "عماد",
      description: "در شب معارفه دو نفر را به عنوان پیش مرگ انتخاب می کند که با حفظ قابلیتشان جزو گروه او می شوند. هر وقت او بخواهد، کار آنها را انجام می دهد و هرکس به عماد حمله کند، آن دو پیش مرگ او می شوند. شرط پیروزی آنها، باقی ماندن عماد بین 3 نفر آخر است",
      max: 1,
      type: "independent",
    },
  },
  {
    "corona": {
      icon: "fa fa-bug",
      title: "کرونا",
      description: "در صورت هر نوع تماس با کرونا یا بازیکن آلوده به کرونا، آلوده می شوید. 24 ساعت اول ابتلا، دوره مخفی بیماری است و از روز دوم، علائم بیماری مانند بیمار شدن توسط ناقل خواهد بود اما با قدرت سرایت بیشتر. شرط پیروزی او، حذف شدن تمام بازیکنان است، چه کرونا زنده باشد و چه مرده",
      max: 1,
      type: "independent",
    },
  },
  {
    "saghar": {
      icon: "fa fa-bandcamp",
      title: "ساغر",
      description: "هرشب میتواند یکی از معجون هایش را استفاده کند. هر معجون به ساغر قابلیت خاص می بخشد. شرط پیروزی او، باقی ماندن بین 3 نفر آخر است",
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

export { names, characters as default };