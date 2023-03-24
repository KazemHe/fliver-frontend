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


        <my-star-rating :gig="gig" ></my-star-rating>
        
        <section class="main-gig">
            <div class="gig-overview">
                <h1>{{ gig.title }}</h1>
                <section class="user-preview">
                    <section class="seller-preview-short flex align-center">
                        <div class="img-container"><img :src=gig.owner.imgUrl></div>
                        <div class="text-container">
                            <div class="text">
                                <a aria-current="page" href="#aboutSeller"
                                    class="router-link-active router-link-exact-active"
                                    @click.prevent="scrollToAboutSeller">
                                    <p class="seller-username">{{ gig.owner.fullname }}</p>
                                </a>
                                <p class="seller-level">Level {{ gig.owner.level }} Seller </p>
                                <div class="line"> |

                                </div>
                            </div>
                            <div class="rate">
                                <ul class="stars clean-list flex">
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li>
                                        <span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                </ul>
                                <p class="rate-score">4.9</p>
                                <p class="seller-reviews-count">(344)</p>
                            </div>
                        </div>
                    </section><!---->
                </section>







                <div class=""><img :src=gig.imgUrl class="carosel-img"></div>
                <div class="seller-overview">
                    <div class="flex">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <header class="What-people-loved flex">
                <h2 class="section-title">What people loved about this seller</h2>
                <button class="sPdE5j4 zUvc8Si co-white text-button reviews-button bg-co-green-700">See all reviews</button>
            </header>
            <section class="review-list-container">
                <section class="review-list">
                    <section>
                        <section class="review-preview">
                            <section class="review-preview-snippet">
                                <section class="review-snippet-temporary grid">
                                    <img class="reviewer-img"
                                        src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/dea22d35dccefb507c34eb906cc01554-1672399959338/f0a729bd-0973-47a8-b4d7-e3e2b1c6b858.jpg"
                                        alt="user-img">
                                    <section class="reviewer-details flex">
                                        <p class="username">jaygreen341</p>
                                        <section class="country-wrapper flex">
                                            <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                                                alt="reviewer-flag">
                                            <p class="country">United States</p>
                                            <ul class="stars clean-list flex">
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span>
                                                </li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span>
                                                </li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span>
                                                </li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span>
                                                </li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span>
                                                </li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <p class="review-description">Working with bnn_marketing has been very easy! They
                                            provided a product that is better than what I expected. Even when I made a
                                            mistake on my order, Daniel was very understanding and professional. There are
                                            many companies to choose from; However, I can see why bnn_marketing is a top
                                            seller, I would highly recommend them to anyone!</p>
                                        <p class="reviewed-at">Published 1 month ago</p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>



            <div class="about-the-gig">
                <h2>About the gig</h2>
                <p>{{ gig.description }}</p>
            </div>

            <section ref="aboutSeller" id="aboutSeller" class="seller-preview">
                <h2>About The Seller</h2>
                <section class="user-preview">
                    <section class="seller-preview-long flex">
                        <div class="img-container">
                            <img :src="'https://' + gig.owner.imgUrl" alt="seller-img">
                        </div>
                        <section class="seller-details flex column">
                            <section class="name-line flex">
                                <p class="seller-username">{{ gig.owner.fullname }}</p>
                                <div class="online-indicator">
                                    <span><svg width="4px" height="4px" viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                            <path
                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z">
                                            </path>
                                        </svg></span>
                                    <p>Online</p>
                                </div>
                            </section>
                            <p class="seller-level">Level 2 Seller </p>
                            <section class="seller-reviews-stat flex align-center">
                                <ul class="stars clean-list flex">
                                    <li>
                                        <span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span>
                                    </li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span></li>
                                    <li><span class="flex justify-center align-center"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span></li>
                                </ul>
                                <p class="rate-score">4.9</p>
                                <p class="seller-reviews-count">(344)</p>
                            </section>
                            <button class="contact-me-btn">Contact Me</button>
                        </section>
                    </section>
                </section>
                <section class="seller-details-container">
                    <section class="seller-stat">
                        <ul class="grid clean-list user-info">
                            <li class="flex column"><span class="key">From</span>
                                <span class="value">Bangladesh</span>
                            </li>
                            <li class="flex column"><span class="key">Member since</span>
                                <span class="value">Jan 2023</span>
                            </li>
                            <li class="flex column"><span class="key">Avg. response time</span>
                                <span class="value">1 hour</span>
                            </li>
                            <li class="flex column"><span class="key">Last delivery</span>
                                <span class="value">about 12 hours</span>
                            </li>
                        </ul>
                    </section>
                    <section class="seller-desc">
                        <p>Hello! This is Rashin Faria, a Data Entry Specialist &amp; Virtual Assistant at your service. I
                            have excellent experience in Data Entry, Data Processing, Data Uploading, MS Word/Excel, Google
                            Spreadsheet, PDF, Web Research, Ecommerce Product Entry, Data Scraping and others. With a 24/7
                            supporting team we work together for the betterment of the projects. We have extensive
                            experience to do our project very fast and professionally. Client satisfaction is our first
                            priority. Order Now! Regards Rashin Faria</p>
                    </section>
                </section>
            </section>

            <section id="reviews" class="reviews-container">
                <section class="reviews-stat flex column">
                    <section class="stat-header flex align-center">
                        <h2>344 Reviews </h2>
                        <section class="reviews-rate flex">
                            <ul class="stars clean-list flex">
                                <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg></span>
                                </li>
                                <li>
                                    <span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 1792 1792" width="15" height="15">
                                            <path
                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                            </path>
                                        </svg>
                                    </span>
                                </li>
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
                            </ul>
                            <p class="rating-score">5</p>
                        </section>
                    </section>
                    <section class="stat-main flex">
                        <section class="stars-counters">
                            <ul class="clean-list flex column">
                                <li class="flex align-center"><span class="key">5 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="310"></progress><span class="star-num">(310)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">4 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="28"></progress><span class="star-num">(28)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">3 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="6"></progress><span class="star-num">(6)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">2 Stars</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="2"></progress><span class="star-num">(2)</span></section>
                                </li>
                                <li class="flex align-center"><span class="key">1 Star</span>
                                    <section class="progress-container flex align-center"><progress max="344"
                                            value="1"></progress><span class="star-num">(1)</span></section>
                                </li>
                            </ul>
                        </section>
                        <section class="ranking flex column">
                            <h6>Rating Breakdown</h6>
                            <ul class="clean-list flex column">
                                <li class="flex align-center space-between"><span class="key">Seller communication
                                        level</span>
                                    <section class="star-container flex align-center"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15"
                                                height="15">
                                                <path
                                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg></span><span class="value">5</span></section>
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
                                            </svg></span><span class="value">5</span></section>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section class="review-list"><!---->
                    <section>
                        <ul class="clean-list">
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/men/17.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">bartstrijbos</p>
                                        <section class="country-wrapper flex"><img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png"
                                                alt="reviewer-flag">
                                            <p class="country">Netherlands</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">2 months ago</p>
                                        </section>
                                        <p class="review-description">Use your revisions and communication, and you will
                                            have something that works for you! I recommend modernmarvel for the price they
                                            ask! I did not know what to expect from my first buy on FIverr. The previews
                                            where what I was going for, so I thought why not give it a try. The initial
                                            delivery had two good concepts and three concepts I did not like. The two good
                                            concepts however, where not really what I wanted though. I submitted a revision
                                            proposal and hoped for the best. This is where this seller shines! From the
                                            initial designs, he worked quickly with every suggestion I made for revisions
                                            and was good in communication. I slowly saw my project evolving to something I
                                            love. Recommended!</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/men/9.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">v_winko33</p>
                                        <section class="country-wrapper flex"><img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                                alt="reviewer-flag">
                                            <p class="country">United States</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                            <p class="reviewed-at"> 3 weeks ago</p>
                                        </section>
                                        <p class="review-description">Working with this seller was a great experience in
                                            that he was quick to respond (considering the 11+ hr time zone difference),
                                            friendly, reliable, and professional. He created some concepts with literally no
                                            reference the first time around, and the second time around I gave him more of
                                            an idea of what I was looking for and found the ideal logo. You get what you pay
                                            for, and the price I think is a very good deal that's hard to find.
                                            Communication +asking questions is key to get all that you want and need from
                                            this great offer. Although I am satisfied with the logo, I probably would've
                                            liked something more like the work he shows in his second picture on his
                                            profile/gigs. I do recommend him!</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/10.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">brendanpaull</p>
                                        <section class="country-wrapper flex"><img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ef-1f1f5.png"
                                                alt="reviewer-flag">
                                            <p class="country">Japan</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                            </ul>
                                            <p class="rating-score">5</p>
                                            <p class="reviewed-at"> 1 month ago</p>
                                        </section>
                                        <p class="review-description">Seller was extremely communicative and always
                                            responded very quickly even on his/her day off (Sunday). While I got something
                                            that will get my started and I suppose I got what I paid for (the price was
                                            definitely quite low), I would be hard pressed to call the designs I got as
                                            "modern" or "minimalist" like the logo presented in the profile. They felt like
                                            clip-art from 10 to 15 years ago attached to my website name.</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/72.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">tracyblehm</p>
                                        <section class="country-wrapper flex"><img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png"
                                                alt="reviewer-flag">
                                            <p class="country">Canada</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at"> 2 months ago</p>
                                        </section>
                                        <p class="review-description">I was a little nervous as I had never hired anyone
                                            before and have had bad experiences on other platforms. However this was
                                            absolutely marvelous. I loved the design. It was shocking how fast it was done
                                            and how amazing it turned out. I will definitely be hiring them again for my
                                            other projects that are coming up. Thank-you!!</p>
                                    </section>
                                </section>
                            </section>
                            <section class="review-preview"><!---->
                                <section class="review-preview-long grid"><img class="reviewer-img"
                                        src="https://randomuser.me/api/portraits/women/10.jpg" alt="user-img">
                                    <section class="reviewer-details flex column">
                                        <p class="username">jai_s22</p>
                                        <section class="country-wrapper flex"><img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                                alt="reviewer-flag">
                                            <p class="country">United States</p>
                                        </section>
                                    </section>
                                    <section class="review-content">
                                        <section class="review-rate flex align-center">
                                            <ul class="stars clean-list flex">
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                                <li><span class="flex justify-center align-center"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"
                                                            width="15" height="15">
                                                            <path
                                                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg></span></li>
                                            </ul>
                                            <p class="rating-score">4</p>
                                            <p class="reviewed-at">2 weeks ago</p>
                                        </section>
                                        <p class="review-description">Using this service was a pretty decent experience. It
                                            took a bit longer than I wanted to finally get the final design. I had to go
                                            back and forth for a week trying to find the correct revision of the design. At
                                            first, I thought the experience of the designer was not the best due to finding
                                            some logos with minimal effort. Once I messaged the designer that I felt that
                                            the designs that they were producing were not satisfying me, they then were able
                                            to put a lot of effort into my ideas. I personally had to come up with the
                                            design of my logo instead of them using their experience and trusting them to
                                            come up with one themselves. Eventually, they did deliver so I am happy with the
                                            way it finished.</p>
                                    </section>
                                </section>
                            </section>
                        </ul>
                    </section>
                </section>
            </section>
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
import MyStarRating from '../cmps/MyStarRating.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service.local'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import { svgServive } from '../services/svg.service.js'

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
        scrollToAboutSeller() {
            this.$refs.aboutSeller.scrollIntoView({ behavior: 'smooth' });
        },

        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
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
    },

    components: {
    MyStarRating
  },
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



