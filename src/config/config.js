import bharatX from "../Components/Sponsors/logo/bharatX.png"

const config = {
    desktopSwags: {
        wallpaper: {
            download: "1",
            images: ["swag1.jpeg", "swag2.jpg", "swag3.png"],
        },

        zoomBackground: {
            download: "2",
            images: ["swag1.jpeg", "swag2.jpg", "swag3.png"],
        },
    },
    mobileSwags: {
        wallpaper: {
            download: "3",
            images: ["swagmobile1.jpg", "swagmobile2.png", "swagmobile3.jpg"],
        },
        story: {
            download: "4",
            images: ["swagmobile1.jpg", "swagmobile2.png", "swagmobile3.jpg"],
        },
    },

    prizes: [
        {
            website : "https://bharatx.tech/",
            icon: bharatX,
            prices: [
                "30k cash prize winner of Bounty Challenge",
                "Goodies to TOP 50 contributors",
                "Hiring Opportunities",
            ]
            // p1: "BharatX enables Consumer facing apps & websites to give their users Credit, as a Feature, using their APIs in under 60 minutes.",
            // p2: "Enable 110 million middle class households to get access to credit without any income proof."
        }
    ]

};

export default config;
