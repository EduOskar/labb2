import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default {
    name: "Oskar Åhling",
    title: "Fullstack developer",

    birthday: "1995-05-19",
    email: "oskarahling_95@hotmail.com",
    adress: "Fridhemsgatan 21",
    phone: "070 213 81 49",

    socials: {
        Linkedin: {
           link: "https://www.linkedin.com/in/oskar-%C3%A5hling-708a99162/",
           text: "MyLinkedIn",
           icon: <LinkedInIcon />,
        },
        Facebook: {
            link: "https://www.facebook.com/oskar.ahling/",
            text: "MyFacebook ",
            icon: <FacebookIcon />,
        },
        Github: {
            link: "https://github.com/EduOskar",
            text: "MyGithub",
            icon: <GitHubIcon />,
         }
    }
}