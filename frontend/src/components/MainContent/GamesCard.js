import React from 'react'

const GamesCard = () => {
  return (
    <div>
         <section id="recent-games">
                <h1>Recent Games</h1>
                <div class="flex2">
                    <div class="box">
                        <span class="badge new">New</span>
                        <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_1.jpg" />
                        <div class="box-lower-section">
                            <h4>Free fire</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem ipsum dolor sit amet.</p>
                            <a href="#" class="comments">3 tournaments</a>
                        </div>
                    </div>
                 

                    <div class="box">
                        <span class="badge racing">Racing</span>
                        <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_2.jpg" />
                        <div class="box-lower-section">
                            <h4>Mobile legend</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem ipsum dolor sit amet.</p>
                            <a href="#" class="comments">3 tournaments</a>
                        </div>
                    </div>
                    
                    <div class="box">
                        <span class="badge racing">Fighting</span>
                        <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_2.jpg" />
                        <div class="box-lower-section">
                            <h4>Clash of Clans</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem ipsum dolor sit amet.</p>
                            <a href="#" class="comments">2 tournaments</a>
                        </div>
                    </div>
                    
                                        

                    <div class="box">
                        <span class="badge adventure">Adventure</span>
                        <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_3.jpg" />
                        <div class="box-lower-section">
                            <h4>BGMI</h4>
                            <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem ipsum dolor sit amet.</p>
                            <a href="#" class="comments">3 tournaments</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default GamesCard