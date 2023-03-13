import React from 'react'

const RecentReview = () => {
  return (
    <div>
         <section id="recent-reviews">
                <h1>Upcoming Games</h1>
                <div class="flex">
                    <div class="box">
                        <span class="rating-badge gold">9.3</span>
                        <div class="recent-reviews-image">
                            <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_1.jpg" />
                        </div>
                        <div>
                            <h4>Assasin's Creed</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div class="box">
                        <span class="rating-badge purple">9.5</span>
                        <div class="recent-reviews-image">
                            <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_2.jpg" />
                        </div>
                        <div>
                            <h4>Doom</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div class="box">
                        <span class="rating-badge green">9.1</span>
                        <div class="recent-reviews-image">
                            <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_3.jpg" />
                        </div>
                        <div>
                            <h4>Overwatch</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div class="box">
                        <span class="rating-badge violet">9.7</span>
                        <div class="recent-reviews-image">
                            <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_4.jpg" />
                        </div>
                        <div>
                            <h4>GTA</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default RecentReview