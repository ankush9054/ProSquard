import React from 'react'

const HeroContent = () => {
  return (
    <div>
        <section id="hero-image">
                <div class="hero-marketing-text">
                    <h1>The Best <span>Games</span> Out There</h1>
                    {/* <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </h5> */}
                    <h5>"Welcome to the ultimate gaming tournament experience, where champions are made and legends are born!"</h5>
                    <button>Join Us</button>
                </div>
            </section>

            <section id="latest-news">
                <div class="flex">
                    <h5>Latest News</h5>
                    <div id="latest-news-container">
                        <div class="latest-news-item">
                            <span class="badge new">Hot</span>
                            <span class="latest-news-text">Next turnament scheduled on 3PM</span>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default HeroContent