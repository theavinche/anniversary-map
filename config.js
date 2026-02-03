var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: "pk.eyJ1IjoidGhlYXZpbmNoZSIsImEiOiJjbWw2OGVlZjgwYWN5M2dxeGNjamJmeXg0In0.CtsqKf9jPhvi0uJ-e69eng",
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Our Journey ❤️',
    subtitle: 'A story across cities, years, and forever',
    byline: 'Happy Anniversary',
    footer: 'From 2009 to today… every place led me to you.',
    chapters: [
        {
      id: "first-sight-2009",
      title: "2009 • First Sight",
      description:
        "The first time I saw you, I didn’t realize life had already started changing.",
      location: {
        center: [76.3650, 26.0173],
        zoom: 13,
        pitch: 45,
        bearing: 0
      },
      image: "./assets/01_aadarsh_nagar.JPG"
    },

    {
      id: "fell-in-love-2009",
      title: "Late 2009 • Love Began Quietly",
      description:
        "The second time… something stayed with me. This was the beginning of love.",
      location: {
        center: [76.3650, 26.0173],
        zoom: 13,
        pitch: 50,
        bearing: 20
      },
      image: "./assets/02_bal_mandir.JPG"
    },

    {
      id: "first-call-2010",
      title: "March 2010 • First Words",
      description:
        "The first time we spoke, you scolded me. Even that felt unforgettable.",
      location: {
        center: [76.3650, 26.0173],
        zoom: 12.5,
        pitch: 45,
        bearing: -10
      },
      image: "./assets/03_first_call.jpeg"
    },

    {
      id: "talking-forever-2010",
      title: "19 Oct 2010 • And We Never Stopped",
      description:
        "From two different cities, we started talking… and somehow never stopped.",
      location: {
        center: [82.9739, 25.3176], // Varanasi
        zoom: 11.5,
        pitch: 45,
        bearing: 0
      },
      image: "./assets/04_varanasi_kota.jpg"
    },

    {
      id: "first-meeting-2011",
      title: "16 Feb 2011 • First Meeting",
      description:
        "Our first meeting. A rose, chocolates, and a moment that became permanent.",
      location: {
        center: [75.8391, 25.1737], // Kota
        zoom: 12.5,
        pitch: 50,
        bearing: 15
      },
      image: "./assets/05_kota.jpg"
    },

    {
      id: "reunion-2016",
      title: "2 Sep 2016 • Found Each Other Again",
      description:
        "After years of distance, Jaipur witnessed us finding each other again.",
      location: {
        center: [75.7873, 26.9124],
        zoom: 12.5,
        pitch: 50,
        bearing: 10
      },
      image: "./assets/06_jaipur_reunion.jpg"
    },

    {
      id: "jaipur-2017",
      title: "18 Jan 2017 • Meant to Continue",
      description:
        "One more meeting, one more proof that we were always meant to continue.",
      location: {
        center: [75.7873, 26.9124],
        zoom: 12.3,
        pitch: 50,
        bearing: -10
      },
      image: "./assets/07_jaipur_again.jpg"
    },

    {
      id: "indore-trip-2018",
      title: "April 2018 • First Trip Together",
      description:
        "Our first trip together, turning memories into a shared life.",
      location: {
        center: [75.8577, 22.7196],
        zoom: 12,
        pitch: 50,
        bearing: 0
      },
      image: "./assets/08_indore.jpg"
    },

    {
      id: "roka-2018",
      title: "6 May 2018 • Love Became Family",
      description:
        "The day our love became a family promise. What began quietly was now blessed openly.",
      location: {
        center: [76.3650, 26.0173],
        zoom: 12.8,
        pitch: 50,
        bearing: 15
      },
      image: "./assets/09_roka.jpg"
    },

    {
      id: "second-trip-jaipur-2018",
      title: "July 2018 • Certain Together",
      description:
        "A simple trip, a familiar city, and the comfort of knowing we were sure.",
      location: {
        center: [75.7873, 26.9124],
        zoom: 12.3,
        pitch: 50,
        bearing: 0
      },
      image: "./assets/10_jaipur_trip.jpg"
    },

    {
      id: "engagement-2019",
      title: "15 Feb 2019 • Engagement",
      description:
        "The day we made our promise official, surrounded by family and faith.",
      location: {
        center: [76.3650, 26.0173],
        zoom: 13,
        pitch: 55,
        bearing: -15
      },
      image: "./assets/11_engagement.jpg"
    },

    {
      id: "marriage-2019",
      title: "21 Feb 2019 • Marriage",
      description:
        "The day you became my forever. Our real journey began.",
      location: {
        center: [76.3650, 26.0173],
        zoom: 13,
        pitch: 55,
        bearing: 0
      },
      image: "./assets/12_wedding.jpg"
    },

    {
      id: "honeymoon-andaman-2019",
      title: "1 Mar 2019 • Honeymoon",
      description:
        "Our honeymoon, where the ocean felt like a celebration of us.",
      location: {
        center: [92.7265, 11.7401], // Port Blair
        zoom: 11,
        pitch: 50,
        bearing: 0
      },
      image: "./assets/13_andaman.jpg"
    },

    {
      id: "baby-born-2023",
      title: "18 Jan 2023 • Our Son Arrived",
      description:
        "The day our son arrived. Life became bigger than us.",
      location: {
        center: [73.0668, 19.0368], // Kharghar
        zoom: 12.5,
        pitch: 50,
        bearing: 0
      },
      image: "./assets/14_baby.jpg"
    },

    {
      id: "two-years-2025",
      title: "18 Jan 2025 • Love Multiplied",
      description:
        "Two years of fatherhood, laughter, and love multiplying.",
      location: {
        center: [73.0668, 19.0368],
        zoom: 12,
        pitch: 45,
        bearing: 0
      },
      image: "./assets/15_birthday2.jpg"
    },

    {
      id: "closing-anniversary",
      title: "Happy Anniversary, Ruchika ❤️",
      description:
        "From 2009 to today… every place led me to you. Next chapter: together, always.",
      location: {
        center: [78.9629, 20.5937], // India wide closing view
        zoom: 4,
        pitch: 0,
        bearing: 0
      },
      image: "./assets/16_closing.jpg"
    }
    ]
};
