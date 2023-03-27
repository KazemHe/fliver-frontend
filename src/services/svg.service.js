
const gigSvgs = {
    videoUl: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>',
    twitter: '<svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><g fill="#62646a"><path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path></g></svg>',
    facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#62646a"><path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z"></path></g></svg>',
    linkedIn: '<svg width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg"><g fill="#62646a"><path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z"></path></g></svg>',
    pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#62646a"><path d="M10 0C4.5 0 0 4.5 0 10C0 14.25 2.625 17.875 6.375 19.25C6.25 18.5 6.25 17.25 6.375 16.375C6.5 15.625 7.5 11.375 7.5 11.375C7.5 11.375 7.25 10.875 7.25 10C7.25 8.625 8.125 7.5 9.125 7.5C10 7.5 10.375 8.125 10.375 8.875C10.375 9.75 9.875 11 9.5 12.25C9.25 13.25 10 14 11 14C12.75 14 14.125 12.125 14.125 9.375C14.125 7 12.375 5.25 10 5.25C7.125 5.25 5.5 7.375 5.5 9.625C5.5 10.5 5.875 11.375 6.25 11.875C6.25 12.125 6.25 12.25 6.25 12.375C6.125 12.75 6 13.375 6 13.5C6 13.625 5.875 13.75 5.625 13.625C4.375 13 3.625 11.25 3.625 9.75C3.625 6.625 5.875 3.75 10.25 3.75C13.75 3.75 16.375 6.25 16.375 9.5C16.375 13 14.25 15.75 11.125 15.75C10.125 15.75 9.125 15.25 8.875 14.625C8.875 14.625 8.375 16.5 8.25 17C8 17.875 7.375 19 7 19.625C8 19.875 9 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0Z"></path></g></svg>',
    instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#62646a"><path d="M15.1814 6.06504C15.8442 6.06504 16.3814 5.52778 16.3814 4.86504C16.3814 4.2023 15.8442 3.66504 15.1814 3.66504C14.5187 3.66504 13.9814 4.2023 13.9814 4.86504C13.9814 5.52778 14.5187 6.06504 15.1814 6.06504Z"></path><path d="M10 15C7.2425 15 5 12.7575 5 10C5 7.2425 7.2425 5 10 5C12.7575 5 15 7.2425 15 10C15 12.7575 12.7575 15 10 15ZM10 7.5C8.62125 7.5 7.5 8.62125 7.5 10C7.5 11.3787 8.62125 12.5 10 12.5C11.3787 12.5 12.5 11.3787 12.5 10C12.5 8.62125 11.3787 7.5 10 7.5Z"></path><path d="M15 20H5C2.43 20 0 17.57 0 15V5C0 2.43 2.43 0 5 0H15C17.57 0 20 2.43 20 5V15C20 17.57 17.57 20 15 20ZM5 2.5C3.83125 2.5 2.5 3.83125 2.5 5V15C2.5 16.1912 3.80875 17.5 5 17.5H15C16.1688 17.5 17.5 16.1688 17.5 15V5C17.5 3.83125 16.1688 2.5 15 2.5H5Z"></path></g></svg>',
    GraphicsAndDesign: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path fill="#fff" d="M18 30l2 21h-1v5h28v-5h-2l2-21H18z"></path><path fill="#dee0e2" d="M47 30H18l.2 3H44l-2 19h2v4h3v-5h-2l2-21z"></path></g><g id="stroke"><path class="cls-4" d="M39.5 29.7L49.7 9.8l5.4 2.8-8.9 17.1"></path><path class="cls-4" d="M51 29.2l5.3-10.4-8.9-4.6m-32.5 7.7l4.5 7.8m8.4 0l-6.7-11.8m-.1.9l-5.8 3.7m8.4 7.2l-4.9-9.2m17.8 9.2l.1-12.5-3.4-7.3-3.2 7.6v12.2m6.1-11.9l-6.1.3m3.3 11.6l-.2-10.8m12.5 31.9L47.3 30H18.2l1.6 20.8m-1.4 5.4h28.7v-5H18.4v5zM11.7 8.3a14.7 14.7 0 00-.2 8.9c1.5 4.1 5.1 5 7.9 1.7a2.4 2.4 0 00.7-2.4c-1.1-3.2-4.3-2.2-8.4-8.2z"></path></g><path d="M15 23l5 7h8l-6-11-7 4zM11.7 8.3a14.7 14.7 0 00-.2 8.9c1.5 4.1 5.1 5 7.9 1.7a2.4 2.4 0 00.7-2.4c-1.1-3.2-4.3-2.2-8.4-8.2zM39 30l11-20 5 3-9 17h-7zm-9 0h7l-1-12-3-8-3 8v12z" style="mix-blend-mode:darken" fill="#a1f4c0" id="flah"></path></g></svg>',
    digitalMarketing: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g style="isolation:isolate"><path fill="#fff" d="M11 15h42v29H11z"></path><path fill="#dee0e2" d="M11 15v3h39v26h3V15H11z"></path><path d="M9.7 11.3h44.6a2.5 2.5 0 012.5 2.5v30.7a2.6 2.6 0 01-2.5 2.6H9.7a2.6 2.6 0 01-2.5-2.6V13.8a2.5 2.5 0 012.5-2.5zm1.1 3.5h42.4v28.7H10.8V14.8zM29 35.7a.9.9 0 011 1 1 1 0 01-1 1 1.1 1.1 0 01-1-1 1 1 0 011-1zm6.4 0a.9.9 0 011 1 1 1 0 01-2 0 .9.9 0 011-1zM20.9 21.9h3.4l3.1 10.2h10.4m-11-3.1h12.1M26 25.9h13.6m-3.1 21.5v6.9m-9 0v-6.9m-8.4 7.3h25.8" fill="none" stroke="#4d535b" stroke-miterlimit="10" stroke-width="2"></path><path style="mix-blend-mode:darken" fill="#a1f4c0" d="M27 47h10v7H27z"></path></g></svg>',
    writingAndTranslation: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-5{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v39.4a1.6 1.6 0 001.6 1.6h26.5a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6z" fill="#fff"></path><path d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v1.4h25.1a1.6 1.6 0 011.6 1.6v38h1.4a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6z" fill="#dee0e2"></path></g><g id="flah"><path d="M47 16h5v32.3a1.7 1.7 0 01-1.7 1.7 3.3 3.3 0 01-3.3-3.3V16z" style="mix-blend-mode:darken" fill="#a1f4c0"></path><path class="cls-5" d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v39.4a1.6 1.6 0 001.6 1.6h26.5a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6zm7.2 5.3h5.7v29.7c0 5.9-5.7 5.9-5.7 0V16.1z"></path><path class="cls-5" d="M56.3 31.9l.1-11.1h-9.5m2.8 32.6v-3.2M18 19.4h8.4M18 27.3h16.9M18 32h16.9M18 36.6h16.9M18 41.3h8.4"></path></g></g></svg>',
    videoAndAnimation: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g style="isolation:isolate"><path fill="#fff" d="M15 17h34v30H15z"></path><path fill="#dee0e2" d="M15 17v3h32v27h2V17H15z"></path><path d="M8 10.9v42.2m6.5-42.2v42.2M8.2 13.5h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1M8.2 32h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1m-6.1 6.2h6.1m35.2-39.6v42.2M56 10.9v42.2m-6.3-39.6h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1M49.7 32h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1m-6.1 6.2h6.1m-40.2-3.8h33.9M15.6 17.3h33.9m-22.2 6.6a9.4 9.4 0 11-3.4 12.8 9.3 9.3 0 013.4-12.8z" fill="none" stroke="#4d535b" stroke-miterlimit="10" stroke-width="2"></path><path fill="#4d535b" d="M29.3 27.9v8.8l3.9-2.2 3.8-2.2-3.8-2.2-3.9-2.2z"></path><path d="M8 14h6v36H8zm42 0h6v36h-6z" style="mix-blend-mode:darken" fill="#a1f4c0"></path></g></svg>',
    musicAndAudio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path d="M29 9.2a8.6 8.6 0 018.5 8.6v13.9a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5V17.8A8.6 8.6 0 0129 9.2z" fill="#fff"></path><path d="M28.5 10.2a8.5 8.5 0 00-6.9 3.6 8.4 8.4 0 014.9-1.6c4.7 0 7.5 3.9 7.5 8.6v13.9a8 8 0 01-1.6 4.9c2.2-1.5 4.6-4 4.6-6.9V18.8a8.6 8.6 0 00-8.5-8.6z" fill="#dee0e2"></path></g><g id="stroke"><path class="cls-4" d="M42.3 29.3v3.2A13.4 13.4 0 0129 45.8a13.4 13.4 0 01-13.3-13.3v-3.2M29 45.8v10.5m-10.9.5h21.8"></path><path class="cls-4" d="M29 9.2a8.6 8.6 0 018.5 8.6v13.9a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5V17.8A8.6 8.6 0 0129 9.2zm-8.1 8.3h4.8m-4.8 4.8h4.8m-4.8 4.9h4.8M20.9 32h4.8m6.6-14.5h4.8m-4.8 4.8h4.8m-4.8 4.9h4.8M32.3 32h4.8m10.7-14.1a2.3 2.3 0 013.1 2.1 3.7 3.7 0 01-3.1 3.4c-1.7.3-3.1-.6-3.1-2.2a3.7 3.7 0 013.1-3.3z"></path><path class="cls-4" d="M50.8 10.5l7.3 2.6V8.6L50.8 6v14.7"></path></g><path d="M47.8 17.9a2.3 2.3 0 013.1 2.1 3.7 3.7 0 01-3.1 3.4c-1.7.3-3.1-.6-3.1-2.2a3.7 3.7 0 013.1-3.3zm2.9-7.4l7.3 2.6V8.6L50.7 6" style="mix-blend-mode:darken" fill="#a1f4c0" id="flah"></path></g></svg>',
    programmingAndTech: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path fill="#fff" d="M8 21h48v32H8z"></path><path fill="#dee0e2" d="M8 21v3h44v29h4V21H8z"></path></g><g id="stroke"><path class="cls-4" d="M25.1 30.9l-7.6 6.2 7.6 6.1m13.8-12.3l7.6 6.2-7.6 6.1m-4.5-15.3l-3.9 18.3"></path><path class="cls-4" d="M55.5 11.3h-47v41.4h47V11.3zm0 9.4h-47"></path><path class="cls-4" d="M49.6 15.4a.9.9 0 00-1 1 1 1 0 001 1 1.1 1.1 0 001-1 1 1 0 00-1-1zm-6.7 0a.9.9 0 00-1 1 1 1 0 001 1 1.1 1.1 0 001-1 1 1 0 00-1-1z"></path></g><path style="mix-blend-mode:darken" fill="#a1f4c0" d="M8 11h48v10H8z" id="flah"></path></g></svg>',
    business: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-2{fill:#fff}</style></defs><g style="isolation:isolate"><g id="stroke"><path class="cls-2" d="M44.9 44.2a1.8 1.8 0 01-2.3 1.2h-.1a1.9 1.9 0 01-1-1h-.1l-3.8-6.2a1.2 1.2 0 00-1.6-.4 1.4 1.4 0 00-.4 1.7l3.8 6.1.6.9-.2.4a1.8 1.8 0 01-.8.7 1.4 1.4 0 01-1.4.1 1.8 1.8 0 01-1-.9h-.1l-3.8-6.3a1.2 1.2 0 10-2 1.2l3.7 6.3.3.5v.4a2.7 2.7 0 01-.8.7 1.9 1.9 0 01-2.5-.9l-3.6-6a1.2 1.2 0 00-2.1 1.1l3.5 5.8-.2.4a1.8 1.8 0 01-2.6.6 1.8 1.8 0 01-.7-.8h-.1l-6.2-10.5a1.3 1.3 0 00-1.1-.6h-4.8V22.8h12.1l-4.8 4.7a2.1 2.1 0 00-.1 3l.4.3.7.4a6 6 0 006.8 0l6.7-4.3 9.5 15.9a1.7 1.7 0 01.1 1.4z"></path><path class="cls-2" d="M45.1 39l-8.5-14.1a1.1 1.1 0 00-.7-.6 1.2 1.2 0 00-1 .2l-7.8 5a4.2 4.2 0 01-4.3 0l-.5-.3 8.6-8.3a3.4 3.4 0 012.3-1h8.6a3.1 3.1 0 011.3.3l7.5 3.1V39z"></path><path d="M3 18h10v24H3zm48 0h10v24H51z" style="mix-blend-mode:darken" fill="#a1f4c0"></path><path d="M44.8 42.8l-9.5-15.9-6.7 4.3a6 6 0 01-6.8 0l-.7-.4-.4-.3a2.1 2.1 0 01.1-3l4.8-4.7H13.5v2h9.1l3.4.2c-.8.8-1.7-.5-5 4a28.4 28.4 0 003.1 1.8v.2c2.1 1.3 3.4-.2 4 0l5-4 9.8 17.8c.1.1.1.1.1.2l.6.4h.1c1 .3 1-.2 1.3-1.2a1.7 1.7 0 00-.2-1.4z" fill="#dee0e2"></path><path d="M60.8 17.4h-9.5a1.2 1.2 0 00-1.2 1.2V21l-6.4-2.6a4.9 4.9 0 00-2.1-.4h-8.2a5.4 5.4 0 00-3.9 1.5l-1.4 1.4H13.9v-2.3a1.2 1.2 0 00-1.2-1.2H3.2A1.2 1.2 0 002 18.6v23.3a1.2 1.2 0 001.2 1.2h9.5a1.2 1.2 0 001.2-1.2V41H18l5.6 9.4a4.5 4.5 0 003.7 2.2 4.2 4.2 0 003.3-1.7l.9.4 1.4.2a4.2 4.2 0 003.5-2h.2l1.3.2a4.1 4.1 0 003.6-2h.1v-.3l1.1.2a4.1 4.1 0 004.1-4.2 3.9 3.9 0 00-.4-1.8l-.3-.5H50v.9a1.2 1.2 0 001.2 1.2h9.5a1.2 1.2 0 001.3-1.3V18.6a1.2 1.2 0 00-1.2-1.2zM11.7 41H4V19.4h7.7zm33.2 3.2a1.8 1.8 0 01-2.3 1.2h-.1a1.9 1.9 0 01-1-1h-.1l-3.8-6.2a1.2 1.2 0 00-1.6-.4 1.4 1.4 0 00-.4 1.7l3.8 6.1.6.9-.2.4a1.8 1.8 0 01-.8.7 1.4 1.4 0 01-1.4.1 1.8 1.8 0 01-1-.9h-.1l-3.8-6.3a1.2 1.2 0 10-2 1.2l3.7 6.3.3.5v.4a2.7 2.7 0 01-.8.7 1.9 1.9 0 01-2.5-.9l-3.6-6a1.2 1.2 0 00-2.1 1.1l3.5 5.8-.2.4a1.8 1.8 0 01-2.6.6 1.8 1.8 0 01-.7-.8h-.1l-6.2-10.5a1.3 1.3 0 00-1.1-.6h-4.8V22.8h12.1l-4.8 4.7a2.1 2.1 0 00-.1 3l.4.3.7.4a6 6 0 006.8 0l6.7-4.3 9.5 15.9a1.7 1.7 0 01.1 1.4zm.2-5.2l-8.5-14.1a1.1 1.1 0 00-.7-.6 1.2 1.2 0 00-1 .2l-7.8 5a4.2 4.2 0 01-4.3 0l-.5-.3 8.6-8.3a3.4 3.4 0 012.3-1h8.6a3.1 3.1 0 011.3.3l7.5 3.1V39zM60 41h-7.7V19.4H60z" fill="#4d535b"></path></g></g></svg>',
    lifestyle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10}.cls-4{stroke-width:2.1px}</style></defs><g style="isolation:isolate"><g id="stroke"><path d="M12 20.2h34.7V53a4 4 0 01-4 4H16a4 4 0 01-4-4V20.2z" fill="#fff"></path><path d="M12 20.2v4.2h30.5v31.5c0 .4-.1.7-.1 1 1.8-.4 4.3-2.1 4.3-4.1V20.2z" fill="#dee0e2"></path><path class="cls-4" d="M13 20.2h32.7a1 1 0 011 1V52a5 5 0 01-5 5H17a5 5 0 01-5-5V21.2a1 1 0 011-1zm8.5 0v8.4"></path><rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" stroke-width="2.23" fill="none" stroke="#4d535b" stroke-miterlimit="10"></rect><rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" style="mix-blend-mode:darken" fill="#a1f4c0"></rect><path class="cls-4" d="M46.7 28.6a9.5 9.5 0 010 18.9m-16.8-42V16"></path><path d="M36.2 7.6V16M23.6 7.6V16" stroke-width="1.88" fill="none" stroke="#4d535b" stroke-miterlimit="10"></path></g></g></svg>',
    data: '<svg xmlns="http://www.w3.org/2000/svg" width="59" height="41" viewBox="0 0 59 41" fill="none"><path d="M11.571 9.457V7.343H49.63v2.114H11.57zm39.115-5.286V2.057h3.171A3.171 3.171 0 0157.03 5.23v26.957h-2.643v-25.9a2.114 2.114 0 00-2.114-2.115h-1.586z" fill="#DEE0E2"></path><path d="M57.543 35.543A4.456 4.456 0 0153.086 40H11.57V6.571h8.986" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M50.857 32.2c.468-.791 1.415-1.114 2.229-1.114a4.456 4.456 0 014.457 4.457V5.457A4.456 4.456 0 0053.086 1c-.814 0-1.85.19-2.229 1.114V32.2z" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M3.786 6.171C2.248 6.171 1 7.174 1 8.4v25.5l2.786 5.572L6.57 33.9V8.4c0-1.226-1.248-2.229-2.785-2.229z" fill="#A1F4C0" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M1 12.857h5.571m13.086-6.286h31.2m-24.485 4.886h-8.458v9.514h8.457v-9.514zm5.285 0H45.93m-14.273 4.457H45.93m-14.273 4.458h10.929" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M39.057 35.772h7.4v-7.4h-7.4v7.4zm-6.343-8.458h-7.4v8.458h7.4v-8.458zm6.343-2.114h-6.343v10.572h6.343V25.2zM17.914 35.772h7.4v-4.23h-7.4v4.23z" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10"></path></svg>',
    photography: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M58.703 18.723h-14l-7-9h-17l-7 9h-7c-1.7 0-3 1.3-3 3v27c0 1.7 1.3 3 3 3h52c1.7 0 3-1.3 3-3v-27c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path><path d="M50.703 15.723v-2h7v2" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path><path d="M29.703 46.723c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z" fill="#D0F7E6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path><path d="M29.703 42.723c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" fill="#fff" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path><path d="M24.103 30.723c.8-2.3 3-4 5.7-4m-5.3 9c-.5-.9-.8-1.9-.8-3m-16-9h6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path><path d="M58.703 51.723h-9v-33h9c1.7 0 3 1.3 3 3v27c0 1.6-1.3 3-3 3z" fill="#D0F7E6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path><path d="M42.703 44.723h2" stroke="#404145" stroke-width="2" stroke-miterlimit="10"></path></svg>',
    goldStar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>',
    continueBtn: '<span><svg width="16" height="16" viewBox="0 0 16 16"xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg></span>',
    onlineIndicator: '<svg width="4px" height="4px" viewBox="0 0 16 16"xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path></svg></span>',
    filterArrow: '<svg width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path></svg>',
    heart: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>',
    greeV:'<svg width="16" height="16" viewBox="0 0 11 9"xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>',
    visa:'<span><svg class="svg-visa" height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="形状_1_3_" style="enable-background:new    ;"><g id="形状_1"><g><path d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#005BAC;"></path></g></g></g><g id="形状_1_2_" style="enable-background:new    ;"><g id="形状_1_1_"><g><path d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#F6AC1D;"></path></g></g></g></svg></span>',
    search: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>',
}

function getGigSvg(iconName) {
    return gigSvgs[iconName]
}

export const svgServive = { getGigSvg }