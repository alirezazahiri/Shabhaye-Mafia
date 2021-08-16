const names = [
  "simple-citizen",
  "armored",
  "detective",
  "doctor",
  "sniper",
  "priest",
  "mayor",
  "hero",
  "lawyer",
  "cowboy",
  "badass",
  "joker",
  "godfather",
  "dr-lecter",
  "silencer",
  "negotiator",
  "witch",
  "simple-mafia",
];

const characters = [
  {
    "simple-citizen": {
      icon: "fa fa-user",
      title: "شهروند ساده",
      description: "در پیدا کردن مافیا مشارکت میکند و توانایی ویژه ای ندارد",
      max: 5,
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
        "هر شب یک نفر را انتخاب می کند، گرداننده به او می گوید مافیا هست یا نه",
      max: 1,
      type: "citizen",
    },
  },
  {
    doctor: {
      icon: "fa fa-medkit",
      title: "دکتر",
      description:
        "هر شب یک نفر به انتخاب او از حمله مافیا نجات پیدا میکند. انتخاب او برای مافیا بی اثر است و در طول بازی تنها یک بار حق نجات خود را دارد",
      max: 1,
      type: "citizen",
    },
  },
  {
    sniper: {
      icon: "fa fa-binoculars",
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
      description: "هر شب یک نفر به انتخاب او از سایلنت خارج میشود",
      max: 1,
      type: "citizen",
    },
  },
  {
    mayor: {
      icon: "fa fa-legal",
      title: "شهردار",
      description:
        "یک روز در طول بازی در مرحله دوم رای گیری می تواند رای گیری را ملغی کند",
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
    lawyer: {
      icon: "fa fa-balance-scale",
      title: "وکیل",
      description:
        "یک روز در طول بازی یک نفر را به عنوان موکل انتخاب می کند. موکل تا زمان حضور وکیل در بازی با رای گیری حذف نمی شود",
      max: 1,
      type: "citizen",
    },
  },
  {
    cowboy: {
      icon: "fa fa-bomb",
      title: "فدایی",
      description:
        "یک روز در طول بازی تا قبل از پایان مرحله اول رای گیری با اعلام کلمه فدایی بلند می شود و با دست به یک نفر اشاره می کند. آن شخص به همراه فدایی از بازی خارج می شوند",
      max: 1,
      type: "citizen",
    },
  },
  {
    badass: {
      icon: "fa fa-anchor",
      title: "گردن کلفت",
      description:
        "در اثر حمله بلافاصله کشته نمی شود. در پایان روز، پس از شرکت در رای گیری می میرد",
      max: 1,
      type: "citizen",
    },
  },
  {
    joker: {
      icon: "fa fa-birthday-cake",
      title: "جوکر",
      description:
        "جزو مافیاست و هر شب استعلام یک نفر به انتخاب او برای کاراگاه برعکس میشود",
      max: 1,
      type: "mafia",
    },
  },
  {
    godfather: {
      icon: "fa fa-eye",
      title: "پدرخوانده",
      description:
        "هرشب تصمیم می گیرد چه کسی را بکشند. توسط کاراگاه شناسایی نمی شود",
      max: 1,
      type: "mafia",
    },
  },
  {
    "dr-lecter": {
      icon: "fa fa-eyedropper",
      title: "دکتر لکتر",
      description:
        "جزو مافیاست و هر شب جان یک نفر از مافیا را از حمله اسنایپر نجات میدهد. تنها یک بار حق نجات دادن خود را دارد",
      max: 1,
      type: "mafia",
    },
  },
  {
    silencer: {
      icon: "fa fa-bell-slash",
      title: "ناتاشا",
      description:
        "جزو گروه مافیاست و هر شب یک نفر به انتخاب او محکوم به سکوت اجباری در روز بعد است",
      max: 1,
      type: "mafia",
    },
  },
  {
    negotiator: {
      icon: "fa fa-handshake-o",
      title: "روانکاو",
      description:
        "یک شب به جز شب اول بازی، یک نفر را انتخاب می کند. آن شخص با حفظ قابلیت هایش به یک مافیا تبدیل می شود",
      max: 1,
      type: "mafia",
    },
  },
  {
    witch: {
      icon: "fa fa-magic",
      title: "جادوگر",
      description:
        "جزو مافیاست. یک شب در طول بازی یک نفر را انتخاب میکند. آن شخص به مدت 24 ساعت توانایی هایش را از دست می دهد و شب به هیچ عنوان بیدار نمی شود",
      max: 1,
      type: "mafia",
    },
  },
  {
    "simple-mafia": {
      icon: "fa fa-male",
      title: "مافیا ساده",
      description:
        "به همراه گروه مافیا سعی در گمراه کردن شهروندان دارد و توانایی ویژه ای ندارد",
      max: 5,
      type: "mafia",
    },
  },
];

export { names, characters as default };
