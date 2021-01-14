const dataId = {
    type: 'ID',
    
    ui: {
        projects: "Proyek",
        skills: "Kemampuan",
        mainSkills: "Kemampuan Utama",
        otherSkills: "Kemampuan Lainnya",
        contact: "Kontak",
        email: "Surel",
        copyright: "Hak Cipta Dilindugi",
    },

    dev: {
        name: "Noor Wachid",
        description: "C++ Programmer dan Web Developer",
        email: 'noorwachid@yandex.com',

        mainSkills: [{
                name: "C++",
                description: "Membuat library, aplikasi CLI dan grafik berperforma tinggi",
            },
            {
                name: "JavaScript",
                description: "Membuat tampilan pengguna yang interaktif",
            },
            {
                name: "PHP",
                description: "Membuat website dinamis",
            }
        ],

        otherSkills: [
            "HTML/CSS",
            "MySQL",
            "Menggunakan Git version control",
            "Menggunakan GNU/Linux based OS",
            "Berbicara/Menulis dalam bahasa Indonesia dan Inggris",
        ],
    },

    tags: ["All", "C++", "JavaScript", "PHP"],
    tagActive: "All",
    projects: [{
            id: 1,
            name: "RainType",
            description: "Test mengetik dibuat dengan JavaScript",
            url: "https://noorwachid.github.io/RainType",
            image: "raintype.png",
            tags: ["JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Penulisan ulang HFS, lebih sederhana dan cepat",
            url: "https://github.com/NoorWachid/WFileServer",
            image: "wfs.png",
            tags: ["JavaScript", "NodeJS"]
        },
        {
            id: 3,
            name: "FixQuote",
            description: "Menyamakan/membedakan tanda petik",
            url: "https://noorwachid.github.io/Jar/FixQuote",
            image: "fixquote.png",
            tags: ["JavaScript"]
        },
        {
            id: 4,
            name: "Sprint",
            description: "Baca artikel atau apapun lebih cepat",
            url: "https://noorwachid.github.io/Jar/Sprint",
            image: "sprint.png",
            tags: ["JavaScript"]
        },
        {
            id: 5,
            name: "AnggurEngine",
            description: "2D Game engine",
            url: "https://github.com/NoorWachid/Anggur",
            image: "anggur.png",
            tags: ["C++"]
        },
        {
            id: 5,
            name: "SimpleBlog",
            description: "Blog super sederhana",
            url: "https://github.com/NoorWachid/SimpleBlog",
            image: "simpleblog.png",
            tags: ["PHP", "MySQL"]
        }
    ]
};
