import * as React from "react"
import { Dimensions } from "react-native"
import Svg, { Circle, Defs, Ellipse, G, Image, LinearGradient, Path, Pattern, Stop, Use } from "react-native-svg"

const { width, height } = Dimensions.get("window")

export const Syllabus = () => {
    return (
        <Svg
            height={width * 0.09}
            width={width * 0.09}
            viewBox="0 0 512 512"
            fill="#fff"
            stroke="#fff"
        >
            <Path
                d="M44.915 54.466c0-25.711 21.323-46.63 47.536-46.63 26.21 0 68.463 10.338 68.463 36.049V213.32c0 8.73 3.674 15.806-5.224 15.806h-18.55c-3.616 4.884-9.403 8.063-15.947 8.063a19.785 19.785 0 01-14.106-5.89c-3.598 3.635-8.588 5.89-14.106 5.89s-10.509-2.255-14.106-5.89a19.787 19.787 0 01-14.106 5.89c-10.964 0-19.853-8.889-19.853-19.853V54.466z"
                fill="#78b591"
            />
            <Path
                d="M66.108 76.409c0-25.711 21.322-46.63 47.535-46.63 13.99 0 32.55 2.947 46.817 9.603-4.61-22.421-43.388-31.545-68.01-31.545-26.212 0-47.534 20.919-47.534 46.63V217.34c0 10.964 8.889 19.853 19.853 19.853.493 0 .976-.039 1.459-.074-.073-.611-.12-160.71-.12-160.71z"
                opacity={0.1}
            />
            <Path
                d="M91.644 7.837h.806c-.589 0-1.173.023-1.758.044.248-.029.557-.044.952-.044z"
                fill="#8cc63f"
            />
            <Path
                d="M139.983 54.466c0-25.711-21.322-46.63-47.532-46.63h327.1c26.21 0 47.532 20.918 47.532 46.63v433.891c0 8.73-7.214 15.806-16.112 15.806H156.097c-8.898 0-16.114-7.076-16.114-15.806V54.466h0z"
                fill="#e1f4f2"
            />
            <Path
                d="M172.919 488.357V54.466c0-25.711-21.322-46.63-47.532-46.63H92.45c26.21 0 47.532 20.919 47.532 46.63v433.89c0 8.73 7.216 15.806 16.114 15.806h32.936c-8.897.001-16.113-7.075-16.113-15.805z"
                opacity={0.1}
            />
            <Ellipse cx={307.418} cy={88.064} rx={50.109} ry={33.729} fill="#fff" />
            <Path
                d="M279.079 88.063c0-16.111 16.787-29.575 39.227-32.922a73.888 73.888 0 00-10.882-.807c-27.674 0-50.109 15.102-50.109 33.728 0 18.629 22.435 33.73 50.109 33.73 3.739 0 7.377-.284 10.882-.807-22.44-3.345-39.227-16.81-39.227-32.922z"
                opacity={0.1}
            />
            <Path
                d="M407.509 222.041h-96.653a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h96.653a7.837 7.837 0 017.837 7.837 7.837 7.837 0 01-7.837 7.837zM407.509 269.061h-96.653a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h96.653a7.837 7.837 0 017.837 7.837 7.837 7.837 0 01-7.837 7.837zM407.509 316.081h-96.653c-4.329 0-7.837-3.509-7.837-7.837s3.508-7.837 7.837-7.837h96.653c4.329 0 7.837 3.509 7.837 7.837s-3.508 7.837-7.837 7.837zM254.693 222.041h-50.939a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h50.939a7.837 7.837 0 017.837 7.837 7.837 7.837 0 01-7.837 7.837zM254.693 269.061h-50.939a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h50.939a7.837 7.837 0 017.837 7.837 7.837 7.837 0 01-7.837 7.837zM254.693 316.081h-50.939c-4.329 0-7.837-3.509-7.837-7.837s3.508-7.837 7.837-7.837h50.939c4.329 0 7.837 3.509 7.837 7.837s-3.508 7.837-7.837 7.837zM254.693 363.101h-50.939a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h50.939a7.837 7.837 0 017.837 7.837 7.837 7.837 0 01-7.837 7.837zM407.509 169.796H203.754a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h203.755a7.837 7.837 0 017.837 7.837 7.837 7.837 0 01-7.837 7.837zM407.509 412.212H203.754c-4.329 0-7.837-3.509-7.837-7.837s3.508-7.837 7.837-7.837h203.755c4.329 0 7.837 3.509 7.837 7.837s-3.508 7.837-7.837 7.837zM254.693 451.918h-50.939a7.837 7.837 0 01-7.837-7.837 7.837 7.837 0 017.837-7.837h50.939a7.837 7.837 0 017.837 7.837 7.836 7.836 0 01-7.837 7.837z"
                fill="#78b591"
            />
            <Path d="M249.478 88.063c0 23.309 25.453 41.567 57.946 41.567 32.493 0 57.946-18.259 57.946-41.567 0-23.307-25.453-41.565-57.946-41.565s-57.946 18.257-57.946 41.565zm100.218 0c0 14.036-19.358 25.894-42.272 25.894s-42.272-11.859-42.272-25.894 19.358-25.892 42.272-25.892 42.272 11.858 42.272 25.892z" />
            <Path d="M467.083 429.975a7.837 7.837 0 007.837-7.837V54.466C474.92 24.434 450.08 0 419.549 0H92.45C61.919 0 37.079 24.434 37.079 54.466v17.632c0 4.328 3.508 7.837 7.837 7.837s7.837-3.509 7.837-7.837V54.466c-.001-21.39 17.807-38.793 39.697-38.793 21.889 0 39.696 17.403 39.696 38.793v168.626a7.72 7.72 0 00-1.304 1.372c-2.302 3.109-5.818 4.891-9.649 4.891-3.229 0-6.26-1.266-8.537-3.566a7.835 7.835 0 00-11.138 0 11.929 11.929 0 01-8.537 3.566c-2.251 0-4.399-.628-6.269-1.781v-42.51a7.837 7.837 0 10-15.674 0v42.51a11.899 11.899 0 01-6.269 1.781c-6.626 0-12.016-5.391-12.016-12.016v-108.67c0-4.328-3.508-7.837-7.837-7.837s-7.837 3.509-7.837 7.837v108.669c0 15.268 12.422 27.69 27.69 27.69 5.046 0 9.882-1.34 14.106-3.852 4.225 2.512 9.06 3.852 14.106 3.852s9.882-1.34 14.106-3.852c4.225 2.512 9.06 3.852 14.106 3.852a27.51 27.51 0 0010.954-2.295v245.623c0 13.037 10.745 23.643 23.951 23.643h294.873c13.205 0 23.949-10.606 23.949-23.643v-34.871c0-4.328-3.508-7.837-7.837-7.837s-7.837 3.509-7.837 7.837v34.871c0 4.395-3.713 7.969-8.276 7.969H156.097c-4.564 0-8.278-3.576-8.278-7.969V54.466c0-15.169-6.335-28.908-16.54-38.793H419.55c21.889 0 39.696 17.403 39.696 38.793v367.672a7.836 7.836 0 007.837 7.837z" />
        </Svg>
    )
}

