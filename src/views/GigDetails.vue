<template>
    <section class="gig-nav">
        <ul class="nav-info" ref="nav-info">
            <li class="green">Overview</li>
            <li>About the seller</li>
            <li>Compare packages</li>
            <li>Reviews</li>
        </ul>
    </section>

    <section class="gig-info flex" ref="filter">
        <section class="main-gig">
            <div class="gig-overview">
                <h1>{{ gig.title }}</h1>
                <div class=" seller-preview-short flex">
                    <div><img :src=gig.owner.imgUrl class="info-img"></div>
                    <div>
                        <span class="seller-name">{{ gig.owner.fullname }}</span>
                        <span class="seller-rate">{{ gig.owner.rate }} |</span>
                    </div>
                </div>
                <hr>
                <div class=""><img :src=gig.imgUrl class="carosel-img"></div>
                <div class="seller-overview">
                    <div class="flex">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <hr>

            <div class="about-the-gig">
                <h2>About the gig</h2>
                <p>{{ gig.description }}</p>
            </div>

            <hr>

            ABOUT THE SELLER
            <section class="profile-card">
                <section class="profile-info flex">
                    <div class="user-profile-pic flex">
                        <label for="">
                            <div class="profile-pic"><img :src=gig.owner.imgUrl></div>
                        </label>
                    </div>

                    <div class="user-profile-label">
                        <div class="username-line flex">
                            <span>{{ gig.owner.fullname }}</span>
                            <div class="status">
                                <span class="glAQDp5 circle-icon" aria-hidden="true" style="width: 4px; height: 4px;"><svg
                                        width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z">
                                        </path>
                                    </svg></span>
                                Online
                            </div>
                        </div>
                        <div class="one-liner-rating-wrapper flex">
                            <p class="one-liner">UI UX Designer</p>
                            <div class="flex">
                                <div class="orca-rating seller-rating color-yellow tbody-6">
                                    <div class="stars"><span class="glAQDp5 orca-star" style="width:15px;height:15px"
                                            aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z">
                                                </path>
                                            </svg></span><span class="glAQDp5 orca-star" style="width:15px;height:15px"
                                            aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z">
                                                </path>
                                            </svg></span><span class="glAQDp5 orca-star" style="width:15px;height:15px"
                                            aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z">
                                                </path>
                                            </svg></span><span class="glAQDp5 orca-star" style="width:15px;height:15px"
                                            aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z">
                                                </path>
                                            </svg></span><span class="glAQDp5 orca-star" style="width:15px;height:15px"
                                            aria-hidden="true"><svg width="16" height="15" viewBox="0 0 16 15"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.4056 8.74291L13.8772 6.37996L10.4535 5.88847L9.81872 5.79395L9.53021 5.22684L8.00107 2.18336V11.2854L8.56849 11.5785L11.6268 13.1664L11.0497 9.81096L10.9343 9.18715L11.4056 8.74291ZM15.7525 6.26654L12.2615 9.61248L13.0886 14.3384C13.1559 14.7543 13.002 15 12.7039 15C12.5981 15 12.4635 14.9622 12.3192 14.8866L8.00107 12.656L3.68295 14.8866C3.53869 14.9622 3.40405 15 3.29826 15C3.00013 15 2.84625 14.7543 2.91357 14.3384L3.74065 9.61248L0.239988 6.26654C-0.173552 5.86011 -0.0389107 5.46314 0.538122 5.37807L5.36596 4.68809L7.52983 0.387524C7.65485 0.132325 7.82796 0 8.00107 0C8.17418 0 8.33767 0.132325 8.47231 0.387524L10.6362 4.68809L15.464 5.37807C16.0411 5.46314 16.1757 5.86011 15.7525 6.26654Z">
                                                </path>
                                            </svg></span></div><b class="rating-score">4.7</b><span
                                        class="ratings-count">(<!-- -->33<!-- -->)</span>
                                </div>
                            </div>
                        </div>

                        <button class="contact-me">contact-me</button>
                    </div>
                </section>


                <section class="seller-details-container"></section>

                <h1>{{ gig.owner.rate }}</h1>
                <h1>{{ gig.owner.level }}</h1>
                <h1>{{ gig.country }}</h1>
                <h1>{{ gig.about }}</h1>
            </section>
            <hr>
            <section class="reviews-container" v-if="gig.reviews">
                <section class="reviews-stat flex column">
                    <section class="stat-header flex align-center">
                        <h2>200 Reviews</h2>
                        <section class="reviews-rate flex">
                            <ul class="stars clean-list flex">
                                <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg></span></li>
                                <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg></span></li>
                                <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg></span></li>
                                <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg></span></li>
                                <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg>
                                    </span>
                                </li>
                            </ul>
                            <p class="rating-score">5</p>
                        </section>

                    </section>
                    <section class="stat-main flex">
                        <section class="stars-counters">
                            <ul class="clean-list flex column">
                                <li class="flex align-center">
                                    <span class="key">5 Stars</span>
                                    <section class="progress-container flex align-center">
                                        <progress max="344" value="310"></progress>
                                        <span class="star-num">(310)</span>
                                    </section>
                                </li>
                                <li class="flex align-center">
                                    <span class="key">4 Stars</span>
                                    <section class="progress-container flex align-center">
                                        <progress max="344" value="28"></progress>
                                        <span class="star-num">(28)</span>
                                    </section>
                                </li>
                                <li class="flex align-center">
                                    <span class="key">3 Stars</span>
                                    <section class="progress-container flex align-center">
                                        <progress max="344" value="6"></progress>
                                        <span class="star-num">(6)</span>
                                    </section>
                                </li>
                                <li class="flex align-center">
                                    <span class="key">2 Stars</span>
                                    <section class="progress-container flex align-center">
                                        <progress max="344" value="2"></progress>
                                        <span class="star-num">(2)</span>
                                    </section>
                                </li>
                                <li class="flex align-center">
                                    <span class="key">1 Star</span>
                                    <section class="progress-container flex align-center">
                                        <progress max="344" value="1"></progress>
                                        <span class="star-num">(1)</span>
                                    </section>
                                </li>
                            </ul>
                        </section>
                        <section class="ranking flex column">
                            <h6>Rating Breakdown</h6>
                            <ul class="clean-list flex column">
                                <li class="flex align-center space-between">
                                    <span class="key">Seller communication level</span>
                                    <section class="star-container flex align-center">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span><span class="value">5</span>
                                    </section>
                                </li>
                                <li class="flex align-center space-between"><span class="key">Recommend to a friend</span>
                                    <section class="star-container flex align-center"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span><span class="value">5</span></section>
                                </li>
                                <li class="flex align-center space-between"><span class="key">Service as described</span>
                                    <section class="star-container flex align-center"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                        <span class="value">5</span>
                                    </section>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>




                <section class="review-list" v-if="gig.reviews">
                    <ul class="reviews-list" v-for="review in gig.reviews">
                        <li>
                            <h1>{{ review.name }}</h1>
                            <h1>{{ review.country }} {{ review.flag }}</h1>
                            <h1>Rate: 4</h1>
                            <h1>{{ review.review }}</h1>
                        </li>
                    </ul>
                </section>

            </section>
            <section v-else>This user dont have reviews for now </section>
        </section>


        <section class="package-container">
            <section class="gig-package">
                <section class="package-content">
                    <section class="header flex space-between">
                        <h3 class="title">Order Details</h3>
                        <h3 class="price regular"> US$50</h3>
                    </section>
                    <p>1 custom logo+high resolution file+3d mockup+logo transparency+ 300dpi</p>
                    <section class="additional-info flex">
                        <div class="delivery-wrapper flex">
                            <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                    fill="#62646a">
                                    <path
                                        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
                                    </path>
                                    <path d="M9 4H7v5h5V7H9V4z"></path>
                                </svg>
                            </span>
                            <p>1 Days Delivery</p>
                        </div>
                        <div class="revisions-wrapper flex"><span><svg width="16" height="16" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                    <path
                                        d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
                                    </path>
                                    <path
                                        d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
                                    </path>
                                </svg></span>
                            <p> Unlimited Revisions </p>
                        </div>
                    </section>
                    <ul class="features clean-list">
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> 1 concept included</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Logo transparency</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Vector file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Printable file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include 3D mockup</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include source file</li>
                        <li class="regular"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                    </path>
                                </svg></span> Include social media kit</li>
                    </ul>
                    <a href="#/gig/payment/63910d5246b48fa0aaeec9ab" class="">
                        <button class="continue-btn"> Continue <span><svg width="16" height="16" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                    <path
                                        d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z">
                                    </path>
                                </svg></span>
                        </button>
                    </a>
                </section>
                <section class="contact-seller">
                    <button>Contact Seller</button>
                </section>
            </section>
        </section>


    </section>
</template>
  
<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service.local'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'

export default {
    props: ['gig'],
    data() {
        return {
            gig: null,
        }
    },

    watch: {
        '$route.params': {
            async handler() {
                this.loadGig()
            },
            immediate: true,
        },
    },
    //     async created() {
    //     try {
    //       await this.loadGig()
    //     } catch (err) {
    //       console.error(err)
    //     }
    //   },
    //     mounted(){
    // this.headerObserver = new IntersectionObserver(this.headerObserver,{
    //     rootMargin:"-91px 0px 0px"
    // });
    // this.headerObserver.observe(this.$refs.nav-info)
    //     },

    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        gigs() {
            return this.$store.getters.gigs
        }
    },

    async created() {
        const { gigId } = this.$route.params
        console.log(gigId);
        const gig = await gigService.getById(gigId)
        console.log('gig', gig.reviews);
    },

    methods: {
        async loadGig() {
            try {
                const { gigId } = this.$route.params
                const gig = await gigService.getById(gigId)


                this.gig = gig
            } catch {
                console.log('Could Not load gig')
            }
        }
    },


    goToHome() {
        this.$router.push(`/`)
    },
    // onheaderObserver(entries) {
    //     entries.forEach((entry) => {
    //         this.stickyNav = entry.isIntersecthing ? false : true
    //     })
    // },

    async addGigMsg(gigId) {
        try {
            await this.$store.dispatch(getActionAddGigMsg(gigId))
            showSuccessMsg('Gig msg added')
        } catch (err) {
            console.log(err)
            showErrorMsg('Cannot add gig msg')
        }
    },
    printGigToConsole(gig) {
        console.log('Gig msgs:', gig.msgs)
    }
}



// const icon = {
//   mounted: (el, binding) => {
//     const icon = iconService.getSvg(binding.value)
//     el.innerHTML = icon
//   },
// }

// const clickOutsideDirective = {
//   mounted(el, { value: cb }) {
//     el.clickOutside = ({ clientX, clientY }) => {
//       const { left, top, width, height } = el.getBoundingClientRect()
//       if (
//         !(
//           clientX > left &&
//           clientX < left + width &&
//           clientY > top &&
//           clientY < top + height
//         )
//       ) {
//         cb()
//         // console.log('outside')
//       } else {
//         // console.log('inside')
//       }
//     }
//     setTimeout(() => {
//       document.addEventListener('click', el.clickOutside)
//     }, 0)
//   },
//   unmounted(el) {
//     document.removeEventListener('click', el.clickOutside)
//   },
// }

</script>



