import './Page.css'
import img1 from '../static/img/img-1.jpg';
import img2 from '../static/img/img-2.jpg';
import img3 from '../static/img/img-3.jpg';

function Page({count,handleInput}) {
    return (
        <div className="blog-container">
            <header className='blog-header'>
                <h1>Using useEffect</h1>
                <div className='underline'></div>
                <form>
                    <div className="form-group">
                        <label>Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Enter text' onKeyUp={handleInput}></textarea>
                        <div className="words-count">Word(s): {count}</div>
                    </div>
                </form>
            </header>
            <main className='blog-content'>
                <section className='blog-content-part1'>
                    <h2>These texts were created by Lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro magni nam vel, debitis optio repellat reprehenderit quod ad, provident et illo vero dolore expedita quisquam hic accusamus recusandae non!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit dolor soluta reprehenderit illum adipisci corrupti atque ducimus. Deserunt doloribus voluptate ipsum hic neque voluptatem itaque quos repudiandae officia amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ipsum explicabo aliquid mollitia vel, rem est dolor modi laboriosam expedita.</p>
                    <figure>
                        <img src={img1} alt="" />
                        <figcaption>Random Image 1</figcaption>
                    </figure>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos modi nihil minima nam quae rem cupiditate eaque voluptate hic repudiandae recusandae nostrum provident beatae ipsum suscipit corporis eveniet, voluptatum libero! Magnam consectetur libero animi possimus.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas saepe amet dolorem architecto molestias non veritatis obcaecati similique est voluptate voluptatibus reprehenderit culpa, sint vero repudiandae? Obcaecati ducimus, molestias, dolorem rerum natus quidem placeat amet, optio quam consequuntur aspernatur assumenda!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique ipsam dignissimos aut. Doloremque, sunt.</p>
                </section>

                <section className='blog-content-part2'>
                    <h2>Lorem ipsum dolor consectetur adipisicing.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aliquid ipsum. Quibusdam amet doloremque alias quam ad necessitatibus dolores possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam ducimus ratione fugiat voluptas corporis repudiandae minima sed, accusantium temporibus amet, dolores nesciunt eveniet earum possimus adipisci, deserunt officia maiores? Iure maiores vero dicta, aliquid molestiae quis deserunt quibusdam dignissimos!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit earum voluptates commodi dolorem recusandae quia eius, minus ut, nemo similique laboriosam itaque illo est facilis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cum tempora, sequi et necessitatibus impedit labore placeat saepe incidunt, ut dicta. Iure, fugiat facilis saepe quis delectus quae atque! Laudantium.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus blanditiis laboriosam nesciunt voluptas, officiis molestiae provident corporis eaque, obcaecati aliquid doloremque molestias explicabo voluptatem possimus!</p>
                    <figure>
                        <img src={img2} alt="" />
                        <figcaption>Random Image 2</figcaption>
                    </figure>
                </section>

                <section className='blog-content-part3'>
                    <h2>Lorem ipsum quo consectetur ullam.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, excepturi similique! Repudiandae ex nihil excepturi error maxime dolorum nesciunt delectus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis deserunt ut iure amet quo consectetur ullam, sapiente architecto error magni, magnam placeat porro tempore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta eius reprehenderit nemo? Culpa doloribus iste rerum? Vero aliquid aut temporibus consequatur?</p>
                    <figure>
                        <img src={img3} alt="" />
                        <figcaption>Random Image 3</figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos illum suscipit, enim laboriosam dolorem quisquam. Similique porro ducimus molestias! Culpa exercitationem at dignissimos deleniti voluptatum a! Odit, quae suscipit!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe magnam aliquid facere dolores libero animi quae veritatis natus non ducimus, exercitationem voluptatum accusamus iste, consequatur vel eius, corporis vero aspernatur incidunt quia officia ad? Odit delectus saepe, sapiente ipsam omnis tempore quis eum at non?</p>
                </section>
            </main>
        </div>
    );
}

export default Page;