export const Notes = () => {
    return (
        <Svg
            viewBox="0 0 512 512"
            height={width * 0.09}
            width={width * 0.09}
            fill="#161719"
        >
            <Path
                d="M439.242 19.941h-32.876v.999l-279.175-.999H72.758c-35.959 0-65.213 29.254-65.213 65.213l.539 313.128h118.568l377.802-10.779V85.154c.001-35.959-29.253-65.213-65.212-65.213z"
                fill="#ff7856"
            />
            <Path
                d="M363.251 19.941H407.445V322.82899999999995H363.251z"
                fill="#fed422"
            />
            <Path
                d="M7.545 85.154c0-35.959 29.254-65.213 65.213-65.213h54.434l-.539 378.341H8.084L7.545 85.154z"
                fill="#ff6342"
            />
            <Path
                d="M493.379 277.136c-5.134 25.007-26.545 43.765-52.061 44.583-.69.023-367.571.033-367.571.033-35.786 0-65.649 28.418-66.195 64.199-.555 36.42 28.909 66.225 65.205 66.225h366.484c35.959 0 65.213-29.254 65.213-65.213l-.539-161.145-10.536 51.318z"
                fill="#ece5dd"
            />
            <Path
                d="M406.366 322.829V19.941h32.876c35.959 0 65.213 29.254 65.213 65.213v172.463c0 35.959-29.254 65.213-65.213 65.213h-32.876z"
                fill="#ff7856"
            />
            <Path
                d="M439.242 386.425H7.559c-.002.18-.014.358-.014.539 0 35.959 29.254 65.213 65.213 65.213h366.484c35.959 0 65.213-29.254 65.213-65.213v-43.396l-15.329 18.961c-12.277 15.187-30.459 23.896-49.884 23.896z"
                fill="#d9cbbd"
            />
            <Path
                d="M191.326 473.798L147.672 495.624 147.672 386.425 234.981 386.425 234.981 495.624z"
                fill="#fed422"
            />
            <Path
                d="M493.379 277.136c-2.875 14.003-10.855 26.044-21.8 34.074v132.348c19.621-11.255 32.876-32.399 32.876-56.595l-.539-161.145-10.537 51.318z"
                fill="#d9cbbd"
            />
            <Path
                d="M471.579 377.637v65.922c19.621-11.255 32.876-32.399 32.876-56.595v-43.396l-15.329 18.961a64.547 64.547 0 01-17.547 15.108z"
                fill="#c0ab91"
            />
            <Path
                d="M471.579 28.559V314.21c19.621-11.254 32.876-32.398 32.876-56.594V85.154c0-24.196-13.255-45.34-32.876-56.595z"
                fill="#ff6342"
            />
            <Path d="M439.242 10.779H72.758C32.639 10.779 0 43.417 0 83.537v301.81c0 40.119 32.639 72.758 72.758 72.758h67.368v35.032a8.083 8.083 0 0011.699 7.231l39.501-19.75 39.501 19.75a8.088 8.088 0 007.865-.353 8.086 8.086 0 003.834-6.877v-35.032h196.716c40.119 0 72.758-32.639 72.758-72.758V83.537c0-40.12-32.639-72.758-72.758-72.758zm-67.368 16.168h26.947v285.642h-26.947V26.947zM16.168 83.537c0-31.204 25.385-56.589 56.589-56.589h45.811V312.59h-45.81c-22.837 0-43.241 10.585-56.589 27.097V83.537zm210.19 396.519l-31.416-15.708a8.082 8.082 0 00-7.23 0l-31.416 15.708v-86.625h70.063v86.625zm269.474-94.709c0 31.204-25.385 56.589-56.589 56.589H242.526v-48.505h196.716c22.837 0 43.241-10.585 56.589-27.097v19.013zm0-64.674c0 31.254-25.336 56.589-56.589 56.589H126.991c-4.427 0-8.287 3.41-8.419 7.835a8.084 8.084 0 008.081 8.333h13.474v48.505H73.708c-30.987 0-56.941-24.515-57.528-55.496-.601-31.702 25.011-57.682 56.579-57.682h201.028a8.084 8.084 0 000-16.168h-139.05V26.947h220.968v285.642h-46.274a8.084 8.084 0 000 16.168h129.811c22.837 0 43.241-10.585 56.589-27.097v19.013zm0-64.673c0 31.204-25.385 56.589-56.589 56.589H414.99V26.947h24.253c31.204 0 56.589 25.386 56.589 56.589V256z" />
        </Svg>
    )
}

