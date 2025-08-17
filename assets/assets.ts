import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import profile_img_head from './profile-img-head.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import app_logo from './app-logo.png';
import sidebar_logo from './side-bar-logo.png';
import cube_logo from './cube-logo.png';
import gear_logo from './gear-logo.png';
import postgress_logo from './postgress.png';
import angular_logo from './angular-js-logo.png';
import vue_js_logo from './vue-js-logo.png';
import php_logo from './php_logo_icon.png';
import react_js_logo from './react.png';
import mysql_logo from './mysql-5-logo.png';
import node_logo from './node.jpg'

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    profile_img_head,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    app_logo,
    cube_logo,
    gear_logo,
    sidebar_logo,
    postgress_logo,
    angular_logo,
    react_js_logo,
    vue_js_logo,
    php_logo,
    mysql_logo,
    node_logo
};

export interface WorkDataWeb {
    title: string,
    description: string,
    features: string[],
    bgImage: string,
    images: string[],
    githubLink: string,
    githubLink2?: string,
    liveLink: string,
}

export const workDataWeb: WorkDataWeb[] = [
    {
        title: 'Online Shoes Project',
        description: 'eCommerse site with admin control, product management and stripe payment integration.',
        features: [
            'Add product and pay via Stripe payment', 
            'Admin control and product management', 
            'NextJs15/Typescript project',
            'Mongodb/Prisma, Shadcn-ui and Tailwindcss', 
            'Better-auth for user authentication', 
            'Nuqs filter to search and page pagination',
            'Zod form validation',
            'Sendgrid email notification',
            'Middleware users and page security',
            'Page cache and image optimization',
            'Images stored in Vercel blob file storage',
            'Hosted in Vercel'],
        bgImage: '/proj-1/1.jpg',
        images: ['/proj-1/1.jpg', '/proj-1/2.jpg', '/proj-1/3.jpg'],
        githubLink: 'https://github.com/IvanAppSolution/shoes-shop',
        liveLink: 'https://shoes-shop-iota.vercel.app',
    },
    {
        title: 'Real Estate Listing',
        description: 'Users add listing for real estate property to advertise.',
        features: [
            'Users add listing for real estate property',
            'Vue3 / Typescript Vite project',
            'Stripe payment integration',
            'Admin control',
            'Mongodb, Primevue-ui, Tailwindcss',
            'ExpressJs server handles api request',
            'JWT token user authentication',
            'Middleware user and page security',
            'Images stored in Cloudinary',
            'Hosted in Netlify serverless'
        ],
        bgImage: '/proj-2/1.jpg',
        images: ['/proj-2/1.jpg', '/proj-2/2.jpg', '/proj-2/3.jpg'],
        githubLink: 'https://github.com/IvanAppSolution/portfolio',
        githubLink2: 'https://github.com/IvanAppSolution/real-estate-listing-server',
        liveLink: 'https://real-estate-listing-proj.netlify.app',
    },
    {
        title: 'Agent Management System',
        description: 'Management system for agents performance and sales tracking.',
        features: [
            'Agents performance and sales tracking', 
            'Show statistics in charts and graphs',
            'Admin control',
            'RemixJs/Typescript ',
            'Postgresql/Prisma ORM',
            'Radix-ui,  Tailwindcss',
            'Zod form validation',
            'User role authentication',            
            'Images stored in Vercel blob',
            'Hosted in Vercel',
            
        ],
        bgImage: '/proj-3/1.jpg',
        images: ['/proj-3/1.jpg', '/proj-3/2.jpg', '/proj-3/3.jpg'],
        githubLink: 'https://github.com/IvanAppSolution/agent-performance',
        liveLink: 'https://agent-performance.vercel.app/login',
    },
    {
        title: 'Shoes Mobile App - (ReactNative / Expo Go)',
        description: 'eCommerse mobile application for running shoes.',
        features: [
            'Mobile app for iOS and Android', 
            'User Sign-up and Sign-in',
            'Product browsing, search, add to cart',
            'ReactNative / Expo Go / Typescript',
            'Connect to Shoes Project API',
            'Better-Auth user authentication'],
        bgImage: '/proj-4/1.png',
        images: ['/proj-4/1.png', '/proj-4/2.png', '/proj-4/3.png'],
        githubLink: 'https://github.com/IvanAppSolution/ecommerce-shoes-app',
        liveLink: '',
    },
    {
        title: 'Expense Tracker App - (ReactNative / Expo Go)',
        description: 'Expense tracker app monitors your personal income and expense.',
        features: [
            'Income / expense history monitoring',
            'User Sign-up and Sign-in',
            'Transaction entry',
            'Data visualization',
            'ReactNative / Expo Go / Typescript',
            'Mobile app for iOS and Android',
            'Firebase / Axios',
            'Images stored in Cloudinary'
        ],
        bgImage: '/proj-5/1.png',
        images: ['/proj-5/1.png', '/proj-5/2.png', '/proj-5/3.png'],
        githubLink: 'https://github.com/IvanAppSolution/expense-tracker-app',
        liveLink: '',
    }
];

export const serviceData = [
    { icon: assets.sidebar_logo, title: 'Applications', description: 'Applications design defines target customer needs and provide features and solutions. ', link: '' },
    { icon: assets.cube_logo, title: 'System & database design', description: 'Implements the application design by defining software requirements.', link: '' },   
    { icon: assets.gear_logo, title: 'Enhancement & Added features', description: 'Improve known issues for application performance. Add features for better service.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'ReactJs, VueJs, NextJs, ExpressJs, Angular, PHP, Sql, TailwindCSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Science in Information Technology (BSIT)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'eCommerce, Sales and Inventory, Time & Attendance, Subscription and Payment transaction' }
];

export const toolsData = [
   assets.react_js_logo, assets.vue_js_logo, assets.angular_logo, assets.node_logo, assets.mysql_logo, assets.postgress_logo, assets.php_logo, assets.vscode, 
];