export const Qp = () => {
    return (
        <Svg
            height={width * 0.09}
            width={width * 0.09}
            viewBox="0 0 512 512"
            fill="#fff"
            stroke="#fff"
        >
            <Path
                d="M461 93.31v390H61v-390h33.52l-.09.06h355.24c.65 0 1.3-.02 1.95-.06H461z"
                fill="#f0f1f1"
            />
            <Path
                d="M71.47 294.81v-190h33.52l-.09.06h355.24c.287 0 .573-.019.86-.026V93.31h-9.38c-.65.04-1.3.06-1.95.06H94.43l.09-.06H61v390h10.47v-188.5z"
                fill="#dee0e0"
            />
            <Path d="M361 403.31H401V433.31H361z" fill="#ff7979" />
            <Path
                d="M367.75 410.685L401 410.685 401 403.31 361 403.31 361 433.31 367.75 433.31z"
                fill="#d65b5b"
            />
            <Path d="M361 243.31H401V403.31H361z" fill="#febe76" />
            <Path
                d="M368.125 251.56L401 251.56 401 243.31 361 243.31 361 403.31 368.125 403.31z"
                fill="#e8a664"
            />
            <Path d="M381 183.31L401 243.31 361 243.31z" fill="#57606f" />
            <Path
                d="M384.958 195.185L381 183.31 361 243.31 368.917 243.31z"
                fill="#414a56"
            />
            <Path
                d="M471.9 39.58c5.64 5.76 9.1 13.7 9.1 22.46 0 16.41-12.8 30.26-29.38 31.27H94.52c10.54-6.46 17.42-18.41 17.42-31.73 0-12.9-6.45-24.42-16.59-31.33h354.32c8.75 0 16.59 3.57 22.23 9.33z"
                fill="#ffebbe"
            />
            <Path
                d="M105.574 40.583H452.91c8.75 0 16.59 3.57 22.23 9.33a31.8 31.8 0 015.557 7.726c-.948-7.002-4.119-13.282-8.797-18.06-5.641-5.76-13.48-9.33-22.23-9.33H95.35a38.134 38.134 0 0110.224 10.334zM115.18 71.914a37.72 37.72 0 00-3.742-16.409c.319 1.983.502 4.009.502 6.076 0 13.32-6.88 25.27-17.42 31.73h14.048a37.77 37.77 0 006.612-21.397z"
                fill="#e5d0a8"
            />
            <Path
                d="M95.35 30.25c10.14 6.91 16.59 18.43 16.59 31.33 0 13.32-6.88 25.27-17.42 31.73H61v190H31v-210c0-26.26 20.12-46.75 46.38-44.44l17.97 1.38z"
                fill="#f0dca0"
            />
            <Path
                d="M39 80.643c0-26.26 20.12-46.75 46.38-44.44l17.97 1.38a.07.07 0 01.01.008 38.185 38.185 0 00-8.01-7.341l-17.97-1.38C51.12 26.56 31 47.05 31 73.31v210h8V80.643z"
                fill="#ddc792"
            />
            <Path d="M311 133.31H331V153.31H311z" />
            <Path d="M271 133.31H291V153.31H271z" />
            <Path d="M231 133.31H251V153.31H231z" />
            <Path d="M191 133.31H211V153.31H191z" />
            <Path d="M461 488.31H61a5 5 0 01-5-5v-390a5 5 0 015-5h400a5 5 0 015 5v390a5 5 0 01-5 5zm-395-10h390v-380H66v380z" />
            <Path d="M449.67 98.37H94.43a5 5 0 010-10h355.24c.548 0 1.095-.017 1.643-.051C465.157 87.476 476 75.933 476 62.04c0-7.175-2.725-13.909-7.672-18.962-4.943-5.048-11.569-7.828-18.658-7.828H95.35a5 5 0 010-10h354.32c9.8 0 18.963 3.847 25.803 10.832C482.262 43.015 486 52.234 486 62.04c0 19.169-14.968 35.097-34.076 36.261-.746.046-1.505.069-2.254.069z" />
            <Path d="M61 288.31H31a5 5 0 01-5-5v-210c0-14.581 5.807-28.262 15.932-37.535 9.663-8.851 22.406-13.071 35.886-11.886l17.915 1.375c.872.067 1.71.361 2.433.854 11.755 8.011 18.774 21.268 18.774 35.462a5 5 0 01-10 0 32.897 32.897 0 00-13.353-26.451l-16.59-1.274c-10.706-.943-20.741 2.361-28.312 9.294C40.624 50.534 36 61.527 36 73.31v205h25a5 5 0 110 10z" />
            <Path d="M94.483 98.32c-1.613 0-3.198-.763-4.158-2.191-1.54-2.292-.976-5.369 1.316-6.909.058-.039.207-.137.266-.173 9.272-5.683 15.033-16.208 15.033-27.467a5 5 0 0110 0c0 14.704-7.581 28.488-19.785 35.979a5.049 5.049 0 01-2.672.761zM321 198.31H101a5 5 0 010-10h220a5 5 0 110 10zM321 238.31H101a5 5 0 010-10h220a5 5 0 110 10zM321 278.31H101a5 5 0 110-10h220c2.762 0 5 2.238 5 5s-2.238 5-5 5zM321 318.31H101a5 5 0 110-10h220c2.762 0 5 2.238 5 5s-2.238 5-5 5zM321 358.31H101a5 5 0 110-10h220c2.762 0 5 2.238 5 5s-2.238 5-5 5zM321 398.31H101a5 5 0 110-10h220c2.762 0 5 2.238 5 5s-2.238 5-5 5zM321 438.31h-65.18a5 5 0 110-10H321c2.762 0 5 2.238 5 5s-2.238 5-5 5zM401 408.31a5 5 0 01-5-5v-160a5 5 0 1110 0v160a5 5 0 01-5 5zM361 408.31a5 5 0 01-5-5v-160a5 5 0 1110 0v160a5 5 0 01-5 5z" />
            <Path d="M401 438.31h-40a5 5 0 01-5-5v-30a5 5 0 015-5h40a5 5 0 015 5v30a5 5 0 01-5 5zm-35-10h30v-20h-30v20zM401 248.31h-40a5 5 0 01-4.744-6.581l20-60a5 5 0 019.486 0l20 60a4.995 4.995 0 01-.687 4.504A4.994 4.994 0 01401 248.31zm-33.062-10h26.125L381 199.122l-13.062 39.188z" />
            <Path d="M431 408.31h-30c-2.762 0-5-2.238-5-5s2.238-5 5-5h25v-65c0-2.762 2.238-5 5-5s5 2.238 5 5v70a5 5 0 01-5 5z" />
        </Svg>
    )
}

export const OtherRes = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470 470"
            xmlSpace="preserve"
            height={width * 0.09}
            width={width * 0.09}
        >
            <Path
                d="M383.75 334.786H425V28.251H263.732c-9.056 0-17.462 4.514-22.485 12.074a7.501 7.501 0 01-12.493 0c-5.025-7.561-13.431-12.075-22.486-12.075H45v306.535h161.268a41.895 41.895 0 0128.731 11.364 41.896 41.896 0 0128.733-11.364h20.018a7.5 7.5 0 017.5 7.498h15V118.749c0-.25.013-.5.038-.747.02-.204.054-.403.09-.601.008-.042.011-.084.019-.126a7.44 7.44 0 01.459-1.478l19.974-47.932a7.5 7.5 0 0113.846.001l19.968 47.927c.203.471.358.967.461 1.483.008.038.01.077.018.115a7.274 7.274 0 01.129 1.359v223.535h15a7.497 7.497 0 017.498-7.499zm-191.285-25H77.5a7.5 7.5 0 01-7.5-7.5v-63.395c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v55.895h16.655v-25.895c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v25.895h16.654v-55.895c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v55.895h16.655v-25.895c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v25.895h12.5c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.499 7.5zm0-99.023H77.5c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h114.965a7.5 7.5 0 010 15zm0-35.628H77.5c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h114.965a7.5 7.5 0 010 15zM70 132.007a7.5 7.5 0 017.5-7.5h57.482c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5H77.5a7.5 7.5 0 01-7.5-7.5zm122.465-28.128H77.5c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h114.965a7.5 7.5 0 010 15zm0-35.628H77.5c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h114.965a7.5 7.5 0 010 15zM242.5 319.023c0 4.142-3.357 7.5-7.5 7.5s-7.5-3.358-7.5-7.5V66.175c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v252.848z"
                fill="#fff"
            />
            <Path
                d="M206.268 364.786a41.921 41.921 0 0121.232 5.763v-10.42a26.937 26.937 0 00-21.232-10.343H37.5v15h168.768zM383.75 364.786h48.75v-15h-48.75a7.5 7.5 0 01-7.5-7.5c0-.002-15-.002-15-.002v30h15a7.5 7.5 0 017.5-7.498zM291.25 342.286a7.5 7.5 0 01-7.5 7.5h-20.018a26.931 26.931 0 00-21.232 10.343v10.419a41.918 41.918 0 0121.232-5.762h20.018a7.5 7.5 0 017.5 7.498h15v-30s-15 0-15 .002z"
                fill="#c1e8e6"
            />
            <Path
                d="M291.25 372.286a7.5 7.5 0 01-7.5 7.5h-20.018a26.95 26.95 0 00-22.487 12.062 7.68 7.68 0 01-.524.691c-.051.06-.105.115-.158.174a7.353 7.353 0 01-1.118 1.013c-.059.043-.115.089-.175.131a7.472 7.472 0 01-.725.448c-.256.136-.509.25-.766.353-.065.026-.131.048-.197.072a7.465 7.465 0 01-1.481.377c-.078.011-.155.027-.234.036-.283.033-.57.053-.862.054a7.55 7.55 0 01-.873-.054c-.076-.009-.15-.023-.225-.034a7.062 7.062 0 01-1.494-.379c-.063-.023-.126-.044-.189-.069a7.477 7.477 0 01-.766-.352 7.352 7.352 0 01-.731-.451c-.057-.039-.111-.083-.167-.125a7.442 7.442 0 01-.492-.394c-.069-.06-.136-.122-.203-.184a7.559 7.559 0 01-.433-.444c-.051-.056-.104-.11-.153-.168a7.547 7.547 0 01-.521-.686c-5.03-7.559-13.436-12.069-22.493-12.069H37.5c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5v-15a7.5 7.5 0 01-7.5-7.5V88.251H15v306.535h191.268c3.835 0 7.411 1.825 9.676 4.909l6.432 7.502 25.254-.002 6.429-7.502a11.976 11.976 0 019.675-4.907h42.518v-22.502c-.002 0-15.002 0-15.002.002zM440 342.286a7.5 7.5 0 01-7.5 7.5v15c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5h-48.75a7.5 7.5 0 01-7.5-7.5c0-.002-15-.002-15-.002v22.502H455V88.251h-15v254.035z"
                fill="#98d9d5"
            />
            <Path
                d="M192.465 294.786h-12.5v-25.895c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v25.895H148.31v-55.895c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v55.895h-16.654v-25.895c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v25.895H85v-55.895c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v63.395a7.5 7.5 0 007.5 7.5h114.965a7.5 7.5 0 000-15zM192.465 53.251H77.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h114.965a7.5 7.5 0 000-15zM192.465 88.879H77.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h114.965a7.5 7.5 0 000-15zM77.5 139.507h57.482c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H77.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zM192.465 160.135H77.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h114.965a7.5 7.5 0 000-15zM192.465 195.763H77.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h114.965a7.5 7.5 0 000-15zM235 58.675a7.5 7.5 0 00-7.5 7.5v252.848c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V66.175c0-4.143-3.357-7.5-7.5-7.5z"
                fill="#082947"
            />
            <Path
                d="M462.5 73.251H440v-52.5a7.5 7.5 0 00-7.5-7.5H263.732A41.879 41.879 0 00235 24.624a41.883 41.883 0 00-28.732-11.373H37.5a7.5 7.5 0 00-7.5 7.5v52.5H7.5a7.5 7.5 0 00-7.5 7.5v321.535a7.5 7.5 0 007.5 7.5h197.337l8.396 9.793a7.5 7.5 0 005.694 2.618l32.152-.003c2.189 0 4.27-.957 5.694-2.62l8.389-9.789h41.087v27.463c0 10.752 8.748 19.5 19.502 19.5h16c10.751 0 19.498-8.748 19.498-19.5v-27.463H462.5a7.5 7.5 0 007.5-7.5V80.751a7.5 7.5 0 00-7.5-7.5zM455 394.786h-93.75V118.749c0-.25-.013-.499-.038-.747a7.708 7.708 0 00-.091-.612c-.007-.038-.01-.077-.018-.115a7.446 7.446 0 00-.461-1.483l-19.968-47.927a7.5 7.5 0 00-13.846-.001l-19.974 47.932c-.201.47-.356.964-.459 1.478-.008.042-.011.084-.019.126-.036.198-.07.398-.09.601a7.443 7.443 0 00-.038.747v276.037H263.73a11.976 11.976 0 00-9.675 4.907l-6.429 7.502-25.254.002-6.432-7.502a11.988 11.988 0 00-9.676-4.909H15V88.251h15v254.035a7.5 7.5 0 007.5 7.5h168.768a26.936 26.936 0 0121.232 10.343v10.42a41.921 41.921 0 00-21.232-5.763H37.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h168.768a26.96 26.96 0 0122.488 12.063c.165.246.339.473.525.692.049.058.102.112.153.168a7.559 7.559 0 00.636.628c.158.138.323.269.492.394.056.041.11.085.167.125.234.163.477.314.73.45a7.6 7.6 0 00.767.353c.062.025.126.046.189.069a7.328 7.328 0 001.494.379c.075.011.149.025.225.034.285.033.574.054.868.054.297 0 .583-.021.867-.054.079-.009.156-.024.234-.036a7.675 7.675 0 00.866-.18c.209-.057.414-.123.615-.197.066-.024.132-.046.197-.072.258-.103.51-.217.753-.346.265-.141.506-.292.739-.454.06-.041.116-.087.175-.131a7.523 7.523 0 00.691-.575c.149-.14.291-.286.427-.438.053-.058.107-.114.158-.174.185-.218.358-.444.517-.682 5.029-7.561 13.435-12.071 22.494-12.071h20.018a7.5 7.5 0 000-15h-20.018a41.918 41.918 0 00-21.232 5.762v-10.419a26.934 26.934 0 0121.232-10.343h20.018a7.5 7.5 0 000-15h-20.018a41.896 41.896 0 00-28.733 11.364 41.9 41.9 0 00-28.731-11.364H45V28.251h161.268c9.056 0 17.461 4.514 22.486 12.075a7.498 7.498 0 0012.493 0c5.023-7.561 13.43-12.074 22.485-12.074H425v306.535h-41.25a7.5 7.5 0 100 15h48.75a7.5 7.5 0 007.5-7.5V88.251h15v306.535zm-113.248 46.963h-16c-2.44 0-4.502-2.061-4.502-4.5v-13.5h25v13.5c0 2.439-2.06 4.5-4.498 4.5zm-20.502-33v-15h25v15h-25zm3.75-297.5l8.751-21 8.749 21H325zm-3.75 15h25v252.5h-25v-252.5z"
                fill="#082947"
            />
            <Path
                d="M376.25 372.284a7.5 7.5 0 007.5 7.502h48.75c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-48.75a7.5 7.5 0 00-7.5 7.498z"
                fill="#082947"
            />
            <Path
                d="M321.25 423.749v13.5c0 2.439 2.062 4.5 4.502 4.5h16c2.438 0 4.498-2.061 4.498-4.5v-13.5h-25z"
                fill="#f2484b"
            />
            <Path d="M321.25 393.749H346.25V408.749H321.25z" fill="#6da8d6" />
            <Path d="M321.25 126.249H346.25V378.749H321.25z" fill="#ffcc75" />
            <Path d="M325 111.249L342.5 111.249 333.751 90.249z" fill="#f2ebd9" />
        </Svg>
    )
}


export function ReportIconWhite(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H12.5V12.5H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_828_2611" transform="scale(.00195)" />
        </Pattern>
        <Image
          id="image0_828_2611"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export function ShareIcon(props) {
  return (
        <Svg
        width={30}
        height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.611 12.4l1.207 6.135c.228 1.159 1.785 1.39 2.338.347l5.865-11.04c.227-.426.18-.898-.047-1.258M9.61 12.4L5.226 8.155C4.416 7.371 4.972 6 6.1 6h11.814c.463 0 .844.24 1.06.584M9.612 12.4l9.363-5.816m.081-.05l-.081.05"
        stroke="#fff"
        strokeWidth={0.744}
      />
    </Svg>
  )
}

export function UploadIcon (props) {
  return (
      <Svg
        width={30}
        height={30}
      viewBox="0 0 24 24"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#161719"
      strokeWidth={0.01024}
      {...props}
    >
      <Path d="M312.686 370.688a36.571 36.571 0 010 73.143H164.57a73.143 73.143 0 00-73.142 73.143v292.571a73.143 73.143 0 0073.142 73.143h658.286A73.143 73.143 0 00896 809.545V516.974a73.143 73.143 0 00-73.143-73.143h-149.43a36.571 36.571 0 010-73.143h149.43a146.286 146.286 0 01146.286 146.286v292.571a146.286 146.286 0 01-146.286 146.286H164.571A146.286 146.286 0 0118.286 809.545V516.974A146.286 146.286 0 01164.57 370.688h148.115zM457.143 136.85l-150.016 148.7c-11.557 11.556-35.84 14.994-47.47 3.51a33.792 33.792 0 010-45.202L468.846 34.962c5.559-5.559 17.335-12.873 25.16-12.873 7.827 0 20.115 7.314 25.6 12.873l208.165 206.556a32.402 32.402 0 010 44.105 29.55 29.55 0 01-41.837-.073L530.286 132.974v593.188c0 16.311-18.36 29.55-34.743 29.55-16.311 0-38.4-13.166-38.4-29.55V136.85z" />
    </Svg>
  )
}

export function ShareIconImg (){
    return (
     <Svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <Path
        d="M9.611 12.4l1.207 6.135c.228 1.159 1.785 1.39 2.338.347l5.865-11.04c.227-.426.18-.898-.047-1.258M9.61 12.4L5.226 8.155C4.416 7.371 4.972 6 6.1 6h11.814c.463 0 .844.24 1.06.584M9.612 12.4l9.363-5.816m.081-.05l-.081.05"
        stroke="#161719"
        strokeWidth={1.056}
      />
    </Svg>
  )
}

export function AppLogo (){
      return (
        <Svg
          width="171.68617mm"
          height="158.64034mm"
          viewBox="0 0 171.68617 158.64034"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          >
          <Path
            d="M19.458 56.685l1.112 115.779c22.028 1.188 31.834 5.475 50.919 13.902l-5.562-21.424c-8.75-4.05-18.103-5.775-27.56-7.749l-.618-97.66c-5.944-1.844-12.103-2.244-18.291-2.848z"
            transform="translate(-19.458 -56.685)"
            fill="#1a1a1a"
            strokeWidth={0.83599}
          />
          <Path
            d="M31.129 57.92c71.412 16.927 104.286 36.115 103.03 99.579-.973 27.274-9.69 39.345-28.909 57.826C73.613 175.653 69 148.557 87.936 107.842l11.141 11.684c-11.23 28.973-5.64 43.342 7.842 69.304 22.623-37.468 12.878-81.452-38.145-103.513-10.12-4.21-20.102-7.89-31.04-9.258z"
            transform="translate(-19.458 -56.685)"
            fill="#1a1a1a"
            strokeWidth={0.836798}
          />
          <Path
            d="M110.972 83.456l12.403 11.65c20.775-12.733 44.23-17.922 67.35-25.331v-13.04c-33.068 3.595-52.805 12.858-79.753 26.72z"
            transform="translate(-19.458 -56.685)"
            fill="#1a1a1a"
            strokeWidth={0.83599}
          />
          <Path
            d="M190.725 69.614l.42 101.22c-20.676 2.097-34.865 8-53.44 15.742l5.223-21.002c9.163-4.08 19.795-6.178 29.647-8.135l-.338-82.634z"
            transform="translate(-19.458 -56.685)"
            fill="#1a1a1a"
            strokeWidth={0.83599}
          />
        </Svg>
      );
